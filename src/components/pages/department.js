import Home_department from "./home/home_department";

function Department(){
    const departments = [
        { name: "Cardiology", image: "assets/img/specialities/specialities-01.svg" },
        { name: "Neurology", image: "assets/img/specialities/specialities-02.svg" },
        { name: "Urology", image: "assets/img/specialities/specialities-03.svg" },
        { name: "Orthopedic", image: "assets/img/specialities/specialities-04.svg" },
        { name: "Dentist", image: "assets/img/specialities/specialities-05.svg" },
        { name: "Ophthalmology", image: "assets/img/specialities/specialities-06.svg" },
        { name: "Cardiology", image: "assets/img/specialities/specialities-01.svg" },
        { name: "Neurology", image: "assets/img/specialities/specialities-02.svg" },
        { name: "Urology", image: "assets/img/specialities/specialities-03.svg" },
        { name: "Orthopedic", image: "assets/img/specialities/specialities-04.svg" },
        { name: "Dentist", image: "assets/img/specialities/specialities-05.svg" },
        { name: "Ophthalmology", image: "assets/img/specialities/specialities-06.svg" }
    ];
    return(
        <section className="specialities-section-one">
            <div className="container" style={{textAlign:"justify"}}>
                <div className="row">
                    {departments.map((department, index) => (
                        <div key={index} className="col-md-2" style={{marginBottom:"35px"}}>
                            <div className="specialities-item">
                                <div className="specialities-img">
                                    <span><img src={department.image} alt={`${department.name}-image`} /></span>
                                </div>
                                <p>{department.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Department;