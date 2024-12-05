import Link from "next/link";
import styles from "./Footer.module.css";
// Images and Icons
import LogoIcon from "@/src/assets/logo.svg";
import X from "@/src/assets/social/ic-twitter.svg";
import Pinterest from "@/src/assets/social/ic-pinterset.svg";
import Insta from "@/src/assets/social/ic-instagram.svg";
import Facebook from "@/src/assets/social/ic-facebook.svg";
import HomeIcon from "@/src/assets/home.svg";

const FooterGroup = ({ title, links }) => (
  <div className={styles.group}>
    <h2 className={styles.headTitle}>{title}</h2>
    <ul className={styles.ul}>
      {links?.map((item, index) => (
        <li key={index} className={styles.li}>
          <Link href={item.href} className={styles.link}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  const servicesData = [
    { label: "Apartment", href: "/Apartment" },
    { label: "Warehouse", href: "/Warehouse" },
    { label: "Housing", href: "/Housing" },
    { label: "Villa", href: "/Villa" },
    { label: "CoWorking", href: "/CoWorking" },
  ];
  const companyData = [
    { label: "Partnership", href: "/Partnership" },
    { label: "Terms of Use", href: "/Terms of Use" },
    { label: "About", href: "/About" },
    { label: "Sitemap", href: "/Sitemap" },
    { label: "contact", href: "/contact" },
  ];
  const informationData = [
    { label: "Become a member", href: "/BecomeMember" },
    { label: "Get the App", href: "/GetTheApp" },
    { label: "Rule Sign Up", href: "/RuleSignUp" },
    { label: "Newsletter", href: "/Newsletter" },
  ];

  return (
    <footer className={[styles.footer].join(" ")}>
      <div className={styles.innerFooter}>
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <FooterGroup title="Company" links={servicesData} />
            <FooterGroup title="Communities" links={companyData} />
            <FooterGroup title="Useful Links" links={informationData} />
          </div>
          <div className={styles.footerRight}>
            <div className={styles.logoCol}>
              <Link href="/" className={styles.logo}>
                <LogoIcon />
              </Link>
            </div>
            <p className={styles.description}>
              Stay connected with us and let's know more stories about housing &
              real estate and more explorer us
            </p>
            <div className={styles.allIcons}>
              <Link href="/" data-social="Facebook" className={styles.oneIcon}>
                <Facebook />
              </Link>
              <Link href="/" data-social="X" className={styles.oneIcon}>
                <X />
              </Link>
              <Link href="/" data-social="Instagram" className={styles.oneIcon}>
                <Insta />
              </Link>
              <Link href="/" data-social="Pinterest" className={styles.oneIcon}>
                <Pinterest />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.innerFooter}>
          <div className={styles.logoBottom}>
            <div>
              <HomeIcon />
            </div>
            LOGO HERE
          </div>
          <p className={styles.rights}>© 2024 Numah | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
