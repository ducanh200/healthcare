import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();
  const [activeTiming, setActiveTiming] = useState(null);
  const [shiftId, setShiftId] = useState(null);
  const [departmentData, setDepartmentData] = useState(null); // State to store department data
  const [activeDay, setActiveDay] = useState(0); // Initialize active day as 0 (for today)
  const [dateList, setDateList] = useState([]); // Store the list of dates
  const [shifts, setShifts] = useState([]); // State to store shifts data

  useEffect(() => {
    const today = new Date(); // Get today's date

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dates = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const dayOfWeek = daysOfWeek[date.getDay()];
      const formattedDate = (
        <>
          {dayOfWeek}
          <br />
          {date.getDate()} {date.toLocaleString('en-us', { month: 'short' })}
        </>
      );

      dates.push(formattedDate);
    }
    setDateList(dates);
  }, []);

  const handleDayClick = (index) => {
    setActiveDay(index);
    const today = new Date();
    const selectedDate = new Date(today.getTime() + (index + 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    fetchShiftsData(selectedDate, id); // Fetch shifts data for  the selected date and department id
  };

  const handleTimingClick = (timing) => {
    setActiveTiming(timing);
  };

  const fetchShiftsData = async (selectedDate, id) => {
    try {
      const response = await api.get(`${url.SHIFT.DETAIL}?date=${selectedDate}&departmentId=${id}`);
      setShifts(response.data);
      console.log(response); // Set the shifts data in state
    } catch (error) {
      console.error("Error fetching shifts data:", error);
    }
  };

  const fetchDepartmentData = async () => {
    try {
      const response = await api.get(url.DEPARTMENT.DETAIL + `/${id}`);
      setDepartmentData(response.data); // Set department data in state
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); 
    const formattedTomorrow = tomorrow.toISOString().split('T')[0];
    fetchShiftsData(formattedTomorrow, id);
    fetchDepartmentData();
  }, [id]);

  const handleNextClick = async () => {
    if (!activeTiming) {
      alert("Please select a time before proceeding.");
      return;
    }
  
    const selectedShift = shifts.find((shift) => shift.time === activeTiming);
  
    if (selectedShift.status === 1) {
      alert("The selected shift is not available.");
      return;
    }
  
    const today = new Date();
    const selectedDate = new Date(today.getTime() + (activeDay + 1) * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000);
  
    try {
      if (selectedShift) {
        // Set the shift ID in localStorage
        localStorage.setItem("departmentId", id);
        localStorage.setItem("selectedShiftId", selectedShift.id);
        localStorage.setItem("selectedDate", selectedDate.toISOString().split('T')[0]); // Chuyển đổi ngày thành chuỗi YYYY-MM-DD
        localStorage.setItem("selectedTime", activeTiming);
        window.location.href = "/checkout";
      } else {
        console.warn("No shift found for the selected time:", activeTiming);
      }
    } catch (error) {
      console.error("Error during booking process:", error);
    }
  };

  const filterShiftsBySession = (session) => {
    return shifts.filter(shift => shift.session.toLowerCase() == session);
  };

  const morningShifts = filterShiftsBySession("morning");
  const afternoonShifts = filterShiftsBySession("afternoon");

  return (
    <div className="content content-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="booking-header">
              <h4 className="booking-title">Select Available Slots</h4>
            </div>
            <div className="card booking-card">
              <div className="card-body time-slot-card-body">
                <div className="booking-date-slider">
                  <ul className="date-slider slick">
                    {dateList.map((date, index) => (
                      <li key={index} className={index === activeDay ? "active" : ""} onClick={() => handleDayClick(index)}>
                        <h4>{date}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="time-slot time-slot-blk">
                      <h4>Morning</h4>
                      <div className="time-slot-list">
                        <ul>
                          {morningShifts.map((shift, index) => (
                            <li key={index} className={morningShifts.length > 3 && index > 2 ? "time-slot-open time-slot-morning" : ""}>
                              <a
                                className={`timing ${activeTiming === shift.time ? "active" : ""}`}
                                href="javascript:void(0);"
                                onClick={() => handleTimingClick(shift.time)}
                                style={shift.status === 1 ? { backgroundColor: 'gray', pointerEvents: 'none' } : {}}
                              >
                                <span><i className="feather-clock"></i> {shift.time}</span>
                              </a>
                            </li>
                          ))}
                          {morningShifts.length > 3 && (
                            <li>
                              <div className="load-more-timings load-more-morning">
                                <a href="javascript:void(0);">Load More</a>
                              </div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="time-slot time-slot-blk">
                      <h4>Afternoon</h4>
                      <div className="time-slot-list">
                        <ul>
                          {afternoonShifts.map((shift, index) => (
                            <li key={index} className={afternoonShifts.length > 3 && index > 2 ? "time-slot-open time-slot-afternoon" : ""}>
                              <a
                                className={`timing ${activeTiming === shift.time ? "active" : ""}`}
                                href="javascript:void(0);"
                                onClick={() => handleTimingClick(shift.time)}
                                style={shift.status === 1 ? { backgroundColor: 'gray', pointerEvents: 'none' } : {}}
                              >
                                <span><i className="feather-clock"></i> {shift.time}</span>
                              </a>
                            </li>
                          ))}
                          {afternoonShifts.length > 3 && (
                            <li>
                              <div className="load-more-timings load-more-afternoon">
                                <a href="javascript:void(0);">Load More</a>
                              </div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-btn">
              <button
                onClick={handleNextClick}
                className="btn btn-primary prime-btn justify-content-center align-items-center"
              >
                Next <i className="feather-arrow-right-circle"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card booking-card">
              <div className="card-body booking-card-body">
                <div className="booking-doctor-details">
                  <div className="booking-device">
                    <div className="booking-device-img">
                      <img src="../assets/img/icons/device-message.svg" alt="device-message"/>
                    </div>
                    <div className="booking-doctor-info">
                      <h3>We can help you</h3>
                      <p className="device-text">Call us +1 888-888-8888 (or) chat with our customer support team.</p>
                      <a href="chat.html" className="btn">Chat With Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card booking-card mb-0">
              <div className="card-body booking-card-body">
                <div className="booking-doctor-details">
                  <div className="booking-device">
                    <div className="booking-device-img">
                      <img src="../assets/img/icons/smart-phone.svg" alt="smart-phone"/>
                    </div>
                    <div className="booking-doctor-info">
                      <h3>Get the App</h3>
                      <p className="device-text">Download our app for better experience and for more feature</p>
                      <div className="app-images">
                        <a href="javascript:void(0);">
                          <img src="../assets/img/google-img.svg" alt="google-image"/>
                        </a>
                        <a href="javascript:void(0);">
                          <img src="../assets/img/app-img.svg" alt="app-image"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
