import React from 'react';
//countup
import CountUp from "react-countup";
//intersection observer
import { useInView } from "react-intersection-observer";
// motion 
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variant";
//link
import { Link } from 'react-scroll'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section className='section' ref={ref} id="about">
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">
        {/* img  */}
        <motion.div
        variants ={fadeIn("right", 0.3)}
        initial ={"hidden"}
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        
        className="flex-1 bg-about bg-contain bg-no-repeat h-[550px] 
      mix-blend-darken bg-top "></motion.div>
        {/* text  */}
        <motion.div
          variants ={fadeIn("left", 0.5)}
          initial ={"hidden"}
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
        className="text-white flex-1">
          <h2 className='h2 text-gradient'>About me</h2>
          <h3 className='h3 mb-4'>I'm a Freelance Graphic Designer and Video Editor with over 3 years of experience. </h3>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam, repellat asperiores vero, architecto commodi, officia facilis at minus hic voluptatum nam incidunt aliquid nihil tenetur nisi dicta officiis earum.
          </p>
          {/* stats  */}
          <div className="flex gap-x-6 lg:gap-x-10 mb-8 ">
            <div className="">
              <div className="text-[2.5rem] font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={3} duration={3} /> : null }
                
              </div>
              <div className="font-primary text-sm tracking-[2px]">Years Of <br />
                Experience
              </div>
            </div>
            <div className="">
              <div className="text-[2.5rem] font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={8} duration={3} /> : null }
                k+
              </div>
              <div className="font-primary text-sm tracking-[2px]">Projects <br />
                Completed
              </div>
            </div>
            <div className="">
              <div className="text-[2.5rem] font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={6} duration={3} /> : null }
                k+
              </div>
              <div className="font-primary text-sm tracking-[2px]">Satisfied <br />
                Clients
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 items-center">
          <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className=' flex items-center justify-center'>
            <button className='btn btn-lg'>Contact Me</button>
          
        </Link>
            

            <a href="#" className='text-gradient'>
              My Portfolio
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
};

export default About;
