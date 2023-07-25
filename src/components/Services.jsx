import React from 'react';
// icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
// variant 
import { fadeIn } from "../variant";
//link
import { Link } from 'react-scroll'

//services data
const services = [
  {
    name: "Graphic Design",
    description: "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet ex asperiores mollitia hic ",
    link: "Learn more",
  },
  {
    name: "Video Editing",
    description: "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet ex asperiores mollitia hic ",
    link: "Learn more",
  },
  {
    name: "Photoshop Design",
    description: "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet ex asperiores mollitia hic ",
    link: "Learn more",
  },
  {
    name: "Logo Branding",
    description: "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet ex asperiores mollitia hic ",
    link: "Learn more",
  },
]


const Services = () => {
  return <section className='section' id='services'>
    <div className="container mx-auto ">
      <div className=" text-white flex flex-col lg:flex-row">
        {/* text & img */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat h-[45rem] mix-blend-lighten mb-12 lg:mb-0">
          <h2 className='h2 text-gradient mb-6'>What I Do</h2>
          <h3 className='h3 max-w-[30rem] mb-16 text-white font-semibold'>
            I'm a Freelance Graphic Designer and Video Editor with over 3 years of experience.
          </h3>

          <Link
            to='work1'
            activeClass='active'
            smooth={true}
            spy={true}
            className=''>
          <button className='btn btn-sm'>See my work</button>
          </Link>

        </motion.div>
        {/* services  */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          // viewport={}
          className="flex-1">
          {/* services list  */}
          <div className="">
            {services.map((service, index) => {
              // destructuring service
              const { name, description, link } = service;
              return <div key={index} className=' flex  border-b border-white/40 lg:h-[8rem] h-[8rem] mb-[4rem]'>
                <div className="max-w-[30rem]">
                  <h4 className='h4 mb-6 text-xl tracking-wider font-primary font-semibold'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>

                <div className="flex flex-col flex-1 items-end ">
                  <a href="#" className='btn w-9 h-9 mb-[2rem] text-black justify-center flex items-center '>
                    <BsArrowUpRight className='' />
                  </a>
                  <a href="#" className='text-gradient text-sm'>
                    {link}

                  </a>
                </div>
              </div>;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
};

export default Services;
