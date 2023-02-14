import React from "react";
import styles from "@/styles/Header.module.css";
import NavbarLink from "@/components/NavbarLink";
import PageButton from "@/components/PageButton";
import Button from "@/components/Button";

const NavBar = () => {
  const linkLists = [
    {
      id: 1,
      placeHolder: "WORK",
    },
    {
      id: 2,
      placeHolder: "SERVICES",
    },
    {
      id: 3,
      placeHolder: "STUDIO",
    },
    {
      id: 4,
      placeHolder: "BLOG",
    },
    {
      id: 5,
      placeHolder: "SHOP",
    }];

  return (
    <div className={styles.header_navbar}>
      {linkLists.map(({ id, placeHolder }) => (
        <NavbarLink key={id} placeHolder={placeHolder} />
      ))}
      <PageButton />
      <section className={styles.navbar_right_button}>
        <Button
          aria-label="navbar_right"
          buttonName="LET &apos; S TALK"
        />
      </section>
    </div>
  );
};
export default NavBar;
