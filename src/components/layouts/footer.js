function Footer() {
    return (
        <footer className="footer footer-one">
            <div className="footer-top aos" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-widget footer-about">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="../assets/img/logo.png" alt="logo" /></a>
                                </div>
                                <div className="footer-about-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-3 col-md-4">
                                    <div className="footer-widget footer-menu">
                                        <h2 className="footer-title">For Patients</h2>
                                        <ul>
                                            <li><a href="/login">Login</a></li>
                                            <li><a href="/register">Register</a></li>
                                            <li><a href="/booking/:id">Booking</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="footer-widget footer-menu">
                                        <h2 className="footer-title">For Doctors</h2>
                                        <ul>
                                            <li><a href="/invoice">Invoice</a></li>
                                            <li><a href="/aboutus">About Us</a></li>
                                            <li><a href="/department">Department</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-4">
                                    <div className="footer-widget footer-contact">
                                        <h2 className="footer-title">Contact Us</h2>
                                        <div className="footer-contact-info">
                                            <div className="footer-address">
                                                <p><i className="feather-map-pin"></i>8a Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy</p>
                                            </div>
                                            <div className="footer-address">
                                                <p><i className="feather-phone-call"></i>+84 367 245 831</p>
                                            </div>
                                            <div className="footer-address mb-0">
                                                <p><i className="feather-mail"></i>demo@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-7">
                            <div className="footer-widget">
                                <h2 className="footer-title">Join Our Newsletter</h2>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="email" className="form-control" placeholder="Enter Email" />
                                        <button type="submit" className="btn">Submit</button>
                                    </form>
                                </div>
                                <div className="social-icon">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);"><i className="fab fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="copyright-text">
                                    <p className="mb-0"> Copyright © 2024 <a href="https://themeforest.net/user/dreamstechnologies/portfolio" target="_blank">Dreamstechnologies.</a> All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="copyright-menu">
                                    <ul className="policy-menu">
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="terms-condition.html">Terms and Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;