import React from "react";
import styles from "@/styles/Header.module.css";
import NavbarLink from "@/components/general/Navbar/NavbarLink";
import PageButton from "@/components/general/Navbar/PageArrow";
import Button from "@/components/base/Button";

interface NavBarProps {
  isOpen: boolean;
  handleNavBarOpen: () => void;
}

const NavBar = ({ isOpen, handleNavBarOpen }: NavBarProps) => {
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

  return (
    <section className={styles.header_navbar}>
      <nav className={isOpen ? styles.header_navbar_menu_responsive : styles.header_navbar_menu}>
        {linkLists.map(({ id, linkName }) => (
          <NavbarLink key={id} linkName={linkName} link={`/${linkName.toLowerCase()}`} />
        ))}
        <PageButton />
      </nav>
      <div className={styles.header_navbar_btn}>
        <Button aria-label="let's_talk_button">LET&apos;S TALK</Button>
      </div>
      <button
        className={`${styles.header_navbar_hamburger_icon} ${
          isOpen ? styles.header_navbar_times_icon : null
        }`}
        onClick={handleNavBarOpen}
        data-testid="nav-icon"
      >
        <div className={styles.header_navbar_hamburger_icon_bar1} />
        <div className={styles.header_navbar_hamburger_icon_bar2} />
        <div className={styles.header_navbar_hamburger_icon_bar3} />
      </button>
    </section>
  );
};
export default NavBar;
