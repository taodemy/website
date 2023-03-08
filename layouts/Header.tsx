import { fontRobotoMono } from "@/pages/_app";
import styles from "@/styles/Header.module.css";
import NavBar from "@/components/general/Navbar/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavBarOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    {
      isOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "scroll");
    }
  }, [isOpen]);

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
      <NavBar isOpen={isOpen} handleNavBarOpen={handleNavBarOpen} />
    </header>
  );
};
export default Header;
