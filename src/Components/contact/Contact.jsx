import React from 'react';
import {motion} from 'framer-motion';
import "./Contact.css"

const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    }
}
function Contact() {
  return (
    <motion.div className='Contact' variants={variants} initial="initial" whileInView="animate">
      <motion.div variants={variants} className='contactHeading'>
       <motion.h1 variants={variants}>Work with us</motion.h1>
       <motion.p variants={variants}>Need to get in touch with Zion? Zion offers comprehensive assistance for inquiries related to glass work, ensuringa dedicated team and computerized techniques are available to assist you.
</motion.p>
      </motion.div>
      <motion.div variants={variants}className='contactformContainer'initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}}>
        <motion.form className='contactformContainers' >
            <motion.h2 variants={variants}>Contact Form</motion.h2>
        <motion.input variants={variants} required  type='text' placeholder='Name' name="name"/>
            <motion.input  variants={variants}required type="email" placeholder='Email'name="email"/>
            <motion.textarea variants={variants} required placeholder='Message'name="message"/>
            <motion.button variants={variants}> Submit</motion.button>
        </motion.form>

      </motion.div>
    </motion.div>
  )
}

export default Contact