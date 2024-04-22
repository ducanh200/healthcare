import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
function CheckOut(){
  const date = localStorage.getItem("selectedDate");
  const selectedTime = localStorage.getItem("selectedTime");
  const shiftId = localStorage.getItem("selectedShiftId");
  const id = localStorage.getItem("departmentId");
  const [departments, setDepartments] = useState({
    id:0,
      name:'',
      expense:0,
      maxBooking:0,
      thumbnail:'',
      description:''
  }); // State to store department data

  // Function to fetch department data
  const fetchDepartmentData = async () => {
    try {
      const response = await api.get(url.DEPARTMENT.DETAIL + `/${id}`);
      setDepartments(response.data); // Set department data in state
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  useEffect(() => {
    fetchDepartmentData();
  }, [id]); // Adding 'id' as a dependency to fetch data when 'id' changes

  const [formData, setFormData] = useState({
    status: 1,
    date: date,
    patientId: 1,
    departmentId: id,
    shiftId: shiftId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingsResponse = await api.get(url.BOOKING.LIST);
    const bookings = bookingsResponse.data; // Assuming the bookings data is stored in the data property
    const shifts = await api.get(url.SHIFT.LIST);
    const selectedShift = shifts.data.find((shift) => shift.time === selectedTime);;
    const bookingsForSelectedTimeAndDate = bookings.filter((booking) => {
      return booking.shiftId === selectedShift.id && booking.date === date && booking.departmentId === id;
    }).length;
    if (bookingsForSelectedTimeAndDate < departments.maxBooking) {
      // Make an HTTP POST request to your backend API endpoint
      const response = await api.post(url.BOOKING.CREATE, formData);

      window.location.href = `/booking-success/${response.data.id}`;
      // Redirect to booking success page or handle success message
    }
    else {
      alert("Maximum booking limit reached for this time slot and date. Please choose another time slot.");
      window.location.href = `/booking/${id}`;
    }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error response
    }
  };
    return(
        <div className="content">
<div className="container">
<div className="row">
<div className="col-md-7 col-lg-8">
<div className="card">
<div className="card-body">

<form onSubmit={handleSubmit}>

<div className="info-widget">
<h4 className="card-title">Personal Information</h4>
<div className="row">
<div className="col-md-12 col-sm-12">
<div className="mb-3 card-label">
<label className="mb-2" >Your Name</label>
<input className="form-control" type="text"/>
</div>
</div>

<div className="col-md-6 col-sm-12">
<div style={{textAlign:"left"}} className="mb-3 card-label">
<label className="mb-2">Email</label>
<input className="form-control" type="email"/>
</div>
</div>
<div className="col-md-6 col-sm-12">
<div style={{textAlign:"left"}} className="mb-3 card-label">
<label className="mb-2">Phone</label>
<input className="form-control" type="text"/>
</div>
</div>
</div>
<div style={{textAlign:"left"}} className="exist-customer">Existing Customer? <a href="/login">Click here to login</a></div>
</div>
<div style={{textAlign:"left"}} className="terms-accept">
<div className="custom-checkbox">
<input type="checkbox" required id="terms_accept"/>
<label htmlFor="terms_accept">I have read and accept <a href="terms-condition.html">Terms &amp; Conditions</a></label>
</div>
</div>


<div className="submit-section mt-4">
<button type="submit" className="btn btn-primary submit-btn">Confirm</button>
</div>
</form>

</div>
</div>
</div>
<div className="col-md-5 col-lg-4 r">

<div className="card booking-card">
<div className="card-header">
<h4 className="card-title">Booking Summary</h4>
</div>
<div className="card-body">
<div className="booking-doc-info">
<a href="#" className="booking-doc-img">
<img src={departments.thumbnail} alt="User Image"/>
</a>
<div className="booking-info">
<h4><a href="#">{departments.name}</a></h4>
</div>
</div>
<div className="booking-summary">
<div className="booking-item-wrap">
<ul className="booking-date">
<li>Date :<span> {date}</span></li>
<li>Time :<span> {selectedTime}</span></li>
</ul>
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
export default CheckOut;