function Contact() {
    return (
        <section className="contact-section">
            <div className="container" style={{ textAlign: "justify" }}>
                <div className="row">
                    <div class="row">
                        <div class="col-lg-4 d-flex">
                            <div class="card contact-card w-100">
                                <div class="card-body">
                                    <div class="contact-icon">
                                        <i class="feather-map-pin"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4>Address</h4>
                                        <p>8a Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 d-flex">
                            <div class="card contact-card w-100">
                                <div class="card-body">
                                    <div class="contact-icon">
                                        <i class="feather-phone"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4>Phone Number</h4>
                                        <p>+84 367 245 831</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 d-flex">
                            <div class="card contact-card w-100">
                                <div class="card-body">
                                    <div class="contact-icon">
                                        <i class="feather-mail"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4>Email Address</h4>
                                        <p>demo@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-map d-flex">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096484299949!2d105.77972177471445!3d21.028825087777456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0bb9db373ed2!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711091916713!5m2!1svi!2s" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>


    );
}

export default Contact;
