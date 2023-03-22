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
        "A strong brand in creating a meaningful connection between people and a company's products or services, regardless of geographical location. When a brand is strong, it can communicate a clear and consistent message about its values, mission, and offerings, which helps to build trust and loyalty with consumers.",
      service_info2:
        "By connecting people with a brand all around the world, a strong brand can help a company expand its reach and tap into new markets. This can lead to increased sales and revenue, as well as greater recognition and influence in the industry.",
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
        "To create web experiences that meet your needs and preferences, we would have a deep understanding of your target audience, as well as their brand identity and messaging. we would translate this information into a website that is both functional and visually appealing, while also being optimized for performance and accessibility.",
      service_info2:
        "By specializing in this area and emphasizing your commitment to your satisfaction, we are positioning ourself as a trusted partner in creating exceptional web experiences that will help you achieve the goals and stand out in a competitive digital landscape.",
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
        "We focus on inspiring people to take action through powerful video strategies. we believe in the power of visual storytelling to create meaningful connections with your audience and motivate them to stand up for their beliefs. To inspire people to take action, we would need to have a deep understanding of your target audience, as well as a keen eye for visual storytelling and messaging.",
      service_info2:
        "Creating compelling video content that not only captures your audience's attention but also resonates with them on an emotional level and motivates them to take action. ",
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
        "In order to build a strong brand and attract customers, businesses must provide content that is not only relevant and informative but also adds value to the consumer's life.To create valuable content, businesses must have a deep understanding of their target audience and their needs and preferences. ",
      service_info2:
        "They must be able to identify the topics and issues that are of interest to their audience and create content that addresses these topics in a compelling and informative way.",
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
