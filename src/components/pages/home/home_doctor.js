import { useEffect, useState } from "react";
import url from "../../../services/url";
import api from "../../../services/api";

function Home_doctor() {
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
        <section className="doctors-section">
            <div className="container" style={{ textAlign: "justify" }}>
                <div className="row">
                    <div className="col-md-12 aos" data-aos="fade-up">
                        <div className="section-header-one text-center">
                            <h2 className="section-title">Doctors</h2>
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
    );
}
export default Home_doctor;