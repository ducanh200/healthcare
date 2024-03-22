import React from 'react';

function Invoice() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3">
            <div className="profile-sidebar">
              <div className="widget-profile pro-widget-content">
                <div className="profile-info-widget">
                  <a href="#" className="booking-doc-img">
                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
                  </a>
                  <div className="profile-det-info">
                    <h3>Dr. Darren Elder</h3>
                    <div className="patient-details">
                      <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-widget">
                <nav className="dashboard-menu">
                  <ul>
                    <li>
                      <a href="doctor-dashboard.html">
                        <i className="fas fa-columns"></i>
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="appointments.html">
                        <i className="fas fa-calendar-check"></i>
                        <span>Appointments</span>
                      </a>
                    </li>
                    <li>
                      <a href="my-patients.html">
                        <i className="fas fa-user-injured"></i>
                        <span>My Patients</span>
                      </a>
                    </li>
                    <li>
                      <a href="schedule-timings.html">
                        <i className="fas fa-hourglass-start"></i>
                        <span>Schedule Timings</span>
                      </a>
                    </li>
                    <li>
                      <a href="available-timings.html">
                        <i className="fas fa-clock"></i>
                        <span>Available Timings</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="invoices.html">
                        <i className="fas fa-file-invoice"></i>
                        <span>Invoices</span>
                      </a>
                    </li>
                    <li>
                      <a href="accounts.html">
                        <i className="fas fa-file-invoice-dollar"></i>
                        <span>Accounts</span>
                      </a>
                    </li>
                    <li>
                      <a href="reviews.html">
                        <i className="fas fa-star"></i>
                        <span>Reviews</span>
                      </a>
                    </li>
                    <li>
                      <a href="chat-doctor.html">
                        <i className="fas fa-comments"></i>
                        <span>Message</span>
                        <small className="unread-msg">23</small>
                      </a>
                    </li>
                    <li>
                      <a href="doctor-profile-settings.html">
                        <i className="fas fa-user-cog"></i>
                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="social-media.html">
                        <i className="fas fa-share-alt"></i>
                        <span>Social Media</span>
                      </a>
                    </li>
                    <li>
                      <a href="doctor-change-password.html">
                        <i className="fas fa-lock"></i>
                        <span>Change Password</span>
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Invoice No</th>
                        <th>Patient</th>
                        <th>Amount</th>
                        <th>Paid On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>
<a href="detailinvoice">#INV-0010</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
</h2>
</td>
<td>$450</td>
<td>14 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
<tr>
<td>
<a href="detailinvoice">#INV-0009</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Charlene Reed <span>#PT0001</span></a>
</h2>
</td>
<td>$200</td>
<td>13 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
<tr>
<td>
<a href="detailinvoice">#INV-0008</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Travis Trimble <span>#PT0002</span></a>
</h2>
</td>
<td>$100</td>
<td>12 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
<tr>
<td>
<a href="detailinvoice">#INV-0007</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Carl Kelly <span>#PT0003</span></a>
</h2>
</td>
<td>$350</td>
<td>11 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
<tr>
<td>
<a href="detailinvoice">#INV-0006</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Michelle Fairfax <span>#PT0004</span></a>
</h2>
</td>
<td>$275</td>
<td>10 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
<tr>
<td>
<a href="detailinvoice">#INV-0005</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Gina Moore <span>#PT0005</span></a>
</h2>
</td>
<td>$600</td>
<td>9 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
<tr>
<td>
<a href="detailinvoice">#INV-0004</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Elsie Gilley <span>#PT0006</span></a>
</h2>
</td>
<td>$50</td>
<td>8 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
<tr>
<td>
<a href="detailinvoice">#INV-0003</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Joan Gardner <span>#PT0007</span></a>
</h2>
</td>
<td>$400</td>
<td>7 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
<tr>
<td>
<a href="detailinvoice">#INV-0002</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Daniel Griffing <span>#PT0008</span></a>
</h2>
</td>
<td>$550</td>
<td>6 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
                      </tr>
                      <tr>
<td>
<a href="detailinvoice">#INV-0001</a>
</td>
<td>
<h2 className="table-avatar">
<a href="patient-profile.html" className="avatar avatar-sm me-2">
<img className="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image"/>
</a>
<a href="patient-profile.html">Walter Roberson <span>#PT0009</span></a>
</h2>
</td>
<td>$100</td>
<td>5 Nov 2023</td>
<td>
<div className="table-action">
<a href="detailinvoice" className="btn btn-sm bg-info-light">
<i className="far fa-eye"></i> View
</a>
<a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
<i className="fas fa-print"></i> Print
</a>
</div>
</td>
</tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
