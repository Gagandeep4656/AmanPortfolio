import React from 'react';
// image
import Image from '../assets/banner1.png';
import { motion } from "framer-motion"
// icon
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
//motion
//ariant
import { fadeIn } from "../variant.jsx";
//link
import { Link } from 'react-scroll'



const Banner = () => {
  return <section className='flex items-center min-h-[70vh] lg:min-h-[65vh] '>
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">

        {/* text  */}
        <div className="text-white flex-1 text-center font-secondary lg:text-left">
          <motion.h1
            // transition={{
            //   ease: "fadeIn",
            //   duration: 2,
            //   x:{duration :1}
            // }} 


            variants={fadeIn("up", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            // initial={{y: 30}}
            // animate={{y: -1}}
            // transition={{delay:0, duration:1.2, type:'spring', stiffness: 100}}
            className='text-4xl font-bold uppercase leading-[0.8] lg:text-6xl'> Aman
            <span> Pandat</span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            // initial={{y: 30}}
            //   animate={{y: -1}}
            //   transition={{delay:0.2, duration:1, type:'spring', stiffness: 200}}
            className="text-2xl mb-6 lg:text-4xl font-secondary font-semiboled uppercase leading-[1]">
            <span className='mr-4'>
              I am a
            </span>
            {/* <TypeAnimation/> */}

            <TypeAnimation
              sequence={[
                'Graphic Designer',
                2000,
                'Video Editor',
                2000,

              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
              className='text-gradient '
            />


          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0 '>Hi I am a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics to create a piece of design</motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max gap-6 items-center mb-12 mx-auto lg:mx-0">
            
            <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className=' flex items-center justify-center'>
            <button className='btn btn-lg'>Contact Me</button>
          
        </Link>

            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          {/* socials */}
          <motion.div
          variants={fadeIn("up", 0.7)}
          initial={"hidden"} 
          whileInView={"show"} 
          viewport={{ once: false, amount: 0.7 }}
          className="flex text-2xl gap-6 max-w-max mx-auto lg:mx-3 ">
            <a href="#" className='text-red-500'>
              <FaYoutube />
            </a>
            <a href="#" className='text-red-500'>
              <FaInstagram />
            </a>
            <a href="#" className='text-blue-500'>
              <FaFacebook />
            </a>
          </motion.div>
        </div>
        {/* image  */}
        <motion.div
        variants={fadeIn("down", 0.3)}
        initial={"hidden"} 
        whileInView={"show"} 
        
        className="flex justify-center hidden lg:flex ">
          <img src={Image} alt="personal image" className=' mix-blend-multiply contrast-100 sm:h-[30rem] h-[25rem] sm:m-10 lg:m-6' />
        </motion.div>

      </div>


    </div>



  </section >
};

export default Banner;
