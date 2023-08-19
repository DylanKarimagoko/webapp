import React, { useCallback, useRef } from "react";
import { projectList } from "../utils/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

const Flipper = ({ view }) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="sm:w-2/3 w-full h-1/2 sm:h-full overflow-y-auto sm:overflow-visible relative flex place-content-center place-items-center">
      <Swiper
        effect={"creative"}
        grabCursor={true}
        navigation={true}
        onSlideChange={(swiper) => view(swiper.activeIndex)}
        modules={[EffectCreative]}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -200],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        ref={sliderRef}
      >
        {projectList.map((value, index) => (
          <SwiperSlide
            key={index}
            className="bg-white flex place-content-center"
          >
            <div className="sm:h-screen w-full flex flex-wrap sm:flex-row h-full place-content-center place-items-center gap-2 ">
              {value.images.map((currvalue, currindex) => (
                <img
                  key={"image" + currindex}
                  src={currvalue}
                  alt="img"
                  className={
                    currindex % 2 === 0
                      ? "sm:h-[65%] h-[25vh]"
                      : "sm:h-3/4 h-[35vh]"
                  }
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full z-[99999] absolute flex  place-content-between top-[50%]">
        <div
          className="sm:w-10 bg-slate-300/50 rounded-full sm:h-10 w-7 h-7 cursor-pointer sm:ml-10 ml-3  shadow-2xl flex place-content-center place-items-center"
          onClick={handlePrev}
        >
          <img
            src={require("../assets/forward.jpg")}
            className="w-3 h-3"
            alt="back"
          />
        </div>
        <div
          className=" sm:w-10 bg-slate-300/50 rounded-full sm:h-10 w-7 h-7  cursor-pointer sm:mr-10 mr-3 shadow-2xl flex place-content-center place-items-center"
          onClick={handleNext}
        >
          <img
            src={require("../assets/forward.jpg")}
            className="w-3 h-3 rotate-180"
            alt="back"
          />
        </div>
      </div>
    </div>
  );
};

export default Flipper;
