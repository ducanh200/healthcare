import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";

function Login(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({
      email: "",
      password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      };
      const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "Please enter your email address.";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Please enter your password.";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            valid = false;
        } else if (formData.password.length > 50) {
            newErrors.password = "Password must be less than 50 characters.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const loginResponse = await api.post(url.PATIENT.LOGIN, formData);
                const token = loginResponse.data.token;

                // Logging the token and response for debugging

                localStorage.setItem("accessToken", token);

                // Use either navigate or window.location.reload(), not both
                navigate("/", { replace: true });
                window.location.reload(); // This will replace the current entry in the history stack
            } catch (error) {
                // Log the error to see what went wrong
                console.error("Login error:", error.response?.data || error.message);

                setFormErrors({
                    email: "Invalid email or password.",
                    password: "Invalid email or password.",
                });
            }
        }
    };

    return(
        <div className="content top-space">
<div className="container-fluid">
<div className="row">
<div className="col-md-8 offset-md-2">

<div className="account-content">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 col-lg-6 login-left">
<img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Login"/>
</div>
<div className="col-md-12 col-lg-6 login-right">
<div className="login-header">
<h3>Login <span>Doccure</span></h3>
</div>
<form method="post" onSubmit={handleSubmit}>
<div className="mb-3 form-focus">
<input required name="email" onChange={handleChange} type="email" className="form-control floating"/>
<label className="focus-label">Email</label>
{formErrors.email && <div className="text-danger">{formErrors.email}</div>}
</div>
<div style={{marginTop:'25px'}} className="mb-3 form-focus">
<input required name="password" onChange={handleChange} type="password" className="form-control floating"/>
<label className="focus-label">Password</label>
{formErrors.password && <div className="text-danger">{formErrors.password}</div>}
</div>
<div className="text-end">
<a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
</div>
<button className="btn btn-primary w-100 btn-lg login-btn" type="submit">Login</button>
<div className="login-or">
<span className="or-line"></span>
<span className="span-or">or</span>
</div>
<div className="row social-login">
<div className="col-6">
<a href="#" className="btn btn-facebook w-100"><i className="fab fa-facebook-f me-1"></i> Login</a>
</div>
<div className="col-6">
<a href="#" className="btn btn-google w-100"><i className="fab fa-google me-1"></i> Login</a>
</div>
</div>
<div className="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>
</form>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
    )
}
export default Login;