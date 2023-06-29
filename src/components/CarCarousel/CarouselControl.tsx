import { Block, IconButton } from "vcc-ui";
import { SwiperClass } from "swiper/react";

export type SliderStatus = {
  isBeginning: boolean;
  isEnd: boolean;
};

type CarouselControlProps = {
  controlledSwiper?: SwiperClass;
  sliderStatus: SliderStatus;
};

function CarouselControl({
  controlledSwiper,
  sliderStatus,
}: CarouselControlProps) {
  const handlerSlideNext = () => {
    if (sliderStatus.isEnd) return;
    controlledSwiper?.slideNext();
  };

  const handlerSlidePrev = () => {
    if (sliderStatus.isBeginning) return;
    controlledSwiper?.slidePrev();
  };

  return (
    <Block
      extend={{
        marginTop: 16,
        display: "flex",
        justifyContent: "flex-end",
        gap: 12,
        onlyS: { display: "none" },
      }}
    >
      <Block>
        <IconButton
          iconName="navigation-chevronback"
          variant="outline"
          aria-label="Move Slider to previous car"
          aria-disabled={sliderStatus.isBeginning}
          onClick={handlerSlidePrev}
        />
      </Block>
      <Block>
        <IconButton
          iconName="navigation-chevronforward"
          variant="outline"
          aria-label="Move Slider to  next car"
          aria-disabled={sliderStatus.isEnd}
          onClick={handlerSlideNext}
        />
      </Block>
    </Block>
  );
}

export default CarouselControl;
