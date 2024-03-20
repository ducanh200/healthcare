import Home_department from "./home/home_department";

function Home(){
    return(
        <div>
            <section class="banner-section">
                <div class="container" style={{textAlign: "justify"}}>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="banner-content aos" data-aos="fade-up">
                                <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
                                <img src="assets/img/icons/header-icon.svg" class="header-icon" alt="header-icon"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                <a href="booking.html" class="btn" style={{marginRight: "450px"}}>Start a Consult</a>
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
            <Home_department></Home_department>
            <section class="doctors-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 aos" data-aos="fade-up">
                            <div class="section-header-one text-center">
                                <h2 class="section-title">Doctors</h2>
                            </div>
                        </div>
                    </div>
                    <div class="owl-carousel doctor-slider-one owl-theme aos" data-aos="fade-up">
                        <div class="item">
                            <div class="doctor-profile-widget">
                                <div class="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div class="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-03.jpg" class="img-fluid" alt="Ruby Perrin"/>
                                        </div>
                                    </a>
                                    <div class="doctor-amount">
                                        <span>$ 200</span>
                                    </div>
                                </div>
                                <div class="doc-content">
                                    <div class="doc-pro-info">
                                        <div class="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. Ruby Perrin</a>
                                            <p>Cardiology</p>
                                        </div>
                                        <div class="reviews-ratings">
                                            <p>
                                                <span><i class="fas fa-star"></i> 4.5</span> (35)
                                            </p>
                                        </div>
                                    </div>
                                    <div class="doc-pro-location">
                                        <p><i class="feather-map-pin"></i> New York, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="doctor-profile-widget">
                                <div class="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div class="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-04.jpg" class="img-fluid" alt="Darren Elder"/>
                                        </div>
                                    </a>
                                    <div class="doctor-amount">
                                        <span>$ 360</span>
                                    </div>
                                </div>
                                <div class="doc-content">
                                    <div class="doc-pro-info">
                                        <div class="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. Darren Elder</a>
                                            <p>Neurology</p>
                                        </div>
                                        <div class="reviews-ratings">
                                            <p>
                                                <span><i class="fas fa-star"></i> 4.0</span> (20)
                                            </p>
                                        </div>
                                    </div>
                                    <div class="doc-pro-location">
                                        <p><i class="feather-map-pin"></i> Florida, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="doctor-profile-widget">
                                <div class="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div class="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-05.jpg" class="img-fluid" alt="Sofia Brient"/>
                                        </div>
                                    </a>
                                    <div class="doctor-amount">
                                        <span>$ 450</span>
                                    </div>
                                </div>
                                <div class="doc-content">
                                    <div class="doc-pro-info">
                                        <div class="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. Sofia Brient</a>
                                            <p>Urology</p>
                                        </div>
                                        <div class="reviews-ratings">
                                            <p>
                                                <span><i class="fas fa-star"></i> 4.5</span> (30)
                                            </p>
                                        </div>
                                    </div>
                                    <div class="doc-pro-location">
                                        <p><i class="feather-map-pin"></i> Georgia, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="doctor-profile-widget">
                                <div class="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div class="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-02.jpg" class="img-fluid" alt="Paul Richard"/>
                                        </div>
                                    </a>
                                    <div class="doctor-amount">
                                        <span>$ 570</span>
                                    </div>
                                </div>
                                <div class="doc-content">
                                    <div class="doc-pro-info">
                                        <div class="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. Paul Richard</a>
                                            <p>Orthopedic</p>
                                        </div>
                                        <div class="reviews-ratings">
                                            <p>
                                                <span><i class="fas fa-star"></i> 4.3</span> (45)
                                            </p>
                                        </div>
                                    </div>
                                    <div class="doc-pro-location">
                                        <p><i class="feather-map-pin"></i> Michigan, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="doctor-profile-widget">
                                <div class="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div class="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-01.jpg" class="img-fluid" alt="John Doe"/>
                                        </div>
                                    </a>
                                    <div class="doctor-amount">
                                        <span>$ 880</span>
                                    </div>
                                </div>
                                <div class="doc-content">
                                    <div class="doc-pro-info">
                                        <div class="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. John Doe</a>
                                            <p>Dentist</p>
                                        </div>
                                        <div class="reviews-ratings">
                                            <p>
                                                <span><i class="fas fa-star"></i> 4.4</span> (50)
                                            </p>
                                        </div>
                                    </div>
                                    <div class="doc-pro-location">
                                        <p><i class="feather-map-pin"></i> California, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pricing-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center aos" data-aos="fade-up">
                            <div class="section-header-one">
                                <h2 class="section-title">Pricing Plan</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-4 col-sm-12 aos" data-aos="fade-up">
                            <div class="card pricing-card">
                                <div class="card-body">
                                    <div class="pricing-header">
                                        <div class="pricing-header-info">
                                            <div class="pricing-icon">
                                                <span>
                                                    <img src="assets/img/icons/price-icon1.svg" alt="icon"/>
                                                </span>
                                            </div>
                                            <div class="pricing-title">
                                                <p>For individuals</p>
                                                <h4>Basic</h4>
                                            </div>
                                        </div>
                                        <div class="pricing-header-text">
                                            <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor</p>
                                        </div>
                                    </div>
                                    <div class="pricing-info">
                                        <div class="pricing-amount">
                                            <h2>$99 <span>/monthly</span></h2>
                                            <h6>What’s included</h6>
                                        </div>
                                        <div class="pricing-list">
                                            <ul>
                                                <li>Lorem ipsum dolor amet, consectetur </li>
                                                <li>Lorem ipsum amet, consectetur </li>
                                                <li>Lorem ipsum dolor amet, consectetur </li>
                                                <li>Lorem ipsum amet, consectetur </li>
                                            </ul>
                                        </div>
                                        <div class="pricing-btn">
                                            <a href="login-email.html" class="btn">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 aos" data-aos="fade-up">
                            <div class="card pricing-card">
                                <div class="card-body">
                                    <div class="pricing-header">
                                        <div class="pricing-header-info">
                                            <div class="pricing-icon">
                                                <span>
                                                    <img src="assets/img/icons/price-icon1.svg" alt="icon"/>
                                                </span>
                                            </div>
                                            <div class="pricing-title">
                                                <p>For individuals</p>
                                                <h4>Basic</h4>
                                            </div>
                                        </div>
                                        <div class="pricing-header-text">
                                            <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor</p>
                                        </div>
                                    </div>
                                    <div class="pricing-info">
                                        <div class="pricing-amount">
                                            <h2>$99 <span>/monthly</span></h2>
                                            <h6>What’s included</h6>
                                        </div>
                                        <div class="pricing-list">
                                            <ul>
                                                <li>Lorem ipsum dolor amet, consectetur </li>
                                                <li>Lorem ipsum amet, consectetur </li>
                                                <li>Lorem ipsum dolor amet, consectetur </li>
                                                <li>Lorem ipsum amet, consectetur </li>
                                            </ul>
                                        </div>
                                        <div class="pricing-btn">
                                            <a href="login-email.html" class="btn">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 aos" data-aos="fade-up">
                            <div class="card pricing-card">
                                <div class="card-body">
                                    <div class="pricing-header">
                                        <div class="pricing-header-info">
                                            <div class="pricing-icon">
                                                <span>
                                                    <img src="assets/img/icons/price-icon1.svg" alt="icon"/>
                                                </span>
                                            </div>
                                            <div class="pricing-title">
                                                <p>For individuals</p>
                                                <h4>Basic</h4>
                                            </div>
                                        </div>
                                        <div class="pricing-header-text">
                                            <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor</p>
                                        </div>
                                    </div>
                                    <div class="pricing-info">
                                        <div class="pricing-amount">
                                            <h2>$99 <span>/monthly</span></h2>
                                            <h6>What’s included</h6>
                                        </div>
                                        <div class="pricing-list">
                                            <ul>
                                                <li>Lorem ipsum dolor amet, consectetur </li>
                                                <li>Lorem ipsum amet, consectetur </li>
                                                <li>Lorem ipsum dolor amet, consectetur </li>
                                                <li>Lorem ipsum amet, consectetur </li>
                                            </ul>
                                        </div>
                                        <div class="pricing-btn">
                                            <a href="login-email.html" class="btn">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="work-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 work-img-info aos" data-aos="fade-up">
                            <div class="work-img">
                                <img src="assets/img/work-img.png" class="img-fluid" alt="doctor-image"/>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 work-details">
                            <div class="section-header-one aos" data-aos="fade-up">
                                <h5>How it Works</h5>
                                <h2 class="section-title">4 easy steps to get your solution</h2>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 aos" data-aos="fade-up">
                                    <div class="work-info">
                                        <div class="work-icon">
                                            <span><img src="assets/img/icons/work-01.svg" alt="search-doctor-icon"/></span>
                                        </div>
                                        <div class="work-content">
                                            <h5>Search Doctor</h5>
                                            <p>Lorem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 aos" data-aos="fade-up">
                                    <div class="work-info">
                                        <div class="work-icon">
                                            <span><img src="assets/img/icons/work-02.svg" alt="doctor-profile-icon"/></span>
                                        </div>
                                        <div class="work-content">
                                            <h5>Check Doctor Profile</h5>
                                            <p>Lorem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 aos" data-aos="fade-up">
                                    <div class="work-info">
                                        <div class="work-icon">
                                            <span><img src="assets/img/icons/work-03.svg" alt="calendar-icon"/></span>
                                        </div>
                                        <div class="work-content">
                                            <h5>Schedule Appointment</h5>
                                            <p>Lorem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 aos" data-aos="fade-up">
                                    <div class="work-info">
                                        <div class="work-icon">
                                            <span><img src="assets/img/icons/work-04.svg" alt="solution-icon"/></span>
                                        </div>
                                        <div class="work-content">
                                            <h5>Get Your Solution</h5>
                                            <p>Lorem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="articles-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 aos" data-aos="fade-up">
                            <div class="section-header-one text-center">
                                <h2 class="section-title">Latest Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                            <div class="articles-grid w-100">
                                <div class="articles-info">
                                    <div class="articles-left">
                                        <a href="blog-details.html">
                                            <div class="articles-img">
                                                <img src="assets/img/blog/blog-11.jpg" class="img-fluid" alt="John Doe"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="articles-right">
                                        <div class="articles-content">
                                            <ul class="articles-list nav">
                                                <li>
                                                    <i class="feather-user"></i> John Doe
                                                </li>
                                                <li>
                                                    <i class="feather-calendar"></i> 13 Aug, 2023
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="blog-details.html">Doccure – Making your clinic painless visit?</a>
                                            </h4>
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                                            <a href="blog-details.html" class="btn">View Blog</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                            <div class="articles-grid w-100">
                                <div class="articles-info">
                                    <div class="articles-left">
                                        <a href="blog-details.html">
                                            <div class="articles-img">
                                                <img src="assets/img/blog/blog-11.jpg" class="img-fluid" alt="John Doe"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="articles-right">
                                        <div class="articles-content">
                                            <ul class="articles-list nav">
                                                <li>
                                                    <i class="feather-user"></i> John Doe
                                                </li>
                                                <li>
                                                    <i class="feather-calendar"></i> 13 Aug, 2023
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="blog-details.html">Doccure – Making your clinic painless visit?</a>
                                            </h4>
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                                            <a href="blog-details.html" class="btn">View Blog</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                            <div class="articles-grid w-100">
                                <div class="articles-info">
                                    <div class="articles-left">
                                        <a href="blog-details.html">
                                            <div class="articles-img">
                                                <img src="assets/img/blog/blog-11.jpg" class="img-fluid" alt="John Doe"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="articles-right">
                                        <div class="articles-content">
                                            <ul class="articles-list nav">
                                                <li>
                                                    <i class="feather-user"></i> John Doe
                                                </li>
                                                <li>
                                                    <i class="feather-calendar"></i> 13 Aug, 2023
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="blog-details.html">Doccure – Making your clinic painless visit?</a>
                                            </h4>
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                                            <a href="blog-details.html" class="btn">View Blog</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                            <div class="articles-grid w-100">
                                <div class="articles-info">
                                    <div class="articles-left">
                                        <a href="blog-details.html">
                                            <div class="articles-img">
                                                <img src="assets/img/blog/blog-11.jpg" class="img-fluid" alt="John Doe"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="articles-right">
                                        <div class="articles-content">
                                            <ul class="articles-list nav">
                                                <li>
                                                    <i class="feather-user"></i> John Doe
                                                </li>
                                                <li>
                                                    <i class="feather-calendar"></i> 13 Aug, 2023
                                                </li>
                                            </ul>
                                            <h4>
                                                <a href="blog-details.html">Doccure – Making your clinic painless visit?</a>
                                            </h4>
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                                            <a href="blog-details.html" class="btn">View Blog</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="app-section">
                <div class="container">
                    <div class="app-bg">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12">
                                <div class="app-content">
                                    <div class="app-header aos" data-aos="fade-up">
                                        <h5>Working for Your Better Health.</h5>
                                        <h2>Download the Doccure App today!</h2>
                                    </div>
                                    <div class="app-scan aos" data-aos="fade-up">
                                        <p>Scan the QR code to get the app now</p>
                                        <img src="assets/img/scan-img.png" alt="scan-image"/>
                                    </div>
                                    <div class="google-imgs aos" data-aos="fade-up">
                                        <a href="javascript:void(0);"><img src="assets/img/google-play.png" alt="Google Play"/></a>
                                        <a href="javascript:void(0);"><img src="assets/img/app-store.png" alt="App Store"/></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 aos" data-aos="fade-up">
                                <div class="mobile-img">
                                    <img src="assets/img/mobile-img.png" class="img-fluid" alt="Mobile Phone"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="faq-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header-one text-center aos" data-aos="fade-up">
                                <h5>Get Your Answer</h5>
                                <h2 class="section-title">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12 aos" data-aos="fade-up">
                            <div class="faq-img">
                                <img src="assets/img/faq-img.png" class="img-fluid" alt="img"/>
                                <div class="faq-patients-count">
                                    <div class="faq-smile-img">
                                        <img src="assets/img/icons/smiling-icon.svg" alt="icon"/>
                                    </div>
                                    <div class="faq-patients-content">
                                        <h4><span class="count-digit">95</span>k+</h4>
                                        <p>Happy Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="faq-info aos" data-aos="fade-up">
                                <div class="accordion" id="faq-details">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Can I make an Appointment Online with White Plains Hospital Kendi?
                                            </a>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-details">
                                            <div class="accordion-body">
                                                <div class="accordion-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Can I make an Appointment Online with White Plains Hospital Kendi?
                                            </a>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-details">
                                            <div class="accordion-body">
                                                <div class="accordion-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Can I make an Appointment Online with White Plains Hospital Kendi?
                                            </a>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-details">
                                            <div class="accordion-body">
                                                <div class="accordion-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Can I make an Appointment Online with White Plains Hospital Kendi?
                                            </a>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-details">
                                            <div class="accordion-body">
                                                <div class="accordion-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Can I make an Appointment Online with White Plains Hospital Kendi?
                                            </a>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-details">
                                            <div class="accordion-body">
                                                <div class="accordion-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="testimonial-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="testimonial-slider slick">
                                <div class="testimonial-grid">
                                    <div class="testimonial-info">
                                        <div class="testimonial-img">
                                            <img src="assets/img/clients/client-01.jpg" class="img-fluid" alt="John Doe"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <div class="section-header section-inner-header testimonial-header">
                                                <h5>Testimonials</h5>
                                                <h2>What Our Client Says</h2>
                                            </div>
                                            <div class="testimonial-details">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                </p>
                                                <h6><span>John Doe</span> New York</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-grid">
                                    <div class="testimonial-info">
                                        <div class="testimonial-img">
                                            <img src="assets/img/clients/client-01.jpg" class="img-fluid" alt="John Doe"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <div class="section-header section-inner-header testimonial-header">
                                                <h5>Testimonials</h5>
                                                <h2>What Our Client Says</h2>
                                            </div>
                                            <div class="testimonial-details">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                </p>
                                                <h6><span>John Doe</span> New York</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-grid">
                                    <div class="testimonial-info">
                                        <div class="testimonial-img">
                                            <img src="assets/img/clients/client-01.jpg" class="img-fluid" alt="John Doe"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <div class="section-header section-inner-header testimonial-header">
                                                <h5>Testimonials</h5>
                                                <h2>What Our Client Says</h2>
                                            </div>
                                            <div class="testimonial-details">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                </p>
                                                <h6><span>John Doe</span> New York</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-grid">
                                    <div class="testimonial-info">
                                        <div class="testimonial-img">
                                            <img src="assets/img/clients/client-01.jpg" class="img-fluid" alt="John Doe"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <div class="section-header section-inner-header testimonial-header">
                                                <h5>Testimonials</h5>
                                                <h2>What Our Client Says</h2>
                                            </div>
                                            <div class="testimonial-details">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                </p>
                                                <h6><span>John Doe</span> New York</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-grid">
                                    <div class="testimonial-info">
                                        <div class="testimonial-img">
                                            <img src="assets/img/clients/client-01.jpg" class="img-fluid" alt="John Doe"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <div class="section-header section-inner-header testimonial-header">
                                                <h5>Testimonials</h5>
                                                <h2>What Our Client Says</h2>
                                            </div>
                                            <div class="testimonial-details">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                </p>
                                                <h6><span>John Doe</span> New York</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="partners-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header-one text-center aos" data-aos="fade-up">
                                <h2 class="section-title">Our Partners</h2>
                            </div>
                        </div>
                    </div>
                    <div class="partners-info aos" data-aos="fade-up">
                        <ul class="owl-carousel partners-slider d-flex">
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-1.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-2.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-3.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-4.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-5.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-6.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-1.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-2.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-3.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-4.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-5.svg" alt="partners"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img class="img-fluid" src="assets/img/partners/partners-6.svg" alt="partners"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;