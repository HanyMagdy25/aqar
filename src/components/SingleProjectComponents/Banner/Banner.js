import Image from "next/image";
import { useState } from "react";
import styles from "./Banner.module.css";
import ArrowRight from "../../../assets/arrowRight.svg";
import Info1 from "../../../assets/singleProject/Group (1).svg";
import Info2 from "../../../assets/singleProject/Group 5.svg";
import Info3 from "../../../assets/singleProject/Group 515284.svg";
import Info4 from "../../../assets/singleProject/Group.svg";
import ShareIcon from "../../../assets/singleProject/share.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import Arrow1 from "../../../assets/singleProject/Vector 21.svg";
import Arrow2 from "../../../assets/singleProject/Vector 8.svg";
import HomeIcon from "../../../assets/singleProject/Vector.svg";
import FloorIcon from "../../../assets/singleProject/floor.svg";
import DownloadIcon from "../../../assets/singleProject/download.svg";
import GalleryIcon from "../../../assets/singleProject/gallery.svg";
const Banner = ({ data }) => {
  const [phone, setPhone] = useState("");
  const [showAll, setShowAll] = useState(false); // State to toggle visibility of all amenities

  // Toggle function for "See More" / "Show Less"
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Limit amenities displayed to 4 if showAll is false
  const displayedAmenities = showAll
    ? data?.amenities
    : data?.amenities?.slice(0, 4);

  return (
    <section className={styles.mainBanner}>
      <div className={styles.breadCrumb}>
        <Link href="/" className={styles.link}>
          <span className="flex">
            <Arrow2 />
          </span>
          Back to search
        </Link>
        <span>|</span>
        <Link href="/" className={styles.link}>
          <span className="flex">
            <HomeIcon />
          </span>
        </Link>
        <Link href="/" className={styles.link}>
          <span className="flex">
            <Arrow1 />
          </span>
          Dubai
        </Link>
        <Link href="/" className={styles.link}>
          <span className="flex">
            <Arrow1 />
          </span>
          Downtown
        </Link>
        <Link href="/" className={`${styles.link} ${styles.active}`}>
          <span className="flex">
            <Arrow1 />
          </span>
          The Building Name
        </Link>
      </div>
      <div className={styles.imgDiv}>
        <Image
          src={data?.pictures?.[0]?.virtual_path}
          alt=""
          className={styles.img}
          width={1800}
          height={800}
        />
        <div className={styles.share}>
          <ShareIcon />
        </div>
        <div className={styles.features}>
          <div className={styles.oneFeature}>
            <span className="flex">
              <GalleryIcon />
            </span>
            Photos
          </div>
          <div className={styles.oneFeature}>
            <span className="flex">
              <DownloadIcon />
            </span>
            Download Brochure
          </div>
          <div className={styles.oneFeature}>
            <span className="flex">
              <FloorIcon />
            </span>
            Floor Plans
          </div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <h2 className={styles.titleAbout}>The About</h2>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data?.description_en }}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h2 className={styles.title}>{data?.name_en}</h2>
            <p className={styles.location}>
              {[data?.city_name_en, data?.state_province_name, data?.country]
                .filter(Boolean)
                .join(", ")}
            </p>
            <div className={styles.info}>
              <div className={styles.oneInfo}>
                <span className={styles.spanIcon}>
                  <Info4 />
                </span>
                Handover: {data?.handover_status_name}
              </div>
              <div className={styles.oneInfo}>
                <span className={styles.spanIcon}>
                  <Info1 />
                </span>
                {data?.starting_size} - {data?.ending_size} SQ.FT
              </div>
              <div className={styles.oneInfo}>
                <span className={styles.spanIcon}>
                  <Info2 />
                </span>
                {data?.min_bed} - {data?.max_bed} bedrooms
              </div>
              <div className={styles.oneInfo}>
                <span className={styles.spanIcon}>
                  <Info3 />
                </span>
                From: AED {data?.starting_price}
              </div>
            </div>
            {data?.developer?.name_en ||
            data?.developer?.description_en ||
            data?.developer?.picture?.virtual_path ? (
              <div className={styles.developedBy}>
                <h4 className={styles.subHeadDeveloped}>Developed By</h4>
                <div className={styles.developerDiv}>
                  <div className={styles.developerImgDiv}>
                    {data?.developer?.picture?.virtual_path && (
                      <Image
                        src={data?.developer?.picture?.virtual_path}
                        className={styles.developerImg}
                        alt="developer"
                        width={80}
                        height={80}
                      />
                    )}
                  </div>
                  <div className={styles.developerInfo}>
                    <h4 className={styles.developerName}>
                      {data?.developer?.name_en}
                    </h4>
                    <p className={styles.developerDescription}>
                      {data?.developer?.description_en}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.leftBottom}>
          <h3 className={styles.anemitiesTitle}>Features & Amenities ...</h3>
          <div className={styles.anemities}>
            {displayedAmenities?.map((item, index) => (
              <div key={index} className={styles.oneAnemity}>
                <div className={styles.iconDiv}>
                  {item?.icon_picture?.virtual_path && (
                    <Image
                      src={item?.icon_picture?.virtual_path}
                      alt={item?.name_en}
                      width={35}
                      height={35}
                      className={styles.icon}
                    />
                  )}
                </div>
                <h3 className={styles.nameAnemity}> {item?.name_en}</h3>
              </div>
            ))}
          </div>
          {/* <button className={styles.seeMoreAnemities}>See More</button> */}

          {data?.amenities?.length > 4 && (
            <button className={styles.seeMoreAnemities} onClick={toggleShowAll}>
              {showAll ? "Show Less" : "See More"}
            </button>
          )}
        </div>
        <div className={styles.rightBottom}>
          <h5 className={styles.formDesc}>
            Fill in this form to express your interest, stay up to date on any
            developments and receive the latest offers!
          </h5>
          <form className={styles.form}>
            <div className={styles.inputDiv}>
              <input placeholder="Name*" type="text" />
            </div>
            <div className={styles.inputDiv}>
              <input placeholder="Email*" type="email" />
            </div>
            <div className={styles.inputDiv}>
              <PhoneInput
                country={"ae"} // Default country (UAE)
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass={styles.phoneInput}
                dropdownClass={styles.phoneDropdown}
                className={styles.input}
              />
            </div>
            <button className={styles.submitBtn} type="submit">
              Submit Enquiry <ArrowRight />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.smallBanner}>
        <div className={styles.smallBannerInner}>
          <Image
            src={data?.pictures?.[0]?.virtual_path}
            alt=""
            className={styles.img}
            width={1800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
