import Image from "next/image";
import { useState } from "react";
import styles from "./Developer.module.css";
import ArrowRight from "../../../assets/arrowRight.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Developer = ({ data }) => {
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
      <div className={styles.bottomSection}>
        <div className={styles.leftBottom}>
          {data?.developer?.picture?.virtual_path && (
            <div className={styles.imgDiv}>
              <Image
                src={data?.developer?.picture?.virtual_path}
                alt="developer"
                width={200}
                height={200}
                className={styles.img}
              />
            </div>
          )}
          <h3 className={styles.title}>{data?.developer?.name_en}</h3>
          <p className={styles.description}>
            Spread over four levels, this luxury apartment features a two-level
            rooftop terrace with a private lap pool. Vast in size and inviting
            in style, the chic and modern design. Spread over four levels.
          </p>
          <button className={styles.seeMoreBtn}>See More</button>
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
            <div className={styles.inputDiv}>
              <input placeholder="How can we help?" type="text" />
            </div>
            <button className={styles.submitBtn} type="submit">
              Submit Enquiry <ArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Developer;
