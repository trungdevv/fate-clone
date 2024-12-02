"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  return (
    <div className="relative w-full">
      <div className="w-full" ref={emblaRef}>
        <div className="flex transition-transform duration-50 ease-in-out">
          {slides.map((index) => (
            <div className="relative flex-[0_0_70%] md:flex-[0_0_41%]" key={index}>
              <div className="flex items-center justify-center h-full mx-2">
                <Image
                  className="rounded-xl md:rounded-2xl hover:scale-105 duration-300 ease-in-out"
                  alt={index}
                  src={index}
                  width={600}
                  height={255}
                  style={{
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
