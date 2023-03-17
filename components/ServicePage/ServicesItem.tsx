import styles from "@/styles/ServicesItem.module.css";
import Button from "../base/Button";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";

type serviceItemProps = {
  service_name?: string;
  icon__arial_label?: string;
  icon_path?: string;
  icon_alt?: string;
  service_heading?: string;
  service_info1?: string;
  service_info2?: string;
  image__arial_label?: string;
  image_path?: string;
  image_alt?: string;
  link1?: string;
  link2?: string;
  link3?: string;
};

const ServiceItem = ({
  link1,
  link2,
  link3,
  icon__arial_label,
  icon_alt,
  icon_path,
  image__arial_label,
  image_alt,
  image_path,
  service_heading,
  service_info1,
  service_info2,
  service_name,
}: serviceItemProps) => {
  return (
    <section className={styles.service}>
      <div className={styles.service_item__left}>
        <img
          arial-label={icon__arial_label}
          className={styles.service_left_logo}
          src={icon_path}
          alt={icon_alt}
        />
        <h2 className={`${fontSyne.className} global__uppercase-heading-h2`}>{service_name}</h2>

        <div>
          <li
            className={`${fontRobotoMono.className} global__text-meta ${styles.services_left__link}`}
          >
            <a href="">{link1}</a>
            <a href="">{link2}</a>
            <a href="">{link3}</a>
          </li>
        </div>

        <div className={styles.services_left__butoton}>
          <Button>GET IN TOUCH</Button>
        </div>
      </div>

      <div className={styles.service_item_right}>
        <h2 className={`${fontSyne.className} global__heading-h1 ${styles.service_right__heading}`}>
          {service_heading}
        </h2>
        <div
          className={`${fontSatoshi.className} global__text--medium ${styles.service_right__info}`}
        >
          <p>{service_info1}</p>
          <p>{service_info2}</p>
        </div>
        <img
          arial-label={image__arial_label}
          className={styles.service_right__image}
          src={image_path}
          alt={image_alt}
        />
      </div>
    </section>
  );
};

export default ServiceItem;
