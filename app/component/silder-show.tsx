"use client";

import EmblaCarousel from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  "/image/Apex Legends Products.webp",
  "/image/BF2042 Products.webp",
  "/image/Call Of Duty Products.webp",
  "/image/EFT Products.webp",
  "/image/Fortnite Products.webp",
  "/image/Hwid Spoofer Products.webp",
];
const SliderShow = () => {
  return (
    <div className=" text-center  items-center justify-around ">
      <h1 className="text-4xl font-semibold py-8">
        Unlock Insane Aimbot & ESP Cheats at Fateshop.net
      </h1>
      <p className="pb-6 text-2xl font-semibold">
        Get the Ultimate Edge with our Cheats - Play Smarter, Not Harder!
      </p>
      <div className="py-20">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      

    </div>
  );
};

export default SliderShow;
