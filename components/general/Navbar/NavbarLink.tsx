import React from "react";
import { fontRobotoMono } from "@/pages/_app";

type NavbarLinkProps = {
  linkName?: string;
  link?: string;
};

const Links = ({ linkName, link }: NavbarLinkProps) => {
  return (
    <a href={link} className={`${fontRobotoMono.className} global__text-meta`}>
      {linkName}
    </a>
  );
};
export default Links;
