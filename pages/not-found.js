import Link from "next/link";
import styles from "@/styles/NotFound.module.css";
export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className={styles.description}>
          It might have been removed, or the link you followed may be incorrect.
        </p>
        <Link className={styles.homeButton} href="/">
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
}
