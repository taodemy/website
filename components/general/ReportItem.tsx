import React from "react";
import styles from "@/styles/ReportItem.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";

type Icons = { [index: string]: string };

type ReportItemProps = {
  icons: Icons;
  icon: string;
  text: string;
};

const ReportItem = ({ icons, icon, text }: ReportItemProps) => {
  return (
    <section className={styles["report-item"]}>
      <img className={styles["report-icon"]} src={icons[icon]} alt={icon} />
      <h3 className={`${fontSyne.className} global__uppercase-heading-h3`}>{icon.toUpperCase()}</h3>
      <p className={`${fontSatoshi.className} global__text-default`}>{text}</p>
    </section>
  );
};

export default ReportItem;
