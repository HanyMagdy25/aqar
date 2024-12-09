"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Properties.module.css";
import ShareIcon from "@/src/assets/Share.svg";
import BedroomIcon from "@/src/assets/bedroom.svg";
import BathroomsIcon from "@/src/assets/bathroom.svg";
import AreaIcon from "@/src/assets/area.svg";
import WhatsAppIcon from "@/src/assets/whatsapp.svg";
import PhoneIcon from "@/src/assets/phone.svg";
import EmailIcon from "@/src/assets/email.svg";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const Properties = ({ data }) => {
  const [projects, setProjects] = useState(data);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch more data
  const fetchMoreProjects = async () => {
    // const timeout = setTimeout(() => setIsLoading(false), 6000);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://aqar.api.mvp-apps.ae/api/mob_app/public/project/getProjectList?page=${
          page + 1
        }&limit=5`
      );
      // clearTimeout(timeout);
      const newData = await response.json();
      setProjects((prev) => [...prev, ...newData.data]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to load more projects:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className={styles.insights}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.headTitle}>Explore more</h2>
          <p className={styles.headDescription}>
            We have a magnificent selection of upcoming and new projects that
            will open your eyes to the future potential.
          </p>
        </div>

        <div className={styles.divSwiper}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            className="swiperLoading"
            onReachEnd={() => {
              if (!isLoading) {
                fetchMoreProjects();
              }
            }}
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
            {projects?.map((item, index) => (
              <SwiperSlide key={index}>
                <div key={item.id} className={styles.oneCard}>
                  <Link href={`/${item?.id}`}>
                    <Image
                      src={item?.pictures?.[0]?.virtual_path}
                      alt={item?.name_en}
                      width={500}
                      height={500}
                      className={styles.img}
                    />
                  </Link>
                  {item?.property_type?.name_en && (
                    <div className={styles.offPlan}>
                      {item?.property_type?.name_en}
                    </div>
                  )}
                  <div className={styles.share}>
                    <ShareIcon />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.top}>
                      <Link href={`${item?.id}`} className={styles.title}>
                        {item.name_en}
                      </Link>
                      <p className={styles.location}>
                        Location:{" "}
                        {item?.address?.location_area ? (
                          <>
                            {item?.address?.location_area?.name
                              ? `${item?.address?.location_area?.name}, `
                              : ""}
                            {item?.address?.location_area?.city?.name_en
                              ? `${item?.address?.location_area?.city?.name_en}, `
                              : ""}
                            {item?.address?.location_area?.city?.state_province
                              ? `${item?.address?.location_area?.city?.state_province?.name}, `
                              : ""}
                            {item?.address?.location_area?.city?.state_province
                              ? `${item?.address?.location_area?.city?.state_province?.country?.name}`
                              : ""}
                          </>
                        ) : (
                          <>Unknown</>
                        )}
                      </p>

                      <h4 className={styles.price}>
                        {/* From AED{" "} */}
                        {item?.starting_price
                          ? `From AED${" "} ${item?.starting_price}`
                          : "Unavailable"}
                      </h4>
                    </div>
                    <div className={styles.middle}>
                      <span>
                        <AreaIcon />
                        {item?.properties?.[0]?.size_sqft?.length > 0 ? (
                          <> {item?.properties?.[0]?.size_sqft} Sq.Ft</>
                        ) : (
                          <>Unknown</>
                        )}
                      </span>
                      <span>
                        <BedroomIcon />
                        {item?.properties?.[0]?.count_bedrooms?.length > 0 ? (
                          <>
                            {item?.properties?.[0]?.count_bedrooms?.[0]}{" "}
                            bedrooms
                          </>
                        ) : (
                          <>Unknown</>
                        )}
                      </span>

                      <span>
                        <BathroomsIcon />
                        {item?.properties?.[0]?.count_bathrooms?.length > 0 ? (
                          <>
                            {item?.properties?.[0]?.count_bathrooms?.[0]}{" "}
                            bathrooms
                          </>
                        ) : (
                          <>Unknown</>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.agent}>
                      {/* {console.log(
                        "11",
                        item?.properties?.[0]?.agent?.profile_picture
                          ?.virtual_path
                      )} */}
                      <div className={styles.agentImgDiv}>
                        {item?.properties?.[0]?.agent?.profile_picture
                          ?.virtual_path && (
                          <Image
                            src={
                              item?.properties?.[0]?.agent?.profile_picture
                                ?.virtual_path
                            }
                            alt="Agent"
                            width={100}
                            height={100}
                            className={styles.agentImg}
                          />
                        )}
                      </div>
                      <div className={styles.agentInfo}>
                        <h5 className={styles.agentTitle}>Agent</h5>
                        <h6 className={styles.agentName}>
                          {item?.properties?.[0]?.agent?.user?.first_name
                            ? `${item?.properties?.[0]?.agent?.user?.first_name} 
                            ${item?.properties?.[0]?.agent?.user?.last_name}`
                            : "Unknown"}
                        </h6>
                      </div>
                    </div>
                    <div className={styles.agentContact}>
                      {!item?.properties?.[0]?.agent?.user?.phone_number ? (
                        <span
                          className={`${styles.oneContact} ${styles.disabled}`}
                        >
                          <PhoneIcon />
                        </span>
                      ) : (
                        <a
                          className={styles.oneContact}
                          target="_blank"
                          rel="noreferrer"
                          href={`tel:${item?.properties?.[0]?.agent?.user?.phone_number}`}
                        >
                          <PhoneIcon />
                        </a>
                      )}
                      {!item?.properties?.[0]?.agent?.user?.email ? (
                        <span
                          className={`${styles.oneContact} ${styles.disabled}`}
                        >
                          <EmailIcon />
                        </span>
                      ) : (
                        <a
                          className={styles.oneContact}
                          target="_blank"
                          rel="noreferrer"
                          href={`mailto:${item?.properties?.[0]?.agent?.user?.email}`}
                        >
                          <EmailIcon />
                        </a>
                      )}

                      {!item?.properties?.[0]?.agent?.user?.whatsapp_number ? (
                        <span
                          className={`${styles.oneContact} ${styles.disabled}`}
                        >
                          <WhatsAppIcon />
                        </span>
                      ) : (
                        <a
                          className={styles.oneContact}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://wa.me/${item?.properties?.[0]?.agent?.user?.whatsapp_number}`}
                        >
                          <WhatsAppIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {isLoading && (
              <SwiperSlide>
                <div className="loader">
                  {/* <p>Loading...</p> */}
                  <div className="spinner"></div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Properties;
