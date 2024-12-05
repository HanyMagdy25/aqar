import Link from "next/link";
import styles from "./Header.module.css";
import Menuicon from "@/src/assets/menu.svg";
import Logo from "@/src/assets/logo.svg";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
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
            <Menuicon fill="#35b5b4" />
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
              <Menuicon fill="#35b5b4" />
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`${styles.overlay} ${showSidebar ? styles.active : ""}`}
      />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </header>
  );
};

export default Header;
