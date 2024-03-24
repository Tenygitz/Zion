import React from 'react';
import {motion} from "framer-motion"
import "./HomePage.css"
import Nav from './home/Nav'

const textvarirants={
  initial:{
      x:-500,
      opacity:0

  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          duration:1,
          staggerChildren:0.1
      },
  },
  scrollButton:{
      opacity:0,
      y:10,
      transition:{
          duration:2,
          repeat:Infinity
      }
  }
}

function Homepage() {
  return (
    <div className='Homepage'>
        <Nav/>
        <motion.div className='homeContainer ' variants={textvarirants} initial="initial" animate="animate">
          <motion.div className='homeHeadings'>
           <motion.h1 variants={textvarirants}>Elivate your surrounding with us</motion.h1>
           <motion.h2 variants={textvarirants}>- Where mission meets inavaction</motion.h2>
           </motion.div>
           <motion.div className='HomeImgContainer'  variants={textvarirants}>
            <motion.img src='https://img.staticmb.com/mbcontent/images/crop/uploads/2023/2/Balcony-Glass-Railing-Designs_0_1200.jpg' alt='image '/>
           </motion.div>
        </motion.div>

    </div>
  )
}

export default Homepage