import React from "react";
import { textFont } from "@/pages/_app";
import styles from "@/styles/Header.module.css";

type ButtonProps = {
  buttonName?: string;
};

const Button = ({ buttonName }: ButtonProps) => {
  return (
    <>
      <button
        className={`${textFont.className} global__text-inverse ${styles.header_navbar_button}`}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Button;
