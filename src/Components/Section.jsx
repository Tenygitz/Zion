import React from 'react';
import "./Section.css"
import AboutPage from './section/AboutPage';
import ProductPage from './section/ProductPage';
import ServicePage from './section/ServicePage';
function Section() {
  return (
    <div className='Section'>
       <AboutPage/>
       <ProductPage/>
       <ServicePage/>
    </div>
  )
}

export default Section