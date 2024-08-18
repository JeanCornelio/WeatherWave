import { Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
export const SwiperComponent = ({ children, dealay = 5500 }) => {
  return (
    <Swiper
      autoplay={{
        delay: dealay,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        370: {
          slidesPerView: 1,
          spaceBetween: 100,
        },

        470: {
          slidesPerView: 2,
          spaceBetween: 50,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 100,
        },
      }}
    >
      {children}
    </Swiper>
  );
};
