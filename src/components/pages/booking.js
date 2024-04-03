import { useEffect, useState } from "react";

function Booking(){
  const [activeTiming, setActiveTiming] = useState(null);

  const handleTimingClick = (timing) => {
    setActiveTiming(timing);
  };
  const [activeDay, setActiveDay] = useState(0); // Initialize active day as 0 (for today)
  const [dateList, setDateList] = useState([]); // Store the list of dates

  useEffect(() => {
    const today = new Date(); // Get today's date
    const futureDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Calculate future date 10 days from now

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dates = [];
    for (let i = 0; i <= 6; i++) {
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
    // Add your logic for handling day click
  };
    return(
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
      <div className="col-lg-4 col-md-4">
      <div className="time-slot time-slot-blk">
      <h4>Morning</h4>
      <div className="time-slot-list">
      <ul>
      <li>
      <a className={`timing ${activeTiming === "09:00 - 09:30" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("09:00 - 09:30")}>
      <span><i className="feather-clock"></i> 09:00 - 09:30</span>
      </a>
      </li>
      <li>
      <a className={`timing ${activeTiming === "10:00 - 10:30" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("10:00 - 10:30")}>
      <span><i className="feather-clock"></i> 10:00 - 10:30</span>
      </a>
      </li>
      <li className="time-slot-open time-slot-morning">
      <a className={`timing ${activeTiming === "11:00 - 11:30" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("11:00 - 11:30")}>
      <span><i className="feather-clock"></i> 11:00 - 11:30</span>
      </a>
      </li>
      <li>
      <div className="load-more-timings load-more-morning">
      <a href="javascript:void(0);">Load More</a>
      </div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      <div className="col-lg-4 col-md-4">
      <div className="time-slot time-slot-blk">
      <h4>Afternoon</h4>
      <div className="time-slot-list">
      <ul>
      <li>
      <a className={`timing ${activeTiming === "12:00 - 12:30" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("12:00 - 12:30")}>
      <span><i className="feather-clock"></i> 12:00 - 12:30</span>
      </a>
      </li>
      <li>
      <a className={`timing ${activeTiming === "01:00 - 01:30" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("01:00 - 01:30")}>
      <span><i className="feather-clock"></i> 01:00 - 01:30</span>
      </a>
      </li>
      <li className="time-slot-open time-slot-afternoon">
      <a className={`timing ${activeTiming === "02:30 - 03:00" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("02:30 - 03:00")}>
      <span><i className="feather-clock"></i> 02:30 - 03:00</span>
      </a>
      </li>
      <li>
      <div className="load-more-timings load-more-afternoon">
      <a href="javascript:void(0);">Load More</a>
      </div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      <div className="col-lg-4 col-md-4">
      <div className="time-slot time-slot-blk">
      <h4>Evening</h4>
      <div className="time-slot-list">
      <ul>
      <li>
      <a className={`timing ${activeTiming === "03:00 - 03:30" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("03:00 - 03:30")}>
      <span><i className="feather-clock"></i> 03:00 - 03:30</span>
      </a>
      </li>
      <li>
      <a className={`timing ${activeTiming === "04:00 - 04:30" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("04:00 - 04:30")}>
      <span><i className="feather-clock"></i> 04:00 - 04:30</span>
      </a>
      </li>
      <li className="time-slot-open time-slot-evening">
      <a className={`timing ${activeTiming === "05:00 - 05:30" ? "active" : ""}`}
            href="javascript:void(0);"
            onClick={() => handleTimingClick("05:00 - 05:30")}>
      <span><i className="feather-clock"></i> 05:00 - 05:30</span>
      </a>
      </li>
      <li>
      <div className="load-more-timings load-more-evening">
      <a href="javascript:void(0);">Load More</a>
      </div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="booking-btn">
      <a href="paitent-details.html" className="btn btn-primary prime-btn justify-content-center align-items-center">
      Next <i className="feather-arrow-right-circle"></i>
      </a>
      </div>
      </div>
      <div className="col-lg-4 col-md-12">
      <div className="card booking-card">
      <div className="card-body booking-card-body">
      <div className="booking-doctor-details">
      <div className="booking-device">
      <div className="booking-device-img">
      <img src="assets/img/icons/device-message.svg" alt="device-message"/>
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
      <img src="assets/img/icons/smart-phone.svg" alt="smart-phone"/>
      </div>
      <div className="booking-doctor-info">
      <h3>Get the App</h3>
      <p className="device-text">Download our app for better experience and for more feature</p>
      <div className="app-images">
      <a href="javascript:void(0);">
      <img src="assets/img/google-img.svg" alt="google-image"/>
      </a>
      <a href="javascript:void(0);">
      <img src="assets/img/app-img.svg" alt="app-image"/>
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
      
    )
}
export default Booking;