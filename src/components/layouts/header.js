function Header(){
    return(
        <header class="header header-custom header-fixed header-one">
            <div class="container">
                <nav class="navbar navbar-expand-lg header-nav">
                <div class="navbar-header">
                    <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </a>
                    <a href="/" class="navbar-brand logo">
                    <img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
                    </a>
                </div>
                <div class="main-menu-wrapper">
                    <div class="menu-header">
                    <a href="/" class="menu-logo">
                        <img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
                    </a>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                    </div>
                    <ul class="main-nav">
                    <li class="has-submenu megamenu active">
                        <a style={{marginRight:"10px"}} href="javascript:void(0);">Home</a>
                    </li>
                    <li class="has-submenu">
                        <a href="javascript:void(0);">Doctors <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                        <li><a href="doctor-dashboard.html">Doctor Dashboard</a></li>
                        <li><a href="appointments.html">Appointments</a></li>
                        <li><a href="schedule-timings.html">Schedule Timing</a></li>
                        <li><a href="my-patients.html">Patients List</a></li>
                        <li><a href="patient-profile.html">Patients Profile</a></li>
                        <li><a href="chat-doctor.html">Chat</a></li>
                        <li><a href="invoices.html">Invoices</a></li>
                        <li><a href="doctor-profile-settings.html">Profile Settings</a></li>
                        <li><a href="reviews.html">Reviews</a></li>
                        <li><a href="doctor-register.html">Doctor Register</a></li>
                        <li class="has-submenu">
                            <a href="doctor-blog.html">Blog</a>
                            <ul class="submenu">
                            <li><a href="doctor-blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog view</a></li>
                            <li><a href="doctor-add-blog.html">Add Blog</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li class="searchbar">
                        <a href="javascript:void(0);"><i class="feather-search"></i></a>
                        <div class="togglesearch">
                        <form action="https://doccure.dreamstechnologies.com/html/template/search.html">
                            <div class="input-group">
                            <input type="text" class="form-control"/>
                            <button type="submit" class="btn">Search</button>
                            </div>
                        </form>
                        </div>
                    </li>
                    <li class="login-link"><a href="login.html">Login / Signup</a></li>
                    <li class="register-btn">
                        <a href="register" class="btn reg-btn"><i class="feather-user"></i>Register</a>
                    </li>
                    <li class="register-btn">
                        <a href="login" class="btn btn-primary log-btn"><i class="feather-lock"></i>Login</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;