function Home_doctor(){
    return(
<section className="doctors-section">
                <div className="container" style={{textAlign: "justify"}}>
                    <div className="row">
                        <div className="col-md-12 aos" data-aos="fade-up">
                            <div className="section-header-one text-center">
                                <h2 className="section-title">Doctors</h2>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel doctor-slider-one owl-theme aos" data-aos="fade-up">
                        <div className="item">
                            <div className="doctor-profile-widget">
                                <div className="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div className="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-03.jpg" className="img-fluid" alt="Ruby Perrin"/>
                                        </div>
                                    </a>
                                    <div className="doctor-amount">
                                        <span>$ 200</span>
                                    </div>
                                </div>
                                <div className="doc-content">
                                    <div className="doc-pro-info">
                                        <div className="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. Ruby Perrin</a>
                                            <p>Cardiology</p>
                                        </div>
                                        <div className="reviews-ratings">
                                            <p>
                                                <span><i className="fas fa-star"></i> 4.5</span> (35)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="doc-pro-location">
                                        <p><i className="feather-map-pin"></i> New York, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="doctor-profile-widget">
                                <div className="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div className="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-04.jpg" className="img-fluid" alt="Darren Elder"/>
                                        </div>
                                    </a>
                                    <div className="doctor-amount">
                                        <span>$ 360</span>
                                    </div>
                                </div>
                                <div className="doc-content">
                                    <div className="doc-pro-info">
                                        <div className="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. Darren Elder</a>
                                            <p>Neurology</p>
                                        </div>
                                        <div className="reviews-ratings">
                                            <p>
                                                <span><i className="fas fa-star"></i> 4.0</span> (20)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="doc-pro-location">
                                        <p><i className="feather-map-pin"></i> Florida, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="doctor-profile-widget">
                                <div className="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div className="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-05.jpg" className="img-fluid" alt="Sofia Brient"/>
                                        </div>
                                    </a>
                                    <div className="doctor-amount">
                                        <span>$ 450</span>
                                    </div>
                                </div>
                                <div className="doc-content">
                                    <div className="doc-pro-info">
                                        <div className="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. Sofia Brient</a>
                                            <p>Urology</p>
                                        </div>
                                        <div className="reviews-ratings">
                                            <p>
                                                <span><i className="fas fa-star"></i> 4.5</span> (30)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="doc-pro-location">
                                        <p><i className="feather-map-pin"></i> Georgia, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="doctor-profile-widget">
                                <div className="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div className="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-02.jpg" className="img-fluid" alt="Paul Richard"/>
                                        </div>
                                    </a>
                                    <div className="doctor-amount">
                                        <span>$ 570</span>
                                    </div>
                                </div>
                                <div className="doc-content">
                                    <div className="doc-pro-info">
                                        <div className="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. Paul Richard</a>
                                            <p>Orthopedic</p>
                                        </div>
                                        <div className="reviews-ratings">
                                            <p>
                                                <span><i className="fas fa-star"></i> 4.3</span> (45)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="doc-pro-location">
                                        <p><i className="feather-map-pin"></i> Michigan, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="doctor-profile-widget">
                                <div className="doc-pro-img">
                                    <a href="doctor-profile.html">
                                        <div className="doctor-profile-img">
                                            <img src="assets/img/doctors/doctor-01.jpg" className="img-fluid" alt="John Doe"/>
                                        </div>
                                    </a>
                                    <div className="doctor-amount">
                                        <span>$ 880</span>
                                    </div>
                                </div>
                                <div className="doc-content">
                                    <div className="doc-pro-info">
                                        <div className="doc-pro-name">
                                            <a href="doctor-profile.html">Dr. John Doe</a>
                                            <p>Dentist</p>
                                        </div>
                                        <div className="reviews-ratings">
                                            <p>
                                                <span><i className="fas fa-star"></i> 4.4</span> (50)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="doc-pro-location">
                                        <p><i className="feather-map-pin"></i> California, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
export default Home_doctor;