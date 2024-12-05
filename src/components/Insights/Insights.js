import Image from "next/image";
import Link from "next/link";
import styles from "./Insights.module.css";
import img1 from "../../assets/Image.png";
import img2 from "../../assets/Image (1).png";
import img3 from "../../assets/Image (3).png";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const arrData = [
  {
    id: 1,
    image: img1,
    title: "Finding your perfect home design",
    description: "Exploring The Top Architectural Styles of luxury",
  },
  {
    id: 2,
    image: img2,
    title: "The Best Locations To Live in UAE",
    description: "Explore the UAE with star agent sally bowles",
  },
  {
    id: 3,
    image: img3,
    title: "Top Features of Modern Properties",
    description: "Discover what to look for in your dream home",
  },
  {
    id: 4,
    image: img1,
    title: "Finding your perfect home design",
    description: "Exploring The Top Architectural Styles of luxury",
  },
  {
    id: 5,
    image: img2,
    title: "The Best Locations To Live in UAE",
    description: "Explore the UAE with star agent sally bowles",
  },
  {
    id: 6,
    image: img3,
    title: "Top Features of Modern Properties",
    description: "Discover what to look for in your dream home",
  },
];
const Insights = () => {
  return (
    <section className={styles.insights}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.headTitle}>Explore Properties By Map</h2>
          <p className={styles.headDescription}>
            Find the perfect spot in your perfect place using our Aqar Market
            map, showing you all of our most popular listings, top picks, and
            hidden gems.
          </p>
        </div>
        {/* <div className={styles.cards}>
          {arrData?.map((item) => (
            <div key={item.id} className={styles.oneCard}>
              <Image src={item.image} alt="img1" className={styles.img} />
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <Link href="/" className={styles.link}>
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div> */}
        <div className={styles.divSwiper}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              420: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              820: {
                slidesPerView: 2.7,
              },
              992: {
                slidesPerView: 2.8,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3.5,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
          >
            {arrData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div key={item.id} className={styles.oneCard}>
                  <Image src={item.image} alt="img1" className={styles.img} />
                  <div className={styles.content}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                    <Link href="/" className={styles.link}>
                      Read Article
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.seeMoreDiv}>
          <p className={styles.seeMoreText}>
            Don't miss out, browse our articles now and find out the latest in
            real estate!
          </p>
          <Link href="/" className={styles.seeMoreBtn}>
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
