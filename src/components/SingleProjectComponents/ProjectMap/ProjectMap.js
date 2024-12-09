import styles from "./ProjectMap.module.css";
import Location from "../../../assets/location.svg";

const ProjectMap = ({ data }) => {
  const latitude = data?.address?.latitude;
  const longitude = data?.address?.longitude;
  const googleMapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;
  return (
    <section className={styles.projectMap}>
      <div className={styles.inner}>
        {latitude && longitude ? (
          <iframe
            className={styles.iframe}
            src={googleMapSrc}
            allowFullScreen
            loading="lazy"
          ></iframe>
        ) : (
          <p className={styles.error}>Location data is not available.</p>
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.location}>
          <span className="flex">
            <Location />
          </span>
          Example Road, Example Address, DAMAC Hills, Du...
        </p>
        <button className={styles.showBtn}>Show Map</button>
      </div>
    </section>
  );
};

export default ProjectMap;
