import React, { useState } from 'react';
import {motion} from "framer-motion"
import "./Nav.css"
import SideBar from '../SideBar';

function Nav() {
  const [activeAnchor, setActiveAnchor] = useState("Home");

  const handleClick = (id) => {
    setActiveAnchor(id);
    console.log("active",activeAnchor )
  };
  return (
    <div className='Nav'>
       <SideBar/>
        <div className='NavImg'>
        <img src='https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/rzrmzrpitp5ntpjkvxno' alt='Logo'/>
        </div>
        <div className='NavConatiner'>
        <motion.a href="#Homepage" className={activeAnchor === 'Homepage' ? 'active' : ''} whileHover={{ scale: 1.3 }}  whileTap={{ scale: 0.9 }} onClick={() => handleClick('Homepage')}>Home</motion.a>
        <motion.a href="#About" className={activeAnchor === 'About' ? 'active' : ''} whileHover={{ scale: 1.3 }}  whileTap={{ scale: 0.9 }} onClick={() => handleClick('About')}>About</motion.a>
        <motion.a href="#Product" className={activeAnchor === 'Product' ? 'active' : ''} whileHover={{ scale: 1.3 }}   whileTap={{ scale: 0.9 }} onClick={() => handleClick('Product')}>Products</motion.a>
        <motion.a href="#Services" className={activeAnchor === 'Services' ? 'active' : ''} whileHover={{ scale: 1.3 }}  whileTap={{ scale: 0.9 }}  onClick={() => handleClick('Services')}>Services</motion.a>
        <motion.a href="#Contact" className={activeAnchor === 'Contact' ? 'active' : ''} whileHover={{ scale: 1.3 }}  whileTap={{ scale: 0.9 }} onClick={() => handleClick('Contact')}>Contact</motion.a>
           
        </div>
    </div>
  )
}

export default Nav