import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import url from '../../services/url';

function AboutUs() {
  const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        const loadDoctor = async () => {
            try {
                const rs = await api.get(url.DOCTOR.LIST);
                setDoctor(rs.data);
            } catch (error) {
                console.error("Error loading doctor:", error);
            }
        };
        loadDoctor();
    }, []);

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
                    <h4>+84 367 245 831</h4>
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
                <h2>Doctors</h2>
              </div>
            </div>
          </div>
          <div className="owl-carousel doctor-slider-one owl-theme aos" data-aos="fade-up">
            {doctors.map((doctors) => (
              <div className="item" >
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <div className="doctor-profile-img">
                      <img src={doctors.thumbnail} className="img-fluid" style={{height:"300px"}} alt="Ruby Perrin" />
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <h4>{doctors.name}</h4>
                        <h7>{doctors.department.name}</h7>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p><i className="feather-map-pin"></i>{doctors.phonenumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutUs;



