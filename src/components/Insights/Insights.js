import Image from "next/image";
import Link from "next/link";
import styles from "./Insights.module.css";
import img1 from "../../assets/Image.png";
import img2 from "../../assets/Image (1).png";
import img3 from "../../assets/Image (3).png";

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
];
const Insights = () => {
  return (
    <section className={styles.insights}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.headTitle}>Insights From Experts</h2>
          <p className={styles.headDescription}>
            Stay up to date on the latest news and analysis in real estate! Aqar
            Market offers many articles and reports to help you with your
            property hunt.
          </p>
        </div>
        <div className={styles.cards}>
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
