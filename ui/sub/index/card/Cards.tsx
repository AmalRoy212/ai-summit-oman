
"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/viewMotions";
import './cards.css'

interface Props {
  src: string;
  title: string;
  description: string;
  index : number;
}

const Cards = ({ src, title, description, index }: Props) => {
  return (
    <motion.div 
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full the-card"
      style={{ background: `url(${src})`, backgroundSize: 'cover' }}
    >
      <div style={{ width: "100%", height: "200px", overflow:"hidden" }}>
        <Image
          src={src}
          alt={title}
          // layout="fill"
          // objectFit="cover"
          // objectPosition="center"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>

      <div className="relative p-4 bg-gray-800 bg-opacity-90 backdrop-blur-md h-full w-full">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-gray-100 text-[14px] ">{description}</p>
      </div>
    </motion.div>
  );
};

export default Cards;
