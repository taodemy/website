import React from "react";
import { textFont } from "@/pages/_app";
import styles from "@/styles/Header.module.css";

type NavbarLinkProps = {
  placeHolder?: string;
  link?: string;
};

const Links = ({ placeHolder, link }: NavbarLinkProps) => {
  return <a href={link} className={`${textFont.className} global__text-meta ${styles.header_navbar}`}>{placeHolder}</a>;
};
export default Links;
