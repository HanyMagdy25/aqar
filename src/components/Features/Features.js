"use client";
import Image from "next/image";
import styles from "./Features.module.css";
import img1 from "../../assets/featues/Apartment.svg";
import img2 from "../../assets/featues/Asset 1 2.svg";
import img3 from "../../assets/featues/group-users 1.svg";
import img4 from "../../assets/featues/Group.svg";
import img5 from "../../assets/featues/support 1.svg";
import img6 from "../../assets/featues/Vector.svg";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const arrData = [
  {
    id: 1,
    image: img1,
    title: "For Rent",
  },
  {
    id: 2,
    image: img2,
    title: "Commercial",
  },
  {
    id: 3,
    image: img3,
    title: "Communities",
  },
  {
    id: 4,
    image: img4,
    title: "For Sale",
  },
  {
    id: 5,
    image: img5,
    title: "Off-Plan",
  },
  {
    id: 6,
    image: img6,
    title: "Locations",
  },
  {
    id: 7,
    image: img2,
    title: "Commercial",
  },
  {
    id: 8,
    image: img3,
    title: "Communities",
  },
  {
    id: 9,
    image: img4,
    title: "For Sale",
  },
];
const Features = () => {
  return (
    <section className={styles.features}>
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
                slidesPerView: 2,
              },
              410: {
                slidesPerView: 3,
              },

              576: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6.5,
              },
            }}
          >
            {arrData?.map((item, index) => {
              const Icon = item.image;
              return (
                <SwiperSlide key={index}>
                  <div key={item.id} className={styles.oneCard}>
                    <Icon />
                    <h4 className={styles.title}>{item.title}</h4>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Features;
