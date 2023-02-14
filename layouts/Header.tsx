import { titleFont } from "@/pages/_app";
import styles from "@/styles/Header.module.css";
import NavBar from "@/components/Navbar/FirstPageNavbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <section className={styles.header_logo}>
        <img
          arial-label="header_logo_image"
          className={styles.header_logo_image}
          src="/images/Icon.png"
          alt="Website Icon"
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
