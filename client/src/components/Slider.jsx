import React, { useState, useEffect } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import SliderContent from "./SliderContent";
import { slideItems } from "./data";

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(slideItems.length - 1);
    }
    if (index > slideItems.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let sliderAuto = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(sliderAuto);
    };
  }, [index]);

  return (
    <div className="flex flex-row justify-between items-center w-full h-80 relative overflow-hidden bg-gray-50 py-5  mt-1 sm:mt-2">
      <button
        className="flex flex-row justify-center items-center h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full border bg-gray-50 cursor-pointer  opacity-90 absolute top-16 bottom-0 left-0 sm:top-0 sm:bottom-0 sm:left-0  m-auto z-50 "
        onClick={() => setIndex(index - 1)}
      >
        <ArrowLeftOutlined className="flex text-gray-500 z-50" />
      </button>
      <div className="flex flex-col justify-center items-start h-full bg-gray-50">
        {slideItems.map((item, itemIndex) => {
          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === slideItems.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <div
              className="absolute w-full h-full opacity-0 transition-all ease-in-out duration-2000"
              style={{
                opacity: position === "activeSlide" ? 1 : 0,
                transform:
                  position === "activeSlide"
                    ? "translateX(0)"
                    : position === "lastSlide"
                    ? "translateX(-100%)"
                    : "translateX(100%)",
              }}
              key={item.id}
            >
              <SliderContent item={item} key={item.id} />
            </div>
          );
        })}
      </div>
      <button
        className="flex flex-row justify-center items-center h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full border bg-gray-50 cursor-pointer  opacity-90 absolute top-16 bottom-0 right-0 sm:top-0 sm:bottom-0 sm:right-0 m-auto z-50"
        onClick={() => setIndex(index + 1)}
      >
        <ArrowRightOutlined className="text-gray-500 z-50" />
      </button>
    </div>
  );
};

export default Slider;
