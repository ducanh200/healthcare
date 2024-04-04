function CheckOut(){
    return(
        <div className="content">
<div className="container">
<div className="row">
<div className="col-md-7 col-lg-8">
<div className="card">
<div className="card-body">

<form action="https://doccure.dreamstechnologies.com/html/template/booking-success.html">

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
    <select class="form-select" aria-label="Default select example">
      <option value="john">John</option>
      <option value="mary">Mary</option>
      <option value="jane">Jane</option>
    </select>
  </div>
</div>

<div style={{textAlign:"left"}} className="terms-accept">
<div className="custom-checkbox">
<input type="checkbox" required id="terms_accept"/>
<label for="terms_accept">I have read and accept <a href="terms-condition.html">Terms &amp; Conditions</a></label>
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
<li>Date :<span> 16 Nov 2023</span></li>
<li>Time :<span> 10:00 AM</span></li>
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