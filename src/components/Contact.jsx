import React from 'react';
// motion 
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variant";

const Contact = () => {
  return <section className=' lg:section py-16' id="contact">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* text  */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        className="flex-1">
          <h4 className='h4 text-xl uppercase text-gradient font-medium mb-2 tracking-wide'>Get in touch</h4>
          <h2 className='h2 text-2xl lg:text-6xl font-secondary leading-none mb-12'>Let's Work <br />together!</h2>
        </motion.div>
        {/* form  */}
        <motion.form
          variants={fadeIn("left", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ' placeholder="Your name" type="text" />
          
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ' placeholder="Your email" type="text" />

          <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'placeholder="Your message"></textarea>

          <button className='btn btn-lg'>Send message</button>
        </motion.form>
      </div>
      
    </div>
  </section>
 
  
};

export default Contact;
