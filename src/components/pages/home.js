import Home_department from "./home/home_department";
import Home_doctor from "./home/home_doctor";

function Home() {
    return (
        <div>
            <section class="banner-section">
                <div class="container" style={{ textAlign: "justify" }}>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="banner-content aos" data-aos="fade-up">
                                <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
                                <img src="assets/img/icons/header-icon.svg" class="header-icon" alt="header-icon" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                <a href="/department" class="btn" style={{ marginRight: "450px" }}>Booking Now</a>
                                <div class="banner-arrow-img">
                                    <img src="assets/img/down-arrow-img.png" class="img-fluid" alt="down-arrow" />
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="banner-img aos" data-aos="fade-up">
                                <img src="assets/img/banner-img.png" class="img-fluid" alt="patient-image" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Home_department></Home_department>
            <Home_doctor></Home_doctor>
            <section class="pricing-section">
                <div class="container" style={{ textAlign: "justify" }}>
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
                                                    <img src="assets/img/icons/price-icon1.svg" alt="icon" />
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
                                                    <img src="assets/img/icons/price-icon1.svg" alt="icon" />
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
                                                    <img src="assets/img/icons/price-icon1.svg" alt="icon" />
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
                <div class="container" style={{ textAlign: "justify" }}>
                    <div class="row">
                        <div class="col-lg-4 col-md-12 work-img-info aos" data-aos="fade-up">
                            <div class="work-img">
                                <img src="assets/img/work-img.png" class="img-fluid" alt="doctor-image" />
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
                                            <span><img src="assets/img/icons/work-01.svg" alt="search-doctor-icon" /></span>
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
                                            <span><img src="assets/img/icons/work-02.svg" alt="doctor-profile-icon" /></span>
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
                                            <span><img src="assets/img/icons/work-03.svg" alt="calendar-icon" /></span>
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
                                            <span><img src="assets/img/icons/work-04.svg" alt="solution-icon" /></span>
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
            <section class="app-section"style={{ marginTop: "40px"}}>
                <div class="container" style={{ textAlign: "justify"}}>
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
                                        <img src="assets/img/scan-img.png" alt="scan-image" />
                                    </div>
                                    <div class="google-imgs aos" data-aos="fade-up">
                                        <a href="javascript:void(0);"><img src="assets/img/google-play.png" alt="Google Play" /></a>
                                        <a href="javascript:void(0);"><img src="assets/img/app-store.png" alt="App Store" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 aos" data-aos="fade-up">
                                <div class="mobile-img">
                                    <img src="assets/img/mobile-img.png" class="img-fluid" alt="Mobile Phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;