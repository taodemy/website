import React from "react";
import styles from "@/styles/Header.module.css";
import NavbarLink from "@/components/general/Navbar/NavbarLink";
import PageButton from "@/components/general/Navbar/PageArrow";
import Button from "@/components/base/Button";

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

  return (
    <section className={styles.header_navbar}>
      <section className={styles.header_navbar_link}>
        {linkLists.map(({ id, linkName }) => (
          <NavbarLink key={id} linkName={linkName} />
        ))}
        <PageButton />
      </section>
      <section className={styles.navbar_right_button}>
        <Button aria-label="let's_talk_button">LET&apos;S TALK</Button>
      </section>
    </section>
  );
};
export default NavBar;
