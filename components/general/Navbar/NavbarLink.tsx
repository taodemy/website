import React from "react";
import { fontRobotoMono } from "@/pages/_app";
import styles from "@/styles/NavBarLink.module.css";

type NavbarLinkProps = {
  linkName?: string;
  link?: string;
};

const Links = ({ linkName, link }: NavbarLinkProps) => {
  return (
    <a
      href={link}
      className={`${fontRobotoMono.className} global__text-meta ${styles.nav_bar_link}`}
    >
      {linkName}
    </a>
  );
};
export default Links;
