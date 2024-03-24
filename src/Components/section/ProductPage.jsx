import React from 'react'
import "./ProductPage.css"
function ProductPage() {
  return (
    <div id="Product" className='ProductPage'>
        <div className='productHeading'>
           <h1>Our Product Range</h1>
           <button>View All</button>
        </div>
        <p>Our product range offers a versatile selection of glass solutions to meet various requirements. we provide quality craftsmanship
           to elevate any space. Explore our range and discover how Zion can transform your surroundings with style and sophistication.</p>
         <div className='productImgContainer'>
            <div className='img1'></div>
            <div className='img1'></div>
            <div className='img1'></div>
            <div className='img1'></div>
          
         </div>
    </div>
  )
}

export default ProductPage