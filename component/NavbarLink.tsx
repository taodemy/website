import React from "react";
import { textFont, titleFont } from "@/pages/_app";

type NavbarLinkProps = {
  placeHolder?: string;
};

const Links = ({ placeHolder }: NavbarLinkProps) => {
  return <a className={`${textFont.className} text-meta`}>{placeHolder}</a>;
};
export default Links;
