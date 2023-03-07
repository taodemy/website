import { fontRobotoMono } from "@/pages/_app";
import styles from "@/styles/Header.module.css";
import NavBar from "@/components/general/Navbar/FirstPageNavbar";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNavBar = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    }
  }, [openNav]);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header_logo_link}>
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
      </Link>
      <NavBar openNav={openNav} handleNavBar={handleNavBar} />
    </header>
  );
};
export default Header;
