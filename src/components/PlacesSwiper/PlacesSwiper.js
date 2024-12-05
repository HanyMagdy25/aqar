"use client";
import Image from "next/image";
import styles from "./PlacesSwiper.module.css";
import img1 from "../../assets/places/place (1).jpg";
import img2 from "../../assets/places/place (2).jpg";
import img3 from "../../assets/places/place (3).jpg";
import img4 from "../../assets/places/place (4).jpg";
import img5 from "../../assets/places/place (1).jpg";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const arrData = [
  {
    id: 1,
    image: img1,
    title: "Dubai",
  },
  {
    id: 2,
    image: img2,
    title: "Abu Dhabi",
  },
  {
    id: 3,
    image: img3,
    title: "Sharjah",
  },
  {
    id: 4,
    image: img4,
    title: "Ajman",
  },
  {
    id: 5,
    image: img5,
    title: "Sharjah",
  },
  {
    id: 6,
    image: img1,
    title: "Dubai",
  },
  {
    id: 7,
    image: img2,
    title: "Abu Dhabi",
  },
  {
    id: 8,
    image: img3,
    title: "Sharjah",
  },
  {
    id: 9,
    image: img4,
    title: "Ajman",
  },
  {
    id: 10,
    image: img1,
    title: "Dubai",
  },
  {
    id: 11,
    image: img2,
    title: "Abu Dhabi",
  },
  {
    id: 12,
    image: img3,
    title: "Sharjah",
  },
  {
    id: 13,
    image: img4,
    title: "Ajman",
  },
];
const PlacesSwiper = () => {
  return (
    <section className={styles.placesSwiper}>
      <div className={styles.inner}>
        <div className="divSwiperScroll">
          <Swiper
            spaceBetween={14}
            slidesPerView={1}
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            modules={[Scrollbar]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              410: {
                slidesPerView: 3.5,
              },

              576: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5.2,
              },
            }}
          >
            {arrData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div key={item.id} className={styles.oneCard}>
                  <Image src={item.image} alt="img1" className={styles.img} />
                  <div className={styles.overlay} />
                  <h4 className={styles.title}>{item.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PlacesSwiper;
