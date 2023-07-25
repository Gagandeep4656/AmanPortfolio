import React from 'react';
// images
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion"

const Header = () => {
  return <header className=' py-8' id="home">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="" className='fill-blue-500 h-2px w-4px  mix-blend-multiply h-20' />
        </a>
        <motion.button whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} className='btn btn-sm'>Hire Me</motion.button>
      </div>

      

    </div>


  </header>
};

export default Header;
