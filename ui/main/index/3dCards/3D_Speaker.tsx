"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../sub/3d-cards/3D-card";

const positions = [2, 6, 9]

export function ThreeDCard({ item, index }: any) {
  return (
    <div className={`z-10`} key={index}>
      <CardContainer className="inter-var">
        <CardBody 
        // className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
        className="w-auto sm:w-[20rem] h-auto rounded-xl p-6 bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {item.name}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl">
              <Image
                src={item.image}
                height="1000"
                width="1000"
                className="h-60 w-60 object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
          </CardItem>
          <div className="min-h-[120px]">
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-lg max-w-sm mt-2 dark:text-white mx-auto"
            >
              {item.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-lg text-white max-w-sm mt-2 dark:text-white mx-auto"
            >
              {item.company}
            </CardItem>
          </div>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {item.organization}
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
