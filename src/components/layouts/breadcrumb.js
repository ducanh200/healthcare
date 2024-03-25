import React from 'react';
import { useLocation } from 'react-router-dom';

function BreadCrumb({ currentLocation }){

    const location = useLocation();

    const isHomePage = location.pathname === '/' || location.pathname === '/404'; 

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
          

    }

    return(
        <section className={`${isHomePage ? 'hide' : 'show'}`}>
            {!isHomePage && (
                <div class="breadcrumb-bar-two">
                    <div class="container">
                        <div class="row align-items-center inner-banner">
                            <div class="col-md-12 col-12 text-center">
                                <h2 class="breadcrumb-title">{breadcrumbName}</h2>
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item" aria-current="page">{breadcrumbName}</li>
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