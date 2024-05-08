import React from 'react';

function AboutUs() {
  return (
    <div>
      <section className="about-section" style={{ textAlign: "justify" }}>
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-inner-img">
                      <div className="about-img">
                        <img src="assets/img/about-img1.jpg" className="img-fluid" alt="about-image" />
                      </div>
                      <div className="about-img">
                        <img src="assets/img/about-img2.jpg" className="img-fluid" alt="about-image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-inner-img">
                      <div className="about-box">
                        <h4>Over 25+ Years Experience</h4>
                      </div>
                      <div className="about-img">
                        <img src="assets/img/about-img3.jpg" className="img-fluid" alt="about-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-inner-header about-inner-header">
                <h6>About Our Company</h6>
                <h2>We always ensure the best medical treatment for your health</h2>
              </div>
              <div className="about-content">
                <div className="about-content-details">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque eaque ipsa quae architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="about-contact">
                  <div className="about-contact-icon">
                    <span><img src="assets/img/icons/phone-icon.svg" alt="phone-image" /></span>
                  </div>
                  <div className="about-contact-text">
                    <p>Need Emergency?</p>
                    <h4>+1 315 369 5943</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-inner-header text-center">
                <h2>Why Choose Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card why-choose-card w-100">
                <div className="card-body">
                  <div className="why-choose-icon d-flex justify-content-center">
                    <span><img src="assets/img/icons/choose-01.svg" alt="choose-image" /></span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Qualified Staff of Doctors</h4>
                    <p>Lorem ipsum sit amet consectetur incididunt ut labore et exercitation ullamco laboris nisi dolore magna enim veniam aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card why-choose-card w-100">
                <div className="card-body">
                  <div className="why-choose-icon d-flex justify-content-center">
                    <span><img src="assets/img/icons/choose-02.svg" alt="choose-image" /></span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Qualified Staff of Doctors</h4>
                    <p>Lorem ipsum sit amet consectetur incididunt ut labore et exercitation ullamco laboris nisi dolore magna enim veniam aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card why-choose-card w-100">
                <div className="card-body">
                  <div className="why-choose-icon d-flex justify-content-center">
                    <span><img src="assets/img/icons/choose-03.svg" alt="choose-image" /></span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Qualified Staff of Doctors</h4>
                    <p>Lorem ipsum sit amet consectetur incididunt ut labore et exercitation ullamco laboris nisi dolore magna enim veniam aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card why-choose-card w-100">
                <div className="card-body">
                  <div className="why-choose-icon d-flex justify-content-center">
                    <span><img src="assets/img/icons/choose-04.svg" alt="choose-image" /></span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Qualified Staff of Doctors</h4>
                    <p>Lorem ipsum sit amet consectetur incididunt ut labore et exercitation ullamco laboris nisi dolore magna enim veniam aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="way-section">
        <div className="container">
          <div className="way-bg">
            <div className="way-shapes-img">
              <div className="way-shapes-left">
                <img src="assets/img/shape-06.png" alt="shape-image" />
              </div>
              <div className="way-shapes-right">
                <img src="assets/img/shape-07.png" alt="shape-image" />
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-lg-7 col-md-12">
                <div className="section-inner-header way-inner-header mb-0">
                  <h2>Be on Your Way to Feeling Better with the Doccure</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="contact" className="btn btn-primary">Contact With Us</a>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="way-img">
                  <img src="assets/img/way-img.png" className="img-fluid" alt="doctor-way-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="doctors-section professional-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-inner-header text-center">
                <h2>Best Doctors</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-3 col-md-6 d-flex">
              <div className="doctor-profile-widget w-100">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div className="doctor-profile-img">
                      <img src="assets/img/doctors/doctor-03.jpg" className="img-fluid" alt="Ruby Perrin" />
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
                    <p><i className="feather-map-pin"></i> Newyork, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex">
              <div class="doctor-profile-widget w-100">
                <div class="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div class="doctor-profile-img">
                      <img src="assets/img/doctors/doctor-04.jpg" class="img-fluid" alt="Darren Elder" />
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


            <div class="col-lg-3 col-md-6 d-flex">
              <div class="doctor-profile-widget w-100">
                <div class="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div class="doctor-profile-img">
                      <img src="assets/img/doctors/doctor-05.jpg" class="img-fluid" alt="Sofia Brient" />
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


            <div class="col-lg-3 col-md-6 d-flex">
              <div class="doctor-profile-widget w-100">
                <div class="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div class="doctor-profile-img">
                      <img src="assets/img/doctors/doctor-02.jpg" class="img-fluid" alt="Paul Richard" />
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
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="testimonial-shape-img">
          <div className="testimonial-shape-left">
            <img src="assets/img/shape-04.png" alt="shape-image" />
          </div>
          <div className="testimonial-shape-right">
            <img src="assets/img/shape-05.png" alt="shape-image" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider slick">
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <img src="assets/img/clients/client-01.jpg" className="img-fluid" alt="client-image" />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h6><span>John Doe</span> New York</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-grid">
                  <div class="testimonial-info">
                    <div class="testimonial-img">
                      <img src="assets/img/clients/client-02.jpg" class="img-fluid" alt="client-image" />
                    </div>
                    <div class="testimonial-content">
                      <div class="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div class="testimonial-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h6><span>Amanda Warren</span> Florida</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-grid">
                  <div class="testimonial-info">
                    <div class="testimonial-img">
                      <img src="assets/img/clients/client-03.jpg" class="img-fluid" alt="client-image" />
                    </div>
                    <div class="testimonial-content">
                      <div class="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div class="testimonial-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h6><span>Betty Carlson</span> Georgia</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-grid">
                  <div class="testimonial-info">
                    <div class="testimonial-img">
                      <img src="assets/img/clients/client-04.jpg" class="img-fluid" alt="client-image" />
                    </div>
                    <div class="testimonial-content">
                      <div class="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div class="testimonial-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h6><span>Veronica</span> California</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-grid">
                  <div class="testimonial-info">
                    <div class="testimonial-img">
                      <img src="assets/img/clients/client-05.jpg" class="img-fluid" alt="client-image" />
                    </div>
                    <div class="testimonial-content">
                      <div class="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div class="testimonial-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h6><span>Richard</span> Michigan</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section faq-section-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-inner-header text-center">
                <h6>Get Your Answer</h6>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="faq-img">
                <img src="assets/img/faq-img.png" className="img-fluid" alt="img" />
                <div className="faq-patients-count">
                  <div className="faq-smile-img">
                    <img src="assets/img/icons/smiling-icon.svg" alt="icon" />
                  </div>
                  <div className="faq-patients-content">
                    <h4><span className="count-digit">95</span>k+</h4>
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
                      <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Can I make an Appointment Online with White Plains Hospital Kendi?
                      </a>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq-details">
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
                    <h2 class="accordion-header" id="headingTwo">
                      <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I make an Appointment Online with White Plains Hospital Kendi?
                      </a>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq-details">
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
                    <h2 class="accordion-header" id="headingThree">
                      <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Can I make an Appointment Online with White Plains Hospital Kendi?
                      </a>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq-details">
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
                    <h2 class="accordion-header" id="headingFour">
                      <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Can I make an Appointment Online with White Plains Hospital Kendi?
                      </a>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faq-details">
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
                    <h2 class="accordion-header" id="headingFive">
                      <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Can I make an Appointment Online with White Plains Hospital Kendi?
                      </a>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faq-details">
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
    </div>
  )
}
export default AboutUs;



