function Login(){
    return(
        <>
        <div class="content top-space">
    <div class="container-fluid">
    <div class="row">
    <div class="col-md-8 offset-md-2">
    
    <div class="account-content">
    <div class="row align-items-center justify-content-center">
    <div class="col-md-7 col-lg-6 login-left">
    <img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Login"/>
    </div>
    <div class="col-md-12 col-lg-6 login-right">
    <div class="login-header">
    <h3>Login</h3>
    </div>
    <form action="index.html">
    <div class="mb-3 form-focus">
    <input type="email" class="form-control floating"/>
    <label class="focus-label">Email</label>
    </div>
    <div class="mb-3 form-focus">
    <input type="password" class="form-control floating"/>
    <label class="focus-label">Password</label>
    </div>
    <div class="text-end">
    <a class="forgot-link" href="/forgot-password">Forgot Password ?</a>
    </div>
    <button class="btn btn-primary w-100 btn-lg login-btn" type="submit">Login</button>
    
    <div class="text-center dont-have">Don’t have an account? <a href="/register">Register</a></div>
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
    export default Login;