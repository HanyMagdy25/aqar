import Image from "next/image";
import styles from "./SecondBanner.module.css";
import img from "../../assets/SecondBanner.png";
import img1 from "../../assets/SecondBanner1.png";
import store1 from "../../assets/store (1).png";
import store2 from "../../assets/store (2).png";
import circle1 from "../../assets/circle (1).png";
import circle2 from "../../assets/circle (2).png";
import circle3 from "../../assets/circle (3).png";

const SecondBanner = () => {
  return (
    <section className={styles.secondBanner}>
      <div className={styles.inner}>
        <div className={styles.twoDivsParent}>
          <h2 className={styles.titleMobile}>APP COMING SOON!</h2>
          <div className={styles.twoDivs}>
            <div className={styles.right}>
              <div className={styles.content}>
                <h3 className={styles.title}>Download Our App!</h3>
                <p className={styles.description}>
                  Aqar Market will soon be available on Google Play and the App
                  Store! Keep an eye on our website for updates.
                </p>
              </div>
              <div className={styles.appStores}>
                <Image src={store1} alt="" className={styles.store} />
                <Image src={store2} alt="" className={styles.store} />
              </div>
            </div>
            <div className={styles.left}>
              <Image src={img} alt="" className={styles.img} />
              <Image src={img1} alt="" className={styles.imgMobile} />
              <div>
                <Image src={circle1} alt="" className={styles.circle1} />
              </div>
              <div>
                <Image src={circle2} alt="" className={styles.circle2} />
              </div>
              <div>
                <Image src={circle3} alt="" className={styles.circle3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
