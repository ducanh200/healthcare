function Doctor_profile_settings() {
    return (
        <div class="content">
            <div class="container" style={{ textAlign: "justify" }}>
                <div class="row">
                    <div class="col-md-5 col-lg-4 col-xl-3 ">
                        <div class="profile-sidebar">
                            <div class="widget-profile pro-widget-content">
                                <div class="profile-info-widget">
                                    <a href="#" class="booking-doc-img">
                                        <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                    </a>
                                    <div class="profile-det-info">
                                        <h3>Dr. Darren Elder</h3>
                                        <div class="patient-details">
                                            <h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-8 col-xl-9">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Infomation Patient</h4>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{width: "30%"}}>Name</th>
                                            <td style={{width: "70%"}}>John Doe</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{width: "30%"}}>Age</th>
                                            <td style={{width: "70%"}}>30</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{width: "30%"}}>Date of birth</th>
                                            <td style={{width: "70%"}}>01/01/1994</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{width: "30%"}}>Address</th>
                                            <td style={{width: "70%"}}>123 Main Street, City, Country</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Infomation Booking</h4>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{width: "30%"}}>Date</th>
                                            <td style={{width: "70%"}}>01/01/1994</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{width: "30%"}}>Time</th>
                                            <td style={{width: "70%"}}>12:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Infomation Device</h4>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{width: "30%"}}>Name Device</th>
                                            <td style={{width: "70%"}}>Ultrasound Machine</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">About Me</h4>
                                <div class="mb-0">
                                    <label class="mb-2">Biography</label>
                                    <textarea class="form-control" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Clinic Info</h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="mb-2">Clinic Name</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="mb-2">Clinic Address</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="mb-2">Clinic Images</label>
                                            <form action="#" class="dropzone" style={{ padding: "60px" }}><p style={{ textAlign: "center", marginBottom: "0px" }}>Drop files here to upload</p></form>
                                        </div>
                                        <div class="upload-wrap">
                                            <div class="upload-images">
                                                <img src="assets/img/features/feature-01.jpg" alt="Upload Image" />
                                                <a href="javascript:void(0);" class="btn btn-icon btn-danger btn-sm"><i
                                                    class="far fa-trash-alt"></i></a>
                                            </div>
                                            <div class="upload-images">
                                                <img src="assets/img/features/feature-02.jpg" alt="Upload Image" />
                                                <a href="javascript:void(0);" class="btn btn-icon btn-danger btn-sm"><i
                                                    class="far fa-trash-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="submit-section submit-btn-bottom">
                            <button type="submit" href="#" class="btn btn-primary prime-btn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Doctor_profile_settings