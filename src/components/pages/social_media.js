function Social_Media() {
    return (
        <div>
        <div className="container" style={{marginTop:"80px",marginLeft:"120px"}}>
        <div className="col-md-5 col-lg-4 col-xl-3 ">
            <div class="profile-sidebar">
        <div className="widget-profile pro-widget-content">
            <div className="profile-info-widget">
                <a href="#" class="booking-doc-img">
                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                </a>
                <div className="profile-det-info">
                    <h3>Dr. Darren Elder</h3>
                    <div className="patient-details">
                        <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>  
            </div>
            
        </div>
    <div>
    <form style={{marginTop:"-298px", marginBottom:"60px"}}>
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="mb-3"style={{marginLeft: "700px",width:"50%"}}>
                        <label className="mb-2" >Facebook URL</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>  
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="mb-3" style={{marginLeft: "700px",width:"50%"}}>
                        <label className="mb-2">Twitter URL</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="mb-3" style={{marginLeft: "700px",width:"50%"}}>
                        <label className="mb-2">Instagram URL</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="mb-3" style={{marginLeft: "700px",width:"50%"}}>
                        <label className="mb-2">Pinterest URL</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="mb-3" style={{marginLeft: "700px",width:"50%"}}>
                        <label className="mb-2">Linkedin URL</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="mb-3" style={{marginLeft: "700px",width:"50%"}}>
                        <label className="mb-2">Youtube URL</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="submit-section" style={{marginLeft: "580px",width:"50%"}}>
                <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
            </div>
        </form>
    </div>
    </div>
    )
}
export default Social_Media;