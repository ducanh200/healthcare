import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { Link } from "react-router-dom";

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
        <div class="content">
<div class="container">
<div class="row">


</div>
<div class="col-md-12 col-lg-12 col-xl-12">
{departments.map((department, index) => (
<div key={index} class="card">
<div class="card-body">
<div class="doctor-widget">
<div class="doc-info-left">
<div class="doctor-img">
<a href="doctor-profile.html">
<img src={department.thumbnail} class="img-fluid" alt="User Image"/>
</a>
</div>
<div class="doc-info-cont">
<h4 class="doc-name"><a href="doctor-profile.html">{department.name}</a></h4>
<p class="doc-speciality">{department.description}
</p>
<div class="clinic-details">
<p class="doc-location"><i class="fas fa-map-marker-alt"></i> 8a Ton That Thuyet</p>

</div>
</div>
</div>
<div class="doc-info-right">
<div class="clini-infos">
<ul>
<li><i class="far fa-money-bill-alt"></i> ${department.expense} <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i> </li>
</ul>
</div>
<div class="clinic-booking">
<a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
<Link class="apt-btn" to={`/booking/${department.id}`}>Book Appointment</Link>
</div>
</div>
</div>
</div>
</div>
))}
<div class="load-more text-center">
<a class="btn btn-primary btn-sm prime-btn" href="javascript:void(0);">Load More</a>
</div>
</div>
</div>
</div>
    );
}

export default Department;
