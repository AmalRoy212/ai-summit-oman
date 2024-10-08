"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

function End() {
  return (
    <div className="relative md:overflow-hidden h-screen">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(60%)" }}
        >
          <source src="/videos/endObe.mp4" type="video/webm" />
        </video>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-24 text-white">
        {/* <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          className="text-[40px] font-medium text-center text-gray-200"
        >
          WORKSHOPS AT
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            GLOBAL FUTURE EDUCATION SUMMIT{" "}
          </span>
        </motion.div> */}
        <motion.p
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          className="text-base font-medium text-center text-gray-200 px-3 md:px-20 py-3 md:py-10 m-5 rounded-3xl"
          style={{ backgroundColor: "rgba(3, 0, 20, 0.674)" }}
        >
          We firmly believe that the leaders actively involved in reshaping the
          technology landscape represent the true pillars of our society. At the
          Intelligent AI, Data, and Automation Summit, we endeavour to unite
          them under one roof, fostering a deep understanding of the innovations
          and transformations capable of simplifying and enhancing the
          transmission of technology, which will, in turn, encompass strategies
          to tackle significant challenges. This summit will serve as a platform
          for world-class innovation, shedding light on effective strategies
          poised to fuel the digital economy of both the current and future
          centuries. It will attract the most dynamic leaders from the
          technology sector, offering fresh insights and perspectives aimed at
          empowering, inspiring, and enriching the global tech community.
        </motion.p>
        <button className="cursor-pointer  w-auto px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
          Register now
        </button>
      </div>
    </div>
    // <div className='w-full h-[140vh] mt-[-10rem] md:mt-0 overflow-hidden flex justify-center items-center'>
    //     <div className="flex flex-row relative items-center justify-center min-h-screen w-full md:h-[70vh] h-[135vh]">
    //         <div className="absolute w-auto h-auto top-0 z-[19]">
    //             <motion.div
    //                 variants={slideInFromTop}
    //                 initial="hidden"
    //                 whileInView="visible"
    //                 className="text-[40px] font-medium text-center text-gray-200"
    //             >
    //                 WORKSHOPS AT
    //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    //                     {" "}
    //                     GLOBAL FUTURE EDUCATION SUMMIT {" "}
    //                 </span>
    //             </motion.div>
    //         </div>

    //         <div className='w-full h-full flex justify-center items-center'>
    //             <div style={{ backgroundColor: "rgba(3, 0, 20, 0.674)" }} className='md:w-[70%] w-full h-[75%] rounded-xl absolute top-[11rem] flex-col justify-center items-center md:px-[50px] z-[9]'>
    //                 <p className='text-[14px] md:px-[5rem] text-slate-400 px-5  mt-[2rem] md:p-10 text-justify'>
    //                     Live interactive workshops organized by Genifinty Global will be held at Global Future Education Summit. The objective is to empower educators on various advancements in the education and training sector. It is a series of professional development workshops for educators in Bengaluru. Power-packed sessions are conducted over 2 days. The workshops are attended by teachers, trainers, senior management, academicians and professors of education institutions from all across the country.

    //                     Global Future Education Summit Workshops allow teachers, trainers and faculty members to explore multiple facets of:

    //                     Implementation and impact of technological advancements, Curriculum changes, Inclusive environments. Sports integration and Other breakthroughs, both internationally and nationally.

    //                     Conducted by prominent companies, the workshops train educators in:

    //                     Enhancing Teaching and Learning, Exploring aspects in using and implementing of technological advancements, Meeting Faculty development and technology needs, Formulating and discussing new initiatives.
    //                 </p>

    //             </div>
    //         </div>
    //         <button className='w-[120px] absolute md:bottom-0  bottom-[23rem] z-[20] h-[35px] cursor-pointer shadow-md shadow-[#7042f861]/50 text-white rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-800 to-transparent mt-4 text-[16px] hover:from-transparent hover:to-purple-800'>
    //                     Register now
    //                 </button>

    //         <div className="w-full h-[100vh] items-start justify-center top-[8rem] absolute hidden md:flex ">
    //             <video
    //                 loop
    //                 muted
    //                 autoPlay
    //                 playsInline
    //                 preload="false"
    //                 className="w-full h-auto object-cover"
    //                 src="/videos/endObe.mp4/"
    //                 data-aos="fade-up" data-aos-duration={200}
    //             />
    //         </div>
    //     </div>
    // </div>
  );
}

export default End;
