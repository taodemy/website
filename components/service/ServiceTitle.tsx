import React from "react";
import { fontSyne, fontRobotoMono } from "@/pages/_app";
import Button from "../base/Button";
import styles from "./ServicesTitle.module.css";

function ServiceTitle() {
  return (
    <section className={styles.service_title}>
      <h1 className={`${fontRobotoMono.className} global__text-meta ${styles.service_title__name}`}>
        SERVICES
      </h1>
      <div
        className={`${fontSyne.className} global__heading--large ${styles.service_title__heading}`}
      >
        We create <br />
        true brands.
      </div>
      <div className={styles.service_title__button}>
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
