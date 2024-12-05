import Link from "next/link";
import styles from "./Sidebar.module.css";
// Images and Icons
import LogoIcon from "@/src/assets/logo.svg";
import Closeicon from "@/src/assets/close.svg";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  return (
    <div className={`${styles.sidebar} ${showSidebar ? styles.active : ""}`}>
      <div className={styles.logo}>
        <button
          className={styles.closeBtn}
          aria-label="Close Sidebar"
          onClick={toggleSidebar}
        >
          <Closeicon fill="#9EACB9" width="14" height="14" />
        </button>
        <LogoIcon />
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Sidebar;
