/* eslint-disable @next/next/no-img-element */
import { textFont, titleFont } from "@/pages/_app";
import styles from "@/styles/Header.module.css";
import NavBar from "@/components/NavBar/navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <section className={styles.header_logo}>
        <img
          className={styles.header_logo_image}
          src="/images/Icon.png"
          alt="Website Icon"
          aria-label="header_logo_image"
        />
        <div className={styles.header_logo_name}>
          <p className={`${titleFont.className} global__uppercase-heading-h4`}>TAOTECH</p>
        </div>
      </section>
      <NavBar />
    </div>
  );
};
export default Header;
