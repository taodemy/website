import React from "react";
import Service from "./ServicesItem";

export interface IServiceItems {
  service_name: string;
  icon__arial_label: string;
  icon_path: string;
  icon_alt: string;
  service_heading: string;
  service_info1: string;
  service_info2: string;
  image__arial_label: string;
  image_path: string;
  image_alt: string;
  link1: string;
  link2: string;
  link3: string;
  isPhoneSize: boolean;
}

const Services = (props: IServiceItems) => {
  const ServiceItems = Object.values(props);

  return (
    <section>
      {ServiceItems.map((ServiceItem) => (
        <Service
          service_name={ServiceItem.service_name}
          icon__arial_label={ServiceItem.icon__arial_label}
          icon_path={ServiceItem.icon_path}
          icon_alt={ServiceItem.icon_alt}
          service_heading={ServiceItem.service_heading}
          service_info1={ServiceItem.service_info1}
          service_info2={ServiceItem.service_info2}
          image__arial_label={ServiceItem.image__arial_label}
          image_path={ServiceItem.image_path}
          image_alt={ServiceItem.image_alt}
          key={ServiceItem.id}
          link1={ServiceItem.link1}
          link2={ServiceItem.link2}
          link3={ServiceItem.link3}
          isPhoneSize={props.isPhoneSize}
        />
      ))}
    </section>
  );
};

export default Services;