function Home(){
    return(
        <section class="banner-section">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6">
<div class="banner-content aos" data-aos="fade-up">
<h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
<img src="assets/img/icons/header-icon.svg" class="header-icon" alt="header-icon"/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
<a href="booking.html" class="btn" style={{marginRight:"450px"}}>Start a Consult</a>
<div class="banner-arrow-img">
<img src="assets/img/down-arrow-img.png" class="img-fluid" alt="down-arrow"/>
</div>
</div>
<div class="search-box-one aos" data-aos="fade-up">
<form action="https://doccure.dreamstechnologies.com/html/template/search-2.html">
<div class="search-input search-line">
<i class="feather-search bficon"></i>
<div class=" mb-0">
<input type="text" class="form-control" placeholder="Search doctors, clinics, hospitals, etc"/>
</div>
</div>
<div class="search-input search-map-line">
<i class="feather-map-pin"></i>
<div class=" mb-0">
<input type="text" class="form-control" placeholder="Location"/>
<a class="current-loc-icon current_location" href="javascript:void(0);">
<i class="feather-crosshair"></i>
</a>
</div>
</div>
<div class="search-input search-calendar-line">
<i class="feather-calendar"></i>
<div class=" mb-0">
<input type="text" class="form-control datetimepicker" placeholder="Date"/>
</div>
</div>
<div class="form-search-btn">
<button class="btn" type="submit">Search</button>
</div>
</form>
</div>
</div>
<div class="col-lg-6">
<div class="banner-img aos" data-aos="fade-up">
<img src="assets/img/banner-img.png" class="img-fluid" alt="patient-image"/>
<div class="banner-img1">
<img src="assets/img/banner-img1.png" class="img-fluid" alt="checkup-image"/>
</div>
<div class="banner-img2">
<img src="assets/img/banner-img2.png" class="img-fluid" alt="doctor-slide"/>
</div>
<div class="banner-img3">
<img src="assets/img/banner-img3.png" class="img-fluid" alt="doctors-list"/>
</div>
</div>
</div>
</div>
</div>
</section>

    )
}
export default Home;