import Image from "next/image";
import styles from "./Map.module.css";
import mapImg from "../../assets/map.png";
const Map = () => {
  return (
    <section className={styles.map}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.headTitle}>Insights From Experts</h2>
          <p className={styles.headDescription}>
            Stay up to date on the latest news and analysis in real estate! Aqar
            Market offers many articles and reports to help you with your
            property hunt.
          </p>
        </div>
        <div className={styles.imgDiv}>
          <Image src={mapImg} alt="map" className={styles.img} />
          <div className={styles.overlay} />
          <button className={styles.showBtn}>Show Map</button>
        </div>
      </div>
    </section>
  );
};

export default Map;
