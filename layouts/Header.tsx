import { fontRobotoMono } from "@/pages/_app";
import styles from "@/styles/Header.module.css";
import NavBar from "@/components/general/Navbar/FirstPageNavbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header_logo}>
        <img
          arial-label="header_logo_image"
          className={styles.header_logo_image}
          src="/images/logo.png"
          alt="Website Icon"
        />
        <div className={styles.header_logo_name}>
          <p className={`${fontRobotoMono.className} global__uppercase-heading-h4`}>TAOTECH</p>
        </div>
      </section>
      <NavBar />
    </header>
  );
};
export default Header;
