function Patient_Dashboard() {
    return (
        <div className="content" style={{textAlign:"justify"}}>
            <div className="container">
                <div className="row">

                    <div className="col-md-5 col-lg-4 col-xl-3 ">
                        <div className="profile-sidebar">
                            <div className="widget-profile pro-widget-content">
                                <div className="profile-info-widget">
                                    <a href="#" className="booking-doc-img">
                                        <img src="assets/img/patients/patient.jpg" alt="User Image" />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>Richard Wilson</h3>
                                        <div className="patient-details">
                                            <h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                                            <h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-widget">
                                <nav className="dashboard-menu">
                                    <ul>
                                        <li className="active">
                                            <a href="patient-dashboard.html">
                                                <i className="fas fa-columns"></i>
                                                <span>Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="favourites.html">
                                                <i className="fas fa-bookmark"></i>
                                                <span>Favourites</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dependent.html">
                                                <i className="fas fa-users"></i>
                                                <span>Dependent</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="chat.html">
                                                <i className="fas fa-comments"></i>
                                                <span>Message</span>
                                                <small className="unread-msg">23</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="patient-accounts.html">
                                                <i className="fas fa-file-invoice-dollar"></i>
                                                <span>Accounts</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="orders-list.html">
                                                <i className="fas fa-list-alt"></i>
                                                <span>Orders</span>
                                                <small className="unread-msg">7</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="medical-records.html">
                                                <i className="fas fa-clipboard"></i>
                                                <span>Add Medical Records</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="medical-details.html">
                                                <i className="fas fa-file-medical-alt"></i>
                                                <span>Medical Details</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="profile-settings.html">
                                                <i className="fas fa-user-cog"></i>
                                                <span>Profile Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="change-password.html">
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
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="mb-3">
                                            <img src="assets/img/specialities/pt-dashboard-01.png" alt="heart-image" width="55" />
                                        </div>
                                        <h5>Heart Rate</h5>
                                        <h6>12 <sub>bpm</sub></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="mb-3">
                                            <img src="assets/img/specialities/pt-dashboard-02.png" alt="thermometer-image" width="55" />
                                        </div>
                                        <h5>Body Temperature</h5>
                                        <h6>18 <sub>C</sub></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="mb-3">
                                            <img src="assets/img/specialities/pt-dashboard-03.png" alt="hospital-equipment" width="55" />
                                        </div>
                                        <h5>Glucose Level</h5>
                                        <h6>70 - 90</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="mb-3">
                                            <img src="assets/img/specialities/pt-dashboard-04.png" alt="hospital-equipment" width="55" />
                                        </div>
                                        <h5>Blood Pressure</h5>
                                        <h6>202/90 <sub>mg/dl</sub></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row patient-graph-col">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Graph Status</h4>
                                    </div>
                                    <div className="card-body pt-2 pb-2 mt-1 mb-1">
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                                                <a href="#" className="graph-box" data-bs-toggle="modal" data-bs-target="#graph1">
                                                    <div>
                                                        <h4>BMI Status</h4>
                                                    </div>
                                                    <div className="graph-img">
                                                        <img src="assets/img/shapes/graph-01.png" alt="shapes-icon" />
                                                    </div>
                                                    <div className="graph-status-result mt-3">
                                                        <span className="graph-update-date">Last Update 6d</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                                                <a href="#" className="graph-box pink-graph" data-bs-toggle="modal" data-bs-target="#graph2">
                                                    <div>
                                                        <h4>Heart Rate Status</h4>
                                                    </div>
                                                    <div className="graph-img">
                                                        <img src="assets/img/shapes/graph-02.png" alt="graph-icon" />
                                                    </div>
                                                    <div className="graph-status-result mt-3">
                                                        <span className="graph-update-date">Last Update 2d</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                                                <a href="#" className="graph-box sky-blue-graph" data-bs-toggle="modal" data-bs-target="#graph3">
                                                    <div>
                                                        <h4>FBC Status</h4>
                                                    </div>
                                                    <div className="graph-img">
                                                        <img src="assets/img/shapes/graph-03.png" alt="chart-icon" />
                                                    </div>
                                                    <div className="graph-status-result mt-3">
                                                        <span className="graph-update-date">Last Update 5d</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                                                <a href="#" className="graph-box orange-graph" data-bs-toggle="modal" data-bs-target="#graph4">
                                                    <div>
                                                        <h4>Weight Status</h4>
                                                    </div>
                                                    <div className="graph-img">
                                                        <img src="assets/img/shapes/graph-04.png" alt="chart-icon" />
                                                    </div>
                                                    <div className="graph-status-result mt-3">
                                                        <span className="graph-update-date">Last Update 3d</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body pt-0">

                                <nav className="user-tabs mb-4">
                                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#pat_appointments" data-bs-toggle="tab">Appointments</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#pat_prescriptions" data-bs-toggle="tab">Prescriptions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#pat_medical_records" data-bs-toggle="tab"><span className="med-records">Medical Records</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#pat_billing" data-bs-toggle="tab">Billing</a>
                                        </li>
                                    </ul>
                                </nav>


                                <div className="tab-content pt-0">

                                    <div id="pat_appointments" className="tab-pane fade show active">
                                        <div className="card card-table mb-0">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Doctor</th>
                                                                <th>Appt Date</th>
                                                                <th>Booking Date</th>
                                                                <th>Amount</th>
                                                                <th>Follow Up</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>14 Nov 2023 <span className="d-block text-info">10.00 AM</span></td>
                                                                <td>12 Nov 2023</td>
                                                                <td>$160</td>
                                                                <td>16 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-success-light">Confirm</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>12 Nov 2023 <span className="d-block text-info">8.00 PM</span></td>
                                                                <td>12 Nov 2023</td>
                                                                <td>$250</td>
                                                                <td>14 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-success-light">Confirm</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>11 Nov 2023 <span className="d-block text-info">11.00 AM</span></td>
                                                                <td>10 Nov 2023</td>
                                                                <td>$400</td>
                                                                <td>13 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-danger-light">Cancelled</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Sofia Brient <span>Urology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>10 Nov 2023 <span className="d-block text-info">3.00 PM</span></td>
                                                                <td>10 Nov 2023</td>
                                                                <td>$350</td>
                                                                <td>12 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-warning-light">Pending</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Marvin Campbell <span>Ophthalmology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>9 Nov 2023 <span className="d-block text-info">7.00 PM</span></td>
                                                                <td>8 Nov 2023</td>
                                                                <td>$75</td>
                                                                <td>11 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-success-light">Confirm</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Katharine Berthold <span>Orthopaedics</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>8 Nov 2023 <span className="d-block text-info">9.00 AM</span></td>
                                                                <td>6 Nov 2023</td>
                                                                <td>$175</td>
                                                                <td>10 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-danger-light">Cancelled</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Linda Tobin <span>Neurology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>8 Nov 2023 <span className="d-block text-info">6.00 PM</span></td>
                                                                <td>6 Nov 2023</td>
                                                                <td>$450</td>
                                                                <td>10 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-success-light">Confirm</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Paul Richard <span>Dermatology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>7 Nov 2023 <span className="d-block text-info">9.00 PM</span></td>
                                                                <td>7 Nov 2023</td>
                                                                <td>$275</td>
                                                                <td>9 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-success-light">Confirm</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. John Gibbs <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>6 Nov 2023 <span className="d-block text-info">8.00 PM</span></td>
                                                                <td>4 Nov 2023</td>
                                                                <td>$600</td>
                                                                <td>8 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-success-light">Confirm</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Olga Barlow <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>5 Nov 2023 <span className="d-block text-info">5.00 PM</span></td>
                                                                <td>1 Nov 2023</td>
                                                                <td>$100</td>
                                                                <td>7 Nov 2023</td>
                                                                <td><span className="badge rounded-pill bg-success-light">Confirm</span></td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
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


                                    <div className="tab-pane fade" id="pat_prescriptions">
                                        <div className="card card-table mb-0">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Date </th>
                                                                <th>Name</th>
                                                                <th>Created by </th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>14 Nov 2023</td>
                                                                <td>Prescription 1</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>13 Nov 2023</td>
                                                                <td>Prescription 2</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>12 Nov 2023</td>
                                                                <td>Prescription 3</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>11 Nov 2023</td>
                                                                <td>Prescription 4</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Sofia Brient <span>Urology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>10 Nov 2023</td>
                                                                <td>Prescription 5</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Marvin Campbell <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>9 Nov 2023</td>
                                                                <td>Prescription 6</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Katharine Berthold <span>Orthopaedics</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>8 Nov 2023</td>
                                                                <td>Prescription 7</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Linda Tobin <span>Neurology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>7 Nov 2023</td>
                                                                <td>Prescription 8</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Paul Richard <span>Dermatology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>6 Nov 2023</td>
                                                                <td>Prescription 9</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. John Gibbs <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>5 Nov 2023</td>
                                                                <td>Prescription 10</td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Olga Barlow <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
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


                                    <div id="pat_medical_records" className="tab-pane fade">
                                        <div className="card card-table mb-0">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Date </th>
                                                                <th>Description</th>
                                                                <th>Attachment</th>
                                                                <th>Created</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0010</a></td>
                                                                <td>14 Nov 2023</td>
                                                                <td>Dental Filling</td>
                                                                <td><a href="#">dental-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0009</a></td>
                                                                <td>13 Nov 2023</td>
                                                                <td>Teeth Cleaning</td>
                                                                <td><a href="#">dental-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0008</a></td>
                                                                <td>12 Nov 2023</td>
                                                                <td>General Checkup</td>
                                                                <td><a href="#">cardio-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0007</a></td>
                                                                <td>11 Nov 2023</td>
                                                                <td>General Test</td>
                                                                <td><a href="#">general-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Sofia Brient <span>Urology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0006</a></td>
                                                                <td>10 Nov 2023</td>
                                                                <td>Eye Test</td>
                                                                <td><a href="#">eye-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Marvin Campbell <span>Ophthalmology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0005</a></td>
                                                                <td>9 Nov 2023</td>
                                                                <td>Leg Pain</td>
                                                                <td><a href="#">ortho-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Katharine Berthold <span>Orthopaedics</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0004</a></td>
                                                                <td>8 Nov 2023</td>
                                                                <td>Head pain</td>
                                                                <td><a href="#">neuro-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Linda Tobin <span>Neurology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0003</a></td>
                                                                <td>7 Nov 2023</td>
                                                                <td>Skin Alergy</td>
                                                                <td><a href="#">alergy-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Paul Richard <span>Dermatology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0002</a></td>
                                                                <td>6 Nov 2023</td>
                                                                <td>Dental Removing</td>
                                                                <td><a href="#">dental-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. John Gibbs <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                            <i className="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                                            <i className="fas fa-print"></i> Print
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0001</a></td>
                                                                <td>5 Nov 2023</td>
                                                                <td>Dental Filling</td>
                                                                <td><a href="#">dental-test.pdf</a></td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Olga Barlow <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
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


                                    <div id="pat_billing" className="tab-pane fade">
                                        <div className="card card-table mb-0">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Invoice No</th>
                                                                <th>Doctor</th>
                                                                <th>Amount</th>
                                                                <th>Paid On</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <a href="invoice-view.html">#INV-0010</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Ruby Perrin <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$450</td>
                                                                <td>14 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0009</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$300</td>
                                                                <td>13 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0008</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$150</td>
                                                                <td>12 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0007</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Sofia Brient <span>Urology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$50</td>
                                                                <td>11 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0006</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Marvin Campbell <span>Ophthalmology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$600</td>
                                                                <td>10 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0005</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Katharine Berthold <span>Orthopaedics</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$200</td>
                                                                <td>9 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0004</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Linda Tobin <span>Neurology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$100</td>
                                                                <td>8 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0003</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Paul Richard <span>Dermatology</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$250</td>
                                                                <td>7 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0002</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. John Gibbs <span>Dental</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$175</td>
                                                                <td>6 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                                                                    <a href="invoice-view.html">#INV-0001</a>
                                                                </td>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <a href="doctor-profile.html" className="avatar avatar-sm me-2">
                                                                            <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image" />
                                                                        </a>
                                                                        <a href="doctor-profile.html">Dr. Olga Barlow <span>#0010</span></a>
                                                                    </h2>
                                                                </td>
                                                                <td>$550</td>
                                                                <td>5 Nov 2023</td>
                                                                <td>
                                                                    <div className="table-action">
                                                                        <a href="invoice-view.html" className="btn btn-sm bg-info-light">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Patient_Dashboard