/* eslint-disable @next/next/no-img-element */
import { textFont, titleFont } from "@/pages/_app";
import styles from "@/styles/Header.module.css";
import NavBar from "@/component/NavBar";

const Header = () => {
  return (
    <div className={styles.page_border}>
      <div className={styles.header}>
        <section className={styles.header_logo}>
          <img
            className={styles.header_logo_image}
            src="/images/Icon.png"
            alt="Website Icon"
            aria-label="header_logo_image"
          />
          <div className={styles.header_logo_name}>
            <p className={`${titleFont.className} heading-h4-uppercase`}>TAOTECH</p>
          </div>
        </section>
        <NavBar />
      </div>
    </div>
  );
};
export default Header;
