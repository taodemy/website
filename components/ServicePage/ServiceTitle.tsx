import React from "react";
import { fontSyne, fontRobotoMono } from "@/pages/_app";
import Button from "../base/Button";
import styles from "./ServicesTitle.module.css";

type SreviceProps = {
  isPhoneSize: boolean;
};

function ServiceTitle({ isPhoneSize }: SreviceProps) {
  return (
    <section className={styles.service_title}>
      <p className={`${fontRobotoMono.className} global__text-meta ${styles.service_title__name}`}>
        SERVICES
      </p>
      <h1
        className={`${fontSyne.className} ${
          isPhoneSize ? "global__heading-h2" : "global__heading--large"
        } ${styles.service_title__heading} `}
      >
        We create <br />
        true brands.
      </h1>
      <div className={styles.service_title__button_container}>
        <Button variant="secondary" padding="small">
          BRANDING
        </Button>
        <Button variant="secondary" padding="small">
          DESIGN
        </Button>
        <Button variant="secondary" padding="small">
          VIDEO
        </Button>
        <Button variant="secondary" padding="small">
          CONTENT
        </Button>
      </div>
    </section>
  );
}

export default ServiceTitle;
