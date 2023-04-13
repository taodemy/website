import React from "react";
import { fontSyne, fontRobotoMono } from "@/pages/_app";
import Button from "../base/Button";
import styles from "@/styles/ServicesTitle.module.css";

export interface IServiceTitle {
  id: number;
  title: string;
  heading: string;
  button: IButton[];
}

export interface IButton {
  id: number;
  text: string;
}

function ServiceTitle({ button }: IServiceTitle) {
  return (
    <section className={styles.service_title}>
      <p className={`${fontRobotoMono.className} global__text-meta ${styles.service_title__name}`}>
        SERVICES
      </p>
      <h1
        className={`${fontSyne.className} global__heading--large ${styles.service_title__heading}`}
      >
        We create <br />
        true brands.
      </h1>
      <div className={styles.service_title__button_container}>
        {button.map((btn) => (
          <Button key={btn.id} variant="secondary" padding="small">
            {btn.text}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default ServiceTitle;
