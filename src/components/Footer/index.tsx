import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://alphaolomi.com">
        <a rel="noopener noreferrer" target="_blank">
          Made with 💖 by Alpha Olomi
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
