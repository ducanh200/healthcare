import { useState } from "react";

function Booking(){
    const [selectedTime, setSelectedTime] = useState("10:00 AM"); // Default selected time

    const handleTimeClick = (time) => {
        // Deselect the previously selected time
        const timeSlots = document.querySelectorAll('.time-slot a.timing');
        timeSlots.forEach(slot => {
          if (slot.textContent.trim() === selectedTime) {
            slot.classList.remove('selected');
          }
        });
        setSelectedTime(time);
    
    // Add the "selected" class to the clicked time slot
    const selectedSlot = document.querySelector(`.time-slot a.timing span:first-child[data-time="${time}"]`);
    if (selectedSlot) {
      selectedSlot.parentNode.classList.add('selected');
    }
  };
    return(
        <div class="content">
<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<div class="booking-doc-info">
<a href="doctor-profile.html" class="booking-doc-img">
<img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
</a>
<div class="booking-info">
<h4><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">35</span>
</div>
<p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-12 col-sm-4 col-md-6">
<h4 class="mb-1">11 November 2023</h4>
<p class="text-muted">Monday</p>
</div>
<div class="col-12 col-sm-8 col-md-6 text-sm-end">
<div class="bookingrange btn btn-white btn-sm mb-3">
<i class="far fa-calendar-alt me-2"></i>
<span></span>
<i class="fas fa-chevron-down ms-2"></i>
</div>
</div>
</div>

<div class="card booking-schedule schedule-widget">

<div class="schedule-header">
<div class="row">
<div class="col-md-12">

<div class="day-slot">
<ul>
<li class="left-arrow">
<a href="javascript:void(0)">
<i class="fa fa-chevron-left"></i>
</a>
</li>
<li>
<span>Mon</span>
<span class="slot-date">11 Nov <small class="slot-year">2023</small></span>
</li>
<li>
<span>Tue</span>
<span class="slot-date">12 Nov <small class="slot-year">2023</small></span>
</li>
<li>
<span>Wed</span>
<span class="slot-date">13 Nov <small class="slot-year">2023</small></span>
</li>
<li>
<span>Thu</span>
<span class="slot-date">14 Nov <small class="slot-year">2023</small></span>
</li>
<li>
<span>Fri</span>
<span class="slot-date">15 Nov <small class="slot-year">2023</small></span>
</li>
<li>
<span>Sat</span>
<span class="slot-date">16 Nov <small class="slot-year">2023</small></span>
</li>
<li>
<span>Sun</span>
<span class="slot-date">17 Nov <small class="slot-year">2023</small></span>
</li>
<li class="right-arrow">
<a href="javascript:void(0)">
<i class="fa fa-chevron-right"></i>
</a>
</li>
</ul>
</div>

</div>
</div>
</div>


<div class="schedule-cont">
<div class="row">
<div class="col-md-12">

<div class="time-slot">
<ul class="clearfix">
<li>
            <a className={selectedTime === "9:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("9:00 AM")}>
              <span data-time="9:00">9:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "10:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("10:00 AM")}>
              <span data-time="10:00">10:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "11:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("11:00 AM")}>
              <span data-time="11:00">11:00</span> <span>AM</span>
            </a>
</li>
<li>
            <a className={selectedTime === "9:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("9:00 AM")}>
              <span data-time="9:00">9:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "10:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("10:00 AM")}>
              <span data-time="10:00">10:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "11:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("11:00 AM")}>
              <span data-time="11:00">11:00</span> <span>AM</span>
            </a>
</li>
<li>
            <a className={selectedTime === "9:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("9:00 AM")}>
              <span data-time="9:00">9:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "10:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("10:00 AM")}>
              <span data-time="10:00">10:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "11:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("11:00 AM")}>
              <span data-time="11:00">11:00</span> <span>AM</span>
            </a>
</li>
<li>
            <a className={selectedTime === "9:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("9:00 AM")}>
              <span data-time="9:00">9:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "10:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("10:00 AM")}>
              <span data-time="10:00">10:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "11:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("11:00 AM")}>
              <span data-time="11:00">11:00</span> <span>AM</span>
            </a>
</li>
<li>
            <a className={selectedTime === "9:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("9:00 AM")}>
              <span data-time="9:00">9:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "10:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("10:00 AM")}>
              <span data-time="10:00">10:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "11:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("11:00 AM")}>
              <span data-time="11:00">11:00</span> <span>AM</span>
            </a>
</li>
<li>
            <a className={selectedTime === "9:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("9:00 AM")}>
              <span data-time="9:00">9:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "10:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("10:00 AM")}>
              <span data-time="10:00">10:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "11:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("11:00 AM")}>
              <span data-time="11:00">11:00</span> <span>AM</span>
            </a>
</li>
<li>
            <a className={selectedTime === "9:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("9:00 AM")}>
              <span data-time="9:00">9:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "10:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("10:00 AM")}>
              <span data-time="10:00">10:00</span> <span>AM</span>
            </a>
            <a className={selectedTime === "11:00 AM" ? "timing selected" : "timing"} href="#" onClick={() => handleTimeClick("11:00 AM")}>
              <span data-time="11:00">11:00</span> <span>AM</span>
            </a>
</li>
</ul>
</div>

</div>
</div>
</div>

</div>


<div class="submit-section proceed-btn text-end">
<a href="checkout.html" class="btn btn-primary submit-btn">Proceed to Pay</a>
</div>

</div>
</div>
</div>
</div>
    )
}
export default Booking;