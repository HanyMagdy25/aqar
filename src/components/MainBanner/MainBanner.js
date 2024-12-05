import styles from "./MainBanner.module.css";
import SearchIcon from "../../assets/MagnifyingGlass.svg";
import ArrowDownIcon from "../../assets/arrow-down.svg";
import { useState } from "react";

const MainBanner = () => {
  const [activeTab, setActiveTab] = useState("Buy"); // Default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update the active tab state
  };
  return (
    <section className={styles.mainBanner}>
      <div className={styles.videoDiv}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source type="video/mp4" src="/aqar-video.mp4"></source>
        </video>
      </div>
      <div className={styles.overlay} />
      <div className={styles.homeFilter}>
        <div className={styles.textDiv}>
          <h2>Discover a wide selection of home</h2>
          <h2>listings in the UAE with Aqarmarket.</h2>
        </div>
        <div className={styles.tabs}>
          <button
            className={activeTab === "Buy" ? styles.active : ""}
            onClick={() => handleTabClick("Buy")}
          >
            Buy
          </button>
          <button
            className={activeTab === "Rent" ? styles.active : ""}
            onClick={() => handleTabClick("Rent")}
          >
            Rent
          </button>
          <button
            className={activeTab === "Projects" ? styles.active : ""}
            onClick={() => handleTabClick("Projects")}
          >
            Projects
          </button>
        </div>

        <div className={styles.filterInner}>
          <div className={styles.filtersDigits}>
            <div className={styles.oneDigit}>
              <label>Location</label>
              <input type="text" placeholder="City, Comunity or Project" />
            </div>
          </div>
          <div className={styles.filtersDigits}>
            <div className={styles.oneDigit}>
              <label>Type</label>
              <select>
                <option>Apartment</option>
                <option>House</option>
                <option>Land</option>
              </select>
            </div>
            <div className={styles.arrowIcon}>
              <ArrowDownIcon />
            </div>
          </div>
          <div className={styles.filtersDigits}>
            <div className={styles.oneDigit}>
              <label>Price</label>
              <select>
                <option>$15000 - $20000</option>
                <option>$25000 - $30000</option>
                <option>$35000 - $40000</option>
              </select>
            </div>
            <div className={styles.arrowIcon}>
              <ArrowDownIcon />
            </div>
          </div>
          <div className={styles.filtersDigits}>
            <div className={styles.oneDigit}>
              <label>Beds & Baths</label>
              <select>
                <option>Beds 2 - Baths 3</option>
                <option>Beds 3 - Baths 4</option>
                <option>Beds 4 - Baths 5</option>
              </select>
            </div>
            <div className={styles.arrowIcon}>
              <ArrowDownIcon />
            </div>
          </div>
          <button className={styles.filterBtn}>
            <SearchIcon />
          </button>
        </div>
        <div className={styles.filterSearchMobile}>
          <input type="text" placeholder="City, community or building" />
          <button className={styles.filterBtn}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
