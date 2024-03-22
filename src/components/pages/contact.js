function Contact() {
    return (
        <section className="contact-section">
            <div className="container" style={{textAlign:"justify"}}>
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="section-inner-header contact-inner-header">
                            <h6>Get in touch</h6>
                            <h2>Have Any Question?</h2>
                        </div>
                        <div className="card contact-card">
                            <div className="card-body">
                                <div className="contact-icon">
                                    <i className="feather-map-pin"></i>
                                </div>
                                <div className="contact-details">
                                    <h4>Address</h4>
                                    <p>8432 Mante Highway, Aminaport, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="card contact-card">
                            <div className="card-body">
                                <div className="contact-icon">
                                    <i className="feather-phone"></i>
                                </div>
                                <div className="contact-details">
                                    <h4>Phone Number</h4>
                                    <p>+1 315 369 5943</p>
                                </div>
                            </div>
                        </div>
                        <div className="card contact-card">
                            <div className="card-body">
                                <div className="contact-icon">
                                    <i className="feather-mail"></i>
                                </div>
                                <div className="contact-details">
                                    <h4>Email Address</h4>
                                    <p>
                                        <a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="680c070b0b1d1a0d280d10090518040d460b0705">[email&#160;protected]</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 d-flex">
                        <div className="card contact-form-card w-100">
                            <div className="card-body">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="mb-2">Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="mb-2">Email Address</label>
                                                <input type="text" className="form-control" placeholder="Enter Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="mb-2">Phone Number</label>
                                                <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="mb-2">Services</label>
                                                <input type="text" className="form-control" placeholder="Enter Services" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="mb-2">Message</label>
                                                <textarea className="form-control" placeholder="Enter your comments"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group-btn mb-0">
                                                <button type="submit" className="btn btn-primary prime-btn">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="contact-map d-flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096484299949!2d105.77972177471445!3d21.028825087777456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0bb9db373ed2!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711091916713!5m2!1svi!2s" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>              
        </div>            
        </section>
        
    
    );
}

export default Contact;
