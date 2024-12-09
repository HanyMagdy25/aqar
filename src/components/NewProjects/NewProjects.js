"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./NewProjects.module.css";
import img1 from "../../assets/project (1).png";
import img2 from "../../assets/project (2).png";
import img3 from "../../assets/project (3).png";
import img4 from "../../assets/project (4).png";
import img5 from "../../assets/project (5).png";
import ShareIcon from "../../assets/Share.svg";
import ApartmentIcon from "../../assets/Apartment.svg";
import PenthousesIcon from "../../assets/PENTHOUSES.svg";
import DuplexIcon from "../../assets/DUPLEXES.svg";
import KeysIcon from "../../assets/keys.svg";
import PaymentIcon from "../../assets/payment.svg";
import AreaIcon from "../../assets/area.svg";
import EnquireIcon from "../../assets/enquire.svg";
import WhatsAppIcon from "../../assets/whats.svg";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const arrData = [
  {
    id: 1,
    image: img1,
    by: "SOBHA Realty",
    Location: "city, area",
    title: "Project Name 1",
    startingPrice: "AED 37,000,000",
    handover: "AUG 2023",
    PaymentPlan: "30:40:30",
    Area: "4k - 10k Sqft",
  },
  {
    id: 2,
    image: img2,
    by: "SOBHA Realty",
    Location: "city, area",
    title: "Project Name 2",
    startingPrice: "AED 37,000,000",
    handover: "AUG 2023",
    PaymentPlan: "30:40:30",
    Area: "4k - 10k Sqft",
  },
  {
    id: 3,
    image: img3,
    by: "SOBHA Realty",
    Location: "city, area",
    title: "Project Name 3",
    startingPrice: "AED 37,000,000",
    handover: "AUG 2023",
    PaymentPlan: "30:40:30",
    Area: "4k - 10k Sqft",
  },
  {
    id: 4,
    image: img4,
    by: "SOBHA Realty",
    Location: "city, area",
    title: "Project Name 4",
    startingPrice: "AED 37,000,000",
    handover: "AUG 2023",
    PaymentPlan: "30:40:30",
    Area: "4k - 10k Sqft",
  },
  {
    id: 5,
    image: img5,
    by: "SOBHA Realty",
    Location: "city, area",
    title: "Project Name 5",
    startingPrice: "AED 37,000,000",
    handover: "AUG 2023",
    PaymentPlan: "30:40:30",
    Area: "4k - 10k Sqft",
  },
];
const NewProjects = ({ data }) => {
  return (
    <section className={styles.insights}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.headTitle}>New Projects</h2>
          <p className={styles.headDescription}>
            We have a magnificent selection of upcoming and new projects that
            will open your eyes to the future potential. These properties make
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
              410: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },

              576: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2.8,
              },
              1200: {
                slidesPerView: 3.5,
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
                  <div className={styles.offPlan}>off-plan</div>
                  <div className={styles.share}>
                    <ShareIcon />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.top}>
                      <Link href={`/${item?.id}`} className={styles.title}>
                        {item?.name_en}
                      </Link>
                      <p className={styles.by}>
                        By{" "}
                        <span>
                          {item?.developer?.name_en
                            ? item?.developer?.name_en
                            : "Unknown"}
                        </span>
                      </p>
                      <p className={styles.location}>
                        Location:{" "}
                        {item?.address?.location_area ? (
                          <>
                            {[
                              item?.address?.location_area?.name,
                              item?.address?.location_area?.city?.name_en,
                              item?.address?.location_area?.city?.state_province
                                ?.name,
                              item?.address?.location_area?.city?.state_province
                                ?.country?.name,
                            ]
                              .filter(Boolean)
                              .join(", ")}
                          </>
                        ) : (
                          <>Unknown</>
                        )}
                      </p>
                    </div>
                    <div className={styles.middle}>
                      <span>
                        <ApartmentIcon />
                        Apartment
                      </span>
                      <span>
                        <PenthousesIcon />
                        Penthouses
                      </span>
                      <span>
                        <DuplexIcon />
                        Duplex
                      </span>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.left}>
                        <div className={styles.oneItem}>
                          <span>
                            <KeysIcon />
                          </span>
                          Starting Price:
                        </div>
                        <div className={styles.oneItem}>
                          <span>
                            <KeysIcon />
                          </span>
                          Handover:
                        </div>
                        <div className={styles.oneItem}>
                          <span>
                            <PaymentIcon />
                          </span>
                          Payment Plan:
                        </div>
                        <div className={styles.oneItem}>
                          <span>
                            <AreaIcon />
                          </span>
                          Area:
                        </div>
                      </div>
                      <div className={styles.right}>
                        <div className={styles.oneItemAns}>
                          <h4 className={styles.ans}>
                            {item?.starting_price
                              ? `From AED${" "} ${item?.starting_price}`
                              : "Unavailable"}
                          </h4>
                        </div>
                        <div className={styles.oneItemAns}>
                          <h4 className={styles.ans}>
                            {item?.handover_status_name
                              ? item?.handover_status_name
                              : "Unavailable"}
                          </h4>
                        </div>
                        <div className={styles.oneItemAns}>
                          <h4 className={styles.ans}>Unavailable</h4>
                        </div>
                        <div className={styles.oneItemAns}>
                          <h4 className={styles.ans}>
                            {item?.properties?.[0]?.size_sqft?.length > 0 ? (
                              <> {item?.properties?.[0]?.size_sqft} Sq.Ft</>
                            ) : (
                              <>Unknown</>
                            )}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className={styles.btns}>
                      <Link href="/" className={styles.link}>
                        <span>
                          <EnquireIcon />
                        </span>
                        Enquire now
                      </Link>
                      <Link href="/" className={styles.link}>
                        <span>
                          <WhatsAppIcon />
                        </span>
                        WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.seeMoreDiv}>
          <p className={styles.seeMoreText}>
            Don't miss out, browse all of our new projects now and see what your
            future could look like!
          </p>
          <Link href="/" className={styles.seeMoreBtn}>
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewProjects;
