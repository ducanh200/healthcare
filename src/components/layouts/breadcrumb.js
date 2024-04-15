import React from 'react';
import { useLocation } from 'react-router-dom';

function BreadCrumb({ currentLocation }){

    const location = useLocation();

    const isHomePage = location.pathname === '/' || location.pathname === '/404' || location.pathname === '/login' || location.pathname === '/register'; 

    let breadcrumbName = 'Default';

    switch (currentLocation) {
        case '/prescription_details':
          breadcrumbName = 'Prescription details';
          break;
        case '/blog_details':
          breadcrumbName = 'Blog Details';
          break;
        case '/product_description':
          breadcrumbName = 'Product Description';
          break;
        case '/contact':
          breadcrumbName = 'Contact Us';
          break;
        case '/aboutus':
          breadcrumbName = 'About Us';
          break;
        case '/invoice':
          breadcrumbName = 'Invoice';
          break;
        case '/detailinvoice':
          breadcrumbName = 'Invoice View';
          break;
        case '/department':
          breadcrumbName = 'Departments';
          break;
        case '/booking':
          breadcrumbName = 'Booking';
          break;
        case '/doctor_profile_settings':
          breadcrumbName = 'Doctor Profile Settings';
          break;
          case '/partient_dashboard':
            breadcrumbName = 'Partient Dashboard';
            break;
    }

    return(
        <section className={`${isHomePage ? 'hide' : 'show'}`}>
            {!isHomePage && (
                <div className="breadcrumb-bar-two">
                    <div className="container">
                        <div className="row align-items-center inner-banner">
                            <div className="col-md-12 col-12 text-center">
                                <h2 className="breadcrumb-title">{breadcrumbName}</h2>
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item" aria-current="page">{breadcrumbName}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default BreadCrumb;