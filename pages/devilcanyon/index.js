import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const devilcanyon = () => {


  return (
    <div className="scrollable-page bg-devil w-full h-full bg-local bg-cover bg-center">
      <h3 className="flex justify-center items-center text-4xl font-nomark mt-5">
        Devil&apos;s Canyon
      </h3>
      <div className="flex justify-center items-center m-5">
        <iframe
         src="https://open.spotify.com/embed/track/4Hs7FS8jNNReipDe6SDpwz?utm_source=generator"
          width="500px"
          height="80px"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

      <style jsx>{`
        .scrollable-page {
          overflow: auto;
          max-height: 100vh;
        }
      `}</style>

      <div className="flex item-center justify-center">
        <div className="grid grid-cols-2 grid-rows-3 gap-x-5 xl:gap-y-20 sm:gap-y-5 mt-2 px-3 mb-10">
        <div>
          <img
            src="../05. DEVIL_S CANYON/devil-canyon-1.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
              src="../05. DEVIL_S CANYON/devil-canyon-2.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
               src="../05. DEVIL_S CANYON/devil-canyon-3.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
               src="../05. DEVIL_S CANYON/devil-canyon-4.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
              src="../05. DEVIL_S CANYON/devil-canyon-5.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
             src="../05. DEVIL_S CANYON/devil-canyon-6.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default devilcanyon;
