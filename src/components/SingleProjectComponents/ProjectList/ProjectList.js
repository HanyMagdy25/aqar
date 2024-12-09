"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectList.module.css";
import ShareIcon from "@/src/assets/Share.svg";
import BedroomIcon from "@/src/assets/bedroom.svg";
import BathroomsIcon from "@/src/assets/bathroom.svg";
import AreaIcon from "@/src/assets/area.svg";
import WhatsAppIcon from "@/src/assets/whatsapp.svg";
import PhoneIcon from "@/src/assets/phone.svg";
import LocationIcon from "../../../assets/location.svg";
import BedIcon from "../../../assets/singleProject/bed.svg";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProjectList = ({ data }) => {
  return (
    <section className={styles.insights}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.headTitle}>Explore Projects</h2>
          <p className={styles.headDescription}>
            We have a magnificent selection of upcoming and new projects that
            will open your eyes to the future's potential. These properties make
            tomorrow worth waiting for.
          </p>
        </div>

        <div className={styles.divSwiper}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1.5,
              },
              1200: {
                slidesPerView: 1.5,
              },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div key={item.id} className={styles.oneCard}>
                  <Image
                    src={item?.pictures?.[0]?.virtual_path}
                    alt={item?.name_en}
                    width={500}
                    height={500}
                    className={styles.img}
                  />
                  <div className={styles.overlay} />

                  <div className={styles.content}>
                    <div className={styles.top}>
                      <div className={styles.features}>
                        <div className={styles.oneFeature}>
                          Completion: Soon
                        </div>
                        <div className={styles.oneFeature}>Highrise</div>
                        <div className={styles.oneFeature}>Invest</div>
                      </div>
                      {item?.developer?.picture?.virtual_path && (
                        <div className={styles.developer}>
                          <Image
                            src={item?.developer?.picture?.virtual_path}
                            width={1000}
                            height={600}
                            alt="singleProject"
                            className={styles.developerImg}
                          />
                        </div>
                      )}
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.info}>
                        <Link href={`/${item?.id}`} className={styles.title}>
                          {item?.name_en}
                        </Link>
                        <p className={styles.location}>
                          <span className="flex">
                            <LocationIcon />
                          </span>
                          Example Road, Example Address, DAMAC Hills, Du...
                        </p>
                        <div className={styles.moreInfo}>
                          <div className={styles.bedRooms}>
                            <span className="flex">
                              <BedIcon />
                            </span>
                            1 - 5 bedrooms
                          </div>
                          <span className="flex">From AED 25,000,000</span>
                        </div>
                      </div>
                      <Link href="/" className={styles.enquire}>
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
