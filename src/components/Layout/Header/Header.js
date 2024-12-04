import Link from "next/link";
import styles from "./Header.module.css";
import BagIcon from "@/src/assets/bag.svg";
import UserIcon from "@/src/assets/user.svg";
import SearchIcon from "@/src/assets/search-normal.svg";
import ArrowLeft from "@/src/assets/arrow-left.svg";
import ArrowRight from "@/src/assets/arrow-right.svg";
import Menuicon from "@/src/assets/menu.svg";
import Logo from "@/src/assets/logo.svg";
const Header = ({ setShowSidebar }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.headerInner}`}>
          <button
            className={styles.menuBtn}
            type="button"
            onClick={() => setShowSidebar(true)}
            aria-label="menu"
          >
            <Menuicon fill="#FFD500" />
          </button>
          <div className={styles.LogoSmall}>
            <Logo />
          </div>

          <div className={styles.right}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href="/" className={styles.navLink}>
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className={styles.navLink}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className={styles.navLink}>
                    Communities
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className={styles.navLink}>
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={styles.navLink}>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              className={`${styles.menuBtn} ${styles.menuBtnMobile}`}
              type="button"
              onClick={() => setShowSidebar(true)}
              aria-label="menu"
            >
              <Menuicon fill="#FFD500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
