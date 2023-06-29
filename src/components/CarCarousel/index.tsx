import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import { Block } from "vcc-ui";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { Car } from "interfaces/Car";
import CarouselControl, { SliderStatus } from "./CarouselControl";
import CarouselItem from "./CarouselItem";

type CarCarouselProps = {
  cars: Car[];
};

function CarCarousel({ cars }: CarCarouselProps) {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();
  const [sliderStatus, setSliderStatus] = useState<SliderStatus>({
    isBeginning: true,
    isEnd: false,
  });

  useEffect(() => {
    if (!controlledSwiper) return;
    if (!cars.length) return;
    onSlideChange(controlledSwiper);
  }, [controlledSwiper, cars]);

  const onSlideChange = (swiper: SwiperClass) => {
    if (!swiper) return;
    const { isBeginning, isEnd } = swiper;
    setSliderStatus({ isBeginning, isEnd });
  };

  return (
    <Block
      as="section"
      extend={{
        padding: 1,
        marginTop: 16,
      }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={1.5}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          490: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
        pagination={{ enabled: true }}
        onSlideChange={onSlideChange}
        modules={[Pagination, Navigation]}
        onSwiper={setControlledSwiper}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarouselItem car={car}></CarouselItem>
          </SwiperSlide>
        ))}
      </Swiper>

      <CarouselControl
        controlledSwiper={controlledSwiper}
        sliderStatus={sliderStatus}
      />
    </Block>
  );
}

export default CarCarousel;
