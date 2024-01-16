import Image from "next/image";
import React from "react";
import BgCards from "../bgCards/BgCards";

function Occation() {
  const cardsData = [
    {
      number: "$3.5B",
      title: "Projected market reach by 2025",
    },
    {
      number: "25%",
      title: "Projected growth rate",
    },
    {
      number: "$1.4B+",
      title: "Investments in 2023 alone",
    },
  ];

  return (
    <div>
      <div className="relative h-full w-full flex justify-start px-10 md:mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          WHY BENGALURU
        </h1>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-fill-transparent"></div>
      </div>

      <div className="md:flex flex-row w-full h-auto py-10 md:py-0">
        {cardsData.map((card, index) => (
          <BgCards data={card} index={index} />
        ))}
        <div className="relative flex flex-col md:w-1/4 w-full md:h-[50vh] h-auto justify-center items-center p-5 md:mt-[-8rem]">
        <h1 className="absolute left-3 md:mt-[-9rem] text-9xl md:m-[-1rem] font-bold text-slate-200 z-10">
          $1 B
        </h1>
        <p className="font-bold text-1xl text-slate-300 absolute w-[50%] z-10 mt-10 bg-black ml-7">
            Bengaluru's EdTech markets estimated worth currently
        </p>
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <video
              loop
              autoPlay
              muted
              className="transform rotate-90 h-full w-full object-contain"
              src="/videos/cards_bg.mp4/"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Occation;