import React from "react";
import styles from "@/styles/Header.module.css";
import NavbarLink from "@/components/general/Navbar/NavbarLink";

const NavbarPage = () => {
  return (
    <div className={styles.header_navbar_page}>
      <NavbarLink linkName="PAGE" />
      <img
        arial-label="header_navbar_page_icon"
        className={styles.header_navbar_page_icon}
        src="/images/arrow.png"
        alt="Page Arrow"
      />
    </div>
  );
};
export default NavbarPage;
