import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import BreadCrumb from './components/layouts/breadcrumb';

import Home from './components/pages/home';
import Booking from './components/pages/booking';
import Prescription_details from './components/pages/prescription_details';
import Error404 from './components/pages/error404'
import Blog_details from './components/pages/blog_details'
import Product_description from './components/pages/product_description'
import Contact from './components/pages/contact';
import AboutUs from './components/pages/about';
import Invoice from './components/pages/invoice';
import DetailInvoice from './components/pages/detailinvoice';
import Department from './components/pages/department';
import Login from './components/pages/auth/login';
import Register from './components/pages/auth/register';
import CheckOut from './components/pages/checkout';
import BookingSuccess from './components/pages/booking-success';
import Doctor_profile_settings from './components/pages/doctor_profile_settings';
import Patient_Dashboard from './components/pages/partient_dashboard';
import Social_Media from './components/pages/social_media';
import { useJwt } from 'react-jwt';


function App() {
  const location = useLocation();
  
  // Check if the current path is /login
  const isLoginPath = location.pathname === '/login';
  const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("accessToken");
    const { isExpired, isInvalid } = useJwt(token);

    if (!token || isExpired || isInvalid) {
      window.alert('You have to login first')
        localStorage.removeItem("accessToken");
        return <Navigate to="/login" />;
    }

    return element;
};

const ProtectedLoginRoute = ({ element }) => {
    const token = localStorage.getItem("accessToken");
    const { isExpired, isInvalid } = useJwt(token);

    if (token && !isExpired && !isInvalid) {
        return <Navigate to="/" />;
    }

    return element;
};
  return (
    <div className="App">
      <div id="loader">
        <div className="loader">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="main-wrapper">
        <Header></Header>
        <BreadCrumb currentLocation={location.pathname} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking/:id' element={<ProtectedRoute element={<Booking />}/>} />
          <Route path='/prescription_details' element={<Prescription_details />} />
          <Route path='/404' element={<Error404 />} />
          <Route path='/blog_details' element={<Blog_details />} />
          <Route path='/product_description' element={<Product_description />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/invoice' element={<ProtectedRoute element={<Invoice />}/>} />
          <Route path='/detailinvoice' element={<ProtectedRoute element={<DetailInvoice />}/>} />
          <Route path='/department' element={<Department />} />
          <Route path='/login' element={<ProtectedLoginRoute element={<Login />} />} />
          <Route path='/register' element={<ProtectedLoginRoute element={<Register />} />} />
          <Route path='/checkout' element={<ProtectedRoute element={<CheckOut />}/>} />
          <Route path='/booking-success/:id' element={<ProtectedRoute element={<BookingSuccess />}/>} />
          <Route path='/doctor_profile_settings' element={<Doctor_profile_settings />} />
          <Route path='/partient_dashboard' element={<Patient_Dashboard />} />
          <Route path='/social_media' element={<Social_Media />} />
          <Route path='/partient_dashboard' element={<ProtectedRoute element={<Patient_Dashboard />}/>} />
        </Routes>
        <Footer></Footer>
        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
      </div>
      <div className="progress-wrap active-progress">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919px, 307.919px', strokeDashoffset: '228.265px' }}></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
