"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

interface SellixEmbedProps {
  productId?: string;
  groupId?: string;
  children: React.ReactNode;
}

const SellixEmbed: React.FC<SellixEmbedProps> = ({
  productId,
  groupId,
  children,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalCloseHandler = (event: MessageEvent) => {
      if (event.data === "close-embed") {
        setShowModal(false);
      }
    };

    window.addEventListener("message", modalCloseHandler);

    return () => {
      window.removeEventListener("message", modalCloseHandler);
    };
  }, []);

  const handleEmbedButtonClick = () => {
    setShowModal(true);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  let iframeUrl;

  if (productId) {
    iframeUrl = `https://embed.sellix.io/product/${productId}`;
  } else if (groupId) {
    iframeUrl = `https://embed.sellix.io/group/${groupId}`;
  }

  return (
    <>
      <Button size={"lg"} onClick={handleEmbedButtonClick} className="transition-all px-10 uppercase font-semibold shadow-2xl py-6 duration-300 ease-in-out border-2 border-cyan-500  hover:shadow-[0_0_10px_rgb(0,159,207),_inset_0_0_2px_rgba(0,0,0,1)]">{children}</Button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-[1000]">
          <div
            className="absolute inset-0 bg-black/50 z-[-1]"
            onClick={modalClose}
          ></div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="sellix-iframe-loader-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="https://cdn.sellix.io/static/embed/loader.png"
                  alt="Loader"
                  width={35}
                  height={35}
                />
              </div>
              <iframe
                src={iframeUrl}
                className="w-full h-full border-none"
                title="Sellix Embed"
                onLoad={() => {
                  const loader = document.querySelector(
                    ".sellix-iframe-loader-container"
                  );
                  if (loader) {
                    loader.remove();
                  }
                }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SellixEmbed;
