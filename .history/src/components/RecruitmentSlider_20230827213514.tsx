import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { cn } from "@/ultis";

const RecruitmentSlider = () => {
  return (
    <div className="relative -mb-20 shadow-md rounded-xl bg-white h-90 max-h-full">
      {/* top */}
      <div className="flex justify-between py-5 px-4">
        <h4 className="font-semibold text-xl">Recent Articles</h4>
        {/* navigation */}
        <div className="flex items-cener gap-x-3">
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-light-gray cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-light-gray cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        // navigation
        spaceBetween={5}
        slidesPerView={3}
        onSlideChange={() => console.log("slide chnage")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="h-full">
          <div className="px-5 py-5 flex flex-col gap-x-2 border-t border-r">
            <div className="h-50 flex-shrink-0 overflow-hidden">
              <span className="text-sm text-gray">January 15, 2023</span>
              <h5 className="font-semibold my-2 text-xl text-primary text-truncate-2">
                <a href="/">
                  The Art of Minimlism in Architecture, The Art of Minimlism in
                  Architecture, The Art of Minimlism in Architecture
                </a>
              </h5>
              <p className="text-xs text-truncate-7">
                Minilmosm is a design style that emerged in the 1960s as a
                reaction against the ormgate and ..., Minilmosm is a design
                style that emerged in the 1960s as a reaction against the
                ormgate and ..., Minilmosm is a design style that emerged in the
                1960s as a reaction against the ormgate and ..., Minilmosm is a
                design style that emerged in the 1960s as a reaction against the
                ormgate and ... Minilmosm is a design style that emerged in the
                1960s as a reaction against the ormgate and ..., Minilmosm is a
                design style that emerged in the 1960s as a reaction against the
                ormgate and ...
              </p>
            </div>
            <div className="mt-5 flex gap-x-2">
              <div className="text-xs rounded-full bg-light-gray w-fit py-1 px-2.5 font-semibold cursor-pointer">
                Design
              </div>
              <div className="text-xs rounded-full bg-light-gray w-fit py-1 px-2.5 font-semibold cursor-pointer">
                Aesthetics
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RecruitmentSlider;
