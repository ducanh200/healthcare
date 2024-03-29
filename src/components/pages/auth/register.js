import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { useNavigate } from "react-router-dom";

function Register(){
    
    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
      });
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const registerResponse = await api.post(url.PATIENT.REGISTER, user);
            setRegisterSuccess(true);
            setTimeout(() => {
                window.alert('Register success!');
                navigate('/login');
            }, 2000);
        } catch (error) {
            setFormErrors({
                email: "Email already in use",
                password: "Invalid email or password.",
              });
        }
    };
    return(
        <>
        <div className="content top-space">
<div className="container-fluid">
<div className="row">
<div className="col-md-8 offset-md-2">

<div className="account-content">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 col-lg-6 login-left">
<img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Register"/>
</div>
<div className="col-md-12 col-lg-6 login-right">
<div className="login-header">
<h3>Register</h3>
</div>

<form action="patient-register-step1.html" onSubmit={formSubmit} method="POST">
<div className="mb-3 form-focus">
<input onChange={handleChange} value={user.name} name="name" type="text" className="form-control floating"/>
<label className="focus-label">Name</label>
</div>
<div className="mb-3 form-focus">
<input onChange={handleChange} value={user.email} name="email" type="email" required className="form-control floating"/>
<label className="focus-label">Email</label>
</div>
<div className="mb-3 form-focus">
<input onChange={handleChange} value={user.phonenumber} name="phonenumber" type="text" className="form-control floating"/>
<label className="focus-label">Mobile Number</label>
</div>
<div className="mb-3 form-focus">
<input onChange={handleChange} value={user.password} name="password" type="password" className="form-control floating"/>
<label className="focus-label">Create Password</label>
</div>

<button className="btn btn-primary w-100 btn-lg login-btn" type="submit">Signup</button>


</form>

</div>
</div>
</div>

</div>
</div>
</div>
</div>

        </>
    )
}
export default Register;