import { useParams } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
import { useEffect, useState } from "react";

function BookingSuccess(){
    const {id} = useParams();
    const [bookings, setBookings] = useState({
      id:id,
      bookingAt:'',
      status:0,
      date:'',
      patient_id:0,
      department_id:0,
      shiftId:0,
    });
    const [time,setTimes]=useState({
      id:bookings.shiftId,
      time:"",
      session:''
    });
    const [department,setDepartments]=useState({
      id:0,
      name:'',
      expense:0,
      maxBooking:0,
      thumbnail:'',
      description:'',
    });
    const fetchBookingData = async () => {
        try {
          const response = await api.get(url.BOOKING.LIST+`/${id}`);
          setBookings(response.data); // Set department data in state
          const responseShift = await api.get(url.SHIFT.LIST+`/${ response.data.shift.id}`);
          setTimes(responseShift.data);
          const responseDepartment = await api.get(url.DEPARTMENT.LIST+`/${ response.data.department.id}`);
          setDepartments(responseDepartment.data); // Set department data in state
        } catch (error) {
          console.error("Error fetching department data:", error);
        }
      };
    useEffect(() => {
      fetchBookingData();
    }, []);
    const generateGoogleCalendarLink = (date, time) => {
      // Combine date and time strings into a single datetime string
      const datetimeString = `${date}T${time}`;
  
      // Create a Date object using the combined datetime string
      const dateTime = new Date(datetimeString);
  
      // Check if the Date object is valid
      if (isNaN(dateTime.getTime())) {
          console.error('Invalid date or time');
          return null;
      }
  
      // Convert the Date object to ISO string
      const isoString = dateTime.toISOString();
  
      // Generate Google Calendar link using the ISO string
      const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${isoString}`;
  
      return googleCalendarLink;
  };
  
  // Usage example
  const date = '2024-05-04';
  const timee = '08:00:00';
  const googleCalendarLink = generateGoogleCalendarLink(date, timee);
  console.log(googleCalendarLink);
  
    return(
        <div className="doctor-content">
<div className="container">

<div className="row">
<div className="col-md-12">
<div className="back-link">
<a href="payment.html"><i className="fa-solid fa-arrow-left-long"></i> Back</a>
</div>
</div>
</div>
<div className="row justify-content-center">
<div className="col-lg-6 col-md-8">
<div className="success-content">
<div className="success-icon">
<i className="fas fa-circle-check"></i>
</div>
<h4>Your Appointment Booked Succesfully</h4>
</div>
<div className="card booking-card">
<div className="card-body booking-card-body booking-list-body">
<div className="booking-doctor-left booking-success-info">
<div className="booking-doctor-img">
<a href="javascript:void(0);">
<img src={department.thumbnail} alt="John Doe" className="img-fluid"/>
</a>
</div>
<div className="booking-doctor-info">
<h4><a href="javascript:void(0);">{department.name}</a></h4>
<p>{department.description}</p>
<div className="booking-doctor-location">
<p><i class="far fa-money-bill-alt"></i> ${department.expense}</p>
</div>
</div>
</div>
<div className="booking-list">
<div className="booking-date-list consultation-date-list">
<ul>
<li>Booking Date: <span>{ bookings.date} </span></li>
<li>Booking Time: <span>{ time.time}</span></li>
<li>Type of Consultaion: <span><i className="feather-users"></i>  Consult Instatly</span></li>
</ul>
</div>
</div>
</div>
</div>
<div className="success-btn">
<a href={generateGoogleCalendarLink()} className="btn btn-primary prime-btn">
Add to Google Calendar
</a>
</div>
<div className="success-dashboard-link">
<a href="index.html">
<i className="fa-solid fa-arrow-left-long"></i> Back to Dashboard
</a>
</div>
</div>
</div>

</div>
</div>
    )
}
export default BookingSuccess;