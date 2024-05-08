import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";

function Department() {
    const navigate = useNavigate();
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
    const handleClick = (departmentId) => {
        navigate(`/booking/${departmentId}`)
        window.location.reload()
    };

    return (
        <div className="content">
<div className="container">
<div className="row">


</div>
<div className="col-md-12 col-lg-12 col-xl-12">
{departments.map((department, index) => (
<div key={index} className="card">
<div className="card-body">
<div className="doctor-widget">
<div className="doc-info-left">
<div className="doctor-img">
<a href="doctor-profile.html">
<img src={department.thumbnail} className="img-fluid" alt="User Image"/>
</a>
</div>
<div className="doc-info-cont">
<h4 className="doc-name"><a href="doctor-profile.html">{department.name}</a></h4>
<p className="doc-speciality">{department.description}
</p>
<div className="clinic-details">
<p className="doc-location"><i className="fas fa-map-marker-alt"></i> 8a Ton That Thuyet</p>

</div>
</div>
</div>
<div className="doc-info-right">

<div className="clinic-booking">
<a className="view-pro-btn" href="doctor-profile.html">View Profile</a>
<a className="apt-btn" onClick={() => handleClick(department.id)}>Book Appointment</a>
</div>
</div>
</div>
</div>
</div>
))}
<div className="load-more text-center">
<a className="btn btn-primary btn-sm prime-btn" href="javascript:void(0);">Load More</a>
</div>
</div>
</div>
</div>
    );
}

export default Department;
