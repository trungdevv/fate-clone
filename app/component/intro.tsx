"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/image/logo.webp";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="min-h-dvh text-center flex flex-col items-center justify-around border-b-4 border-cyan-500">
      <div>
        <Image src={logo} alt="Logo" width={"380"} className="lg:w-[480px]" />
        <h1 className="text-2xl text-gray-500 my-4">
          Buy Premium{" "}
          <TypeAnimation
            sequence={[
              "Call of Dusty",
              1500,
              "PUBG",
              1500,
              "Rust",
              1500,
              "Destiny 2",
              1500,
            ]}
            wrapper="span"
            speed={30}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          Hacks
        </h1>
        <div className="flex gap-2 justify-center">
          <Button
            asChild
            size={"lg"}
            className="transition-all px-10 uppercase font-semibold shadow-2xl py-6 duration-300 ease-in-out border-2 border-cyan-500  hover:shadow-[0_0_10px_rgb(0,159,207),_inset_0_0_2px_rgba(0,0,0,1)]"
          >
            <Link href={"/store"}>
              <ShoppingCart />
              Store
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
