function Home_department() {
    return (
        <section className="specialities-section-one">
            <div className="container" style={{textAlign:"justify"}}>
                <div className="row">
                    <div className="col-md-12 aos" data-aos="fade-up">
                        <div className="section-header-one text-center">
                            <h2 className="section-title">Departments</h2>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel specialities-slider-one owl-theme aos" data-aos="fade-up">
                    <div className="item">
                        <div className="specialities-item">
                            <div className="specialities-img">
                                <span><img src="assets/img/specialities/specialities-01.svg" alt="heart-image" /></span>
                            </div>
                            <p>Cardiology</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="specialities-item">
                            <div className="specialities-img">
                                <span><img src="assets/img/specialities/specialities-02.svg" alt="brain-image" /></span>
                            </div>
                            <p>Neurology</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="specialities-item">
                            <div className="specialities-img">
                                <span><img src="assets/img/specialities/specialities-03.svg" alt="kidney-image" /></span>
                            </div>
                            <p>Urology</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="specialities-item">
                            <div className="specialities-img">
                                <span><img src="assets/img/specialities/specialities-04.svg" alt="bone-image" /></span>
                            </div>
                            <p>Orthopedic</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="specialities-item">
                            <div className="specialities-img">
                                <span><img src="assets/img/specialities/specialities-05.svg" alt="dentist" /></span>
                            </div>
                            <p>Dentist</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="specialities-item">
                            <div className="specialities-img">
                                <span><img src="assets/img/specialities/specialities-06.svg" alt="eye-image" /></span>
                            </div>
                            <p>Ophthalmology</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="specialities-item">
                            <div className="specialities-img">
                                <span><img src="assets/img/specialities/specialities-02.svg" alt="brain-image" /></span>
                            </div>
                            <p>Neurology</p>
                        </div>
                    </div>
                </div>
                <div className="specialities-btn aos" data-aos="fade-up">
                    <a href="search.html" className="btn">See All Specialities</a>
                </div>
            </div>
        </section>
    );
}

export default Home_department;
