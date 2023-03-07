import React from "react";
import styles from "@/styles/Header.module.css";
import NavbarLink from "@/components/general/Navbar/NavbarLink";
import PageButton from "@/components/general/Navbar/PageArrow";
import Button from "@/components/base/Button";
import { useState, useEffect } from "react";

const NavBar = () => {
  const linkLists = [
    {
      id: 1,
      linkName: "WORK",
    },
    {
      id: 2,
      linkName: "SERVICES",
    },
    {
      id: 3,
      linkName: "STUDIO",
    },
    {
      id: 4,
      linkName: "BLOG",
    },
    {
      id: 5,
      linkName: "SHOP",
    },
  ];

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
    <section className={styles.header_navbar}>
      <nav className={openNav ? styles.header_responsive_navbar : styles.header_navbar_menu}>
        {linkLists.map(({ id, linkName }) => (
          <NavbarLink key={id} linkName={linkName} link={`/${linkName.toLowerCase()}`} />
        ))}
        <PageButton />
      </nav>
      <div className={styles.header_navbar_btn}>
        <Button aria-label="let's_talk_button">LET&apos;S TALK</Button>
      </div>
      <div
        className={`${styles.header_navbar_menu_icon} ${
          openNav ? styles.header_navbar_close_icon : null
        }`}
        onClick={handleNavBar}
        data-testid="nav-icon"
      >
        <div className={styles.header_navbar_menu_bar1}></div>
        <div className={styles.header_navbar_menu_bar2} data-testid="nav-bar2"></div>
        <div className={styles.header_navbar_menu_bar3}></div>
      </div>
    </section>
  );
};
export default NavBar;
