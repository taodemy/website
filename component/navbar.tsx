/* eslint-disable @next/next/no-img-element */
import React from "react";
import { textFont } from "@/pages/_app";
import styles from "@/styles/Header.module.css";
import NavLink from "@/component/NavbarLink";

const NavBar = () => {
  return (
    <div className={styles.header_navbar}>
      <NavLink placeHolder="WORK" />
      <NavLink placeHolder="SERVICES" />
      <NavLink placeHolder="STUDIO" />
      <NavLink placeHolder="BLOG" />
      <NavLink placeHolder="SHOP" />

      <div className={styles.header_navbar_page}>
        <NavLink placeHolder="PAGES" />
        <img
          className={styles.header_navbar_page_icon}
          src="/images/arrow.png"
          aria-label="header_navbar_page_icon"
          alt="Page Arrow"
        />
      </div>

      <div className={styles.navbar_right}>
        <button
          aria-label="navbar_right"
          className={`${textFont.className} text-inverse ${styles.header_navbar_button}`}
        >
          LET`S TALK
        </button>
      </div>
    </div>
  );
};
export default NavBar;
