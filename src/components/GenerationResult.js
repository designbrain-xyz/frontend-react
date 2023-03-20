import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "@/styles/Generation.module.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Generation() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://pro-dachnikov.com/uploads/posts/2023-01/1672813739_pro-dachnikov-com-p-krutoi-remont-v-kvartire-foto-4.jpg",
    "https://i.pinimg.com/originals/ce/93/4f/ce934f462cb1b0987e108ad3a747e4c2.jpg",
    "https://almode.ru/uploads/posts/2021-07/1625493259_21-almode_ru-p-dom-s-vidom-na-more-22.jpg",
    "https://centro-pol.ru/wp-content/uploads/2018/06/5-32.jpg",
    "https://stroy-podskazka.ru/images/article/orig/2017/12/haj-tek-sovremenyj-stil-novyh-tehnologij-v-interere-71.jpg"
  ]

  return (
    <div className={styles.content}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        <SwiperSlide className={styles.swiper_slide}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiper_slide_thumb }>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide_thumb }>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
