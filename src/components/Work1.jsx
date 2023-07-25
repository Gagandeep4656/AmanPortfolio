import React from 'react';
//motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variant";

// img

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const worker = [
    //     {
    //     id: 1,
    //     image: Img1,
    //     pretitle: "Graphic Design",
    //     title: 'Portfolio',

    // },
    {

        image: Img2,
        pretitle: "Video Editing",
        title: 'Montages',
    },
    {

        image: Img3,
        pretitle: "Graphic Design",
        title: 'Banners',

    },


];


const Work1 = () => {
    return <section className='section' id="work1">
        <div className="container mx-auto text-white">
            <div className="flex flex-col lg:flex-row gap-x-10">

                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flex-1 flex flex-col gap-y-12 mb-10">

                    {/* text  */}
                    <div className="">
                        <h2 className='text-gradient h2 leading-tight'>My Latest Work</h2>

                        <p>Lorem ipsum, dora sunt atque debitis, doloremque odit maiores repellat doloribus saepe placeat perspiciatis in deleniti magnam</p>

                      

                        <button className='btn btn-sm'>View all Projects</button>
                    </div>
                    <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
                        {/* overlay  */}

                        <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
                        {/* image  */}
                        <img src={Img1} alt="" className='group-hover:scale-125 tansition-all duration-500' />
                        {/* pretitle  */}
                        <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                            <span className='text-gradient'>Graphic Design</span>
                        </div>
                        {/* title  */}
                        <div className='absolute -bottom-full left-12 text-white group-hover:bottom-14 transition-all duration-700 z-50 '>
                            <span className='text-3xl'>Portfolio</span>
                        </div>

                    </div>

                </motion.div>
                <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex-1 flex flex-col gap-y-12">

                    {/* repetetive code destructure using map */}
                    {worker.map((work, index) => {
                        // destructure worker 
                        const { image, pretitle, title } = work;
                        return <div key={index} >
                            <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
                                {/* overlay  */}
                                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
                                {/* image  */}
                                <img src={image} alt="" className='group-hover:scale-125 tansition-all duration-500' />
                                {/* pretitle  */}
                                <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                                    <span className='text-gradient'>{pretitle}</span>
                                </div>
                                {/* title  */}
                                <div className='absolute -bottom-full left-12 text-white group-hover:bottom-14 transition-all duration-700 z-50 '>
                                    <span className='text-3xl'>{title}</span>
                                </div>
                            </div>

                        </div>
                    })}
                </motion.div>


            </div>
        </div>
    </section >
};

export default Work1;