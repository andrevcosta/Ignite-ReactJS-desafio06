import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SliderItem } from './SliderItem';

export function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide>
        <SliderItem
          backgroundImage="url('/images/NorthAmerica/northamerica-slider.jpg')"
          heading="América do Norte"
          text="O novo mundo."
          href="/north-america"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          backgroundImage="url('/images/SouthAmerica/southamerica-slider.jpg')"
          heading="América do Sul"
          text="Lar da floresta amazônica."
          href="/south-america"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          backgroundImage="url('/images/Asia/asia-slider.jpg')"
          heading="Ásia"
          text="O maior dos continentes."
          href="/asia"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          backgroundImage="url('/images/Africa/africa-slider.jpg')"
          heading="África"
          text="O continente mãe."
          href="/africa"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          backgroundImage="url('/images/Europe/europe-slider.png')"
          heading="Europa"
          text="O continente mais antigo."
          href="/europe"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          backgroundImage="url('/images/Oceania/oceania-slider.jpg')"
          heading="Oceania"
          text="O Novíssimo Mundo."
          href="/oceania"
        />
      </SwiperSlide>
    </Swiper>
  );
}
