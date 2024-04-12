import { useEffect, useState } from "react";
import url from "../../../services/url";
import api from "../../../services/api";


function Home_department() {
        const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const loadDepartment = async () => {
            try {
                const rs = await api.get(url.DEPARTMENT.LIST);
                setDepartments(rs.data);
            } catch (error) {
                console.error("Error loading departments:", error);
            }
        };
        loadDepartment();
    }, []);
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
                    {departments.map((department, index) => (
                    <div className="item">
                        <div className="specialities-item">
                            <div className="specialities-img">
                                <span><img src={department.thumbnail} alt={department.name} /></span>
                            </div>
                            <p>{department.name}</p>
                        </div>
                    </div>
                    ))}
                    </div>
            </div>
        </section>
    );
}

export default Home_department;
