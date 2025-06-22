// * Importing modules.
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// * Importing components
import TestimonialCard from "./TestimonialCard";

// * Other imports
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TestimonialProps } from "../types/type";

const Slider = ({ testimonials }: TestimonialProps) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="flex justify-between items-center gap-8">
      {/* Swiper Previous Button */}
      <div
        className="text-white cursor-pointer p-6 bg-purple-600 rounded-full"
        onClick={() => swiperInstance.slidePrev()}
      >
        <ChevronLeft />
      </div>

      {/* Swiper Container */}
      <div className="lg:w-[60%] -z-1">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000 }} // 6sec delay
          speed={500}
          onSwiper={setSwiperInstance}
        >
          <div>
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard
                  name={item.name}
                  message={item.message}
                  company={item.company}
                  profile={item.profile}
                  className="mt-8"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {/* Swiper Next Button */}
      <div
        className="text-white cursor-pointer p-6 bg-purple-600 rounded-full"
        onClick={() => swiperInstance.slideNext()}
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default Slider;
