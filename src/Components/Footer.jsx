import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import  "./Footer.css"

function Footer() {
  return (
    <div className='Footer'>
        <div  className='location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.955055902362!2d76.89350497409629!3d8.503744996991646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bd2301944141%3A0xf1ff03da23c0b86f!2sZion%20glass%20land!5e0!3m2!1sen!2sin!4v1712209977933!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='footerEnd'>
            <h2>Zion</h2>
            <div className='socialIcon'>
                <FacebookIcon/>
                <InstagramIcon/>

            </div>
        </div>

    </div>
  )
}

export default Footer