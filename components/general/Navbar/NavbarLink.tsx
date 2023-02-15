import React from "react";
import { textFont } from "@/pages/_app";
import styles from "@/styles/Header.module.css";

type NavbarLinkProps = {
  linkName?: string;
  link?: string;
};

const Links = ({ linkName, link }: NavbarLinkProps) => {
  return (
    <a href={link} className={`${textFont.className} global__text-meta ${styles.header_navbar}`}>
      {linkName}
    </a>
  );
};
export default Links;
