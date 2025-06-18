import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface TestimonialProps {
  testimonials: Testimonial[];
}

const Slider = ({ testimonials }: TestimonialProps) => {
  const swiper = useSwiper();
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="-z-1">
      <div className="flex justify-between items-center cursor-pointer absolute w-full h-full">
        <button
          className="p-8 rounded-full bg-neutral-200 w-fit"
          onClick={() => swiperInstance.slidePrev()}
        >
          <span className="text-black">
            <ChevronLeft />
          </span>
        </button>
        <button
          className="p-8 rounded-full bg-neutral-200 w-fit"
          onClick={() => swiperInstance.slideNext()}
        >
          <span className="text-black">
            <ChevronRight />
          </span>
        </button>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={500}
        className="lg:w-[60%]"
        onSwiper={setSwiperInstance}
      >
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
      </Swiper>
    </div>
  );
};

export default Slider;
