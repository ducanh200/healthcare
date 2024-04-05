import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
function CheckOut(){
  const date= localStorage.getItem("selectedDate");
    const selectedTime= localStorage.getItem("selectedTime");
    const shiftId = localStorage.getItem("selectedShiftId");
  const [formData, setFormData] = useState({
    status: 1,
    date: date,
    patientId: 1,
    departmentId: 1,
    shiftId:shiftId
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to your backend API endpoint
      const response = await api.post(url.BOOKING.CREATE, formData);

      window.location.href = "/booking-success";
      // Redirect to booking success page or handle success message
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error response
    }
  };
    const [departments, setDepartments] = useState([]); // State to store department data

  useEffect(() => {
    // Function to fetch department data
    const fetchDepartments = async () => {
      try {
        // Make an HTTP GET request to fetch department data from your API
        const response = await api.get(url.DEPARTMENT.LIST);

        // Update the departments state with the fetched department data
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    // Call the fetchDepartments function when the component mounts
    fetchDepartments();
  }, []);
  console.log(formData)
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
<div className="col-md-12 col-sm-12">
  <div style={{textAlign:"left"}} className="mb-3 card-label">
    <label className="mb-2">Department</label>
    <select name="department_id" value={formData.department_id}
                          onChange={handleChange} className="form-select" aria-label="Default select example">
     {departments.map((department) => (
       <option key={department.id} value={department.id}>
         {department.name}
       </option>
     ))}
   </select>
  </div>
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