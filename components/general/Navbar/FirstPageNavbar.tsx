import React from "react";
import styles from "@/styles/Header.module.css";
import NavbarLink from "@/components/general/Navbar/NavbarLink";
import PageButton from "@/components/general/Navbar/PageArrow";
import Button from "@/components/base/Button";
import { useState, useRef } from "react";

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

  const [showNav, setShowNav] = useState(false);

  const showNavBar = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  return (
    <section className={styles.header_navbar}>
      <div className={styles.header_navbar_menu}>
        {linkLists.map(({ id, linkName }) => (
          <NavbarLink key={id} linkName={linkName} link={`/${linkName.toLowerCase()}`} />
        ))}
        <PageButton />
      </div>
      <Button aria-label="let's_talk_button">LET&apos;S TALK</Button>
    </section>
  );
};
export default NavBar;
