import { Swiper } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
export const SwiperComponent = ({ spaceBetween = 50, slidesPerView = 3, children, dealay = 2500 }) => {
  return (
        <Swiper

          autoplay={{
            delay: dealay,
            disableOnInteraction: false
          }}
     /*      onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)} */
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
        >
        {children}
        </Swiper>
  )
}
