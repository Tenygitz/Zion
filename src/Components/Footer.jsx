import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import  "./Footer.css"

function Footer() {
  return (
    <div className='Footer'>
        <div  className='location'>
            <img src="https://img.staticmb.com/mbphoto/locality/original_images/2021/Dec/24/117961_MAP.png" />
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