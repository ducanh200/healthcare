import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";

function Department() {
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
                    {departments.map((department, index) => (
                        <div key={index} className="col-md-2" style={{marginBottom:"35px"}}>
                            <div className="specialities-item">
                                <div className="specialities-img">
                                    <span><img src={department.thumbnail} alt={`${department.name}-image`} /></span>
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

export default Department;
