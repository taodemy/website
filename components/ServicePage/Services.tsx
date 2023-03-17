import React from "react";
import Service from "./ServicesItem";

const Services = () => {
  const ServiceItems = [
    {
      id: 1,
      service_name: "BRANDING",
      icon__arial_label: "service_branding_logo",
      icon_path: "/images/branding_icon.svg",
      icon_alt: "branding icon",
      service_heading:
        "A strong brand is a tool to connect people with your brand all around the world.",
      service_info1:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat. Aliquam ut porttitor leo a diam sollicitudin. Malesuada pellentesgue elit eget gravida.",
      service_info2:
        "Gravida quis blandit turpis cursus. Faucibus purus in massa tempor nec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vulputate mi sit amet mauris. ",
      image__arial_label: "service_branding_image",
      image_path: "/images/featured-work-sec-img-1.png",
      image_alt: "branding image",
      link1: "LOGO",
      link2: "CORPORATE IDENTITY",
      link3: "BRAND GUIDE",
    },
    {
      id: 2,
      service_name: "DESIGN",
      icon__arial_label: "service_design_logo",
      icon_path: "/images/design_icon.svg",
      icon_alt: "design icon",
      service_heading:
        "We specialize in creating amazing web experiences that people will love based on your great ideas.",
      service_info1:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat. Aliquam ut porttitor leo a diam sollicitudin. Malesuada pellentesgue elit eget gravida.",
      service_info2:
        "Gravida quis blandit turpis cursus. Faucibus purus in massa tempor nec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vulputate mi sit amet mauris. ",
      image__arial_label: "service_design_image",
      image_path: "/images/featured-work-sec-img-2.png",
      image_alt: "design image",
      link1: "WEBDESIGN",
      link2: "PRINT",
      link3: "SOCIAL MEDIA",
    },
    {
      id: 3,
      service_name: "VIDEO",
      icon__arial_label: "service_video_logo",
      icon_path: "/images/video_icon.svg",
      icon_alt: "video icon",
      service_heading:
        "We inspire people to stand up for what they believe in with amazing video strategies.",
      service_info1:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat. Aliquam ut porttitor leo a diam sollicitudin. Malesuada pellentesgue elit eget gravida.",
      service_info2:
        "Gravida quis blandit turpis cursus. Faucibus purus in massa tempor nec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vulputate mi sit amet mauris. ",
      image__arial_label: "service_video_image",
      image_path: "/images/featured-work-sec-img-3.png",
      image_alt: "video image",
      link1: "VIDEOS ADS",
      link2: "SOCIAL MEDIA SHORTS",
      link3: "MOVIE TRAILERS",
    },
    {
      id: 4,
      service_name: "CONTENT",
      icon__arial_label: "service_content_logo",
      icon_path: "/images/content_icon.svg",
      icon_alt: "content icon",
      service_heading:
        "If you want to succeed, you need to create content that potential consumers will find valuable.",
      service_info1:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat. Aliquam ut porttitor leo a diam sollicitudin. Malesuada pellentesgue elit eget gravida.",
      service_info2:
        "Gravida quis blandit turpis cursus. Faucibus purus in massa tempor nec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vulputate mi sit amet mauris. ",
      image__arial_label: "service_content_image",
      image_path: "/images/featured-work-sec-img-4.png",
      image_alt: "content image",
      link1: "SOCIAL MEDIA ADS",
      link2: "LANDING PAGES",
      link3: "WEBSITES",
    },
  ];
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
        />
      ))}
    </section>
  );
};

export default Services;
