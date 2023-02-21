import styles from "@/styles/OurClients.module.css";
import { fontSatoshi, fontSyne } from "@/pages/_app";
import IconItem from "./IconList";

const OurClients = () => {
  const iconItems = [
    {
      id: 1,
      aria_label: "Super food icon",
      icon: "/icons/super_food_icon.svg",
      alt: "Super food icon",
    },
    {
      id: 2,
      aria_label: "Creative studio icon",
      icon: "/icons/creative_studio_icon.svg",
      alt: "Creative studio icon",
    },
    {
      id: 3,
      aria_label: "In motion icon",
      icon: "/icons/in_motion_icon.svg",
      alt: "In motion icon",
    },
    {
      id: 4,
      aria_label: "Abstract icon",
      icon: "/icons/abstract_icon.svg",
      alt: "Abstract icon",
    },
    {
      id: 5,
      aria_label: "Vision studio icon",
      icon: "/icons/vision_studio_icon.svg",
      alt: "Vision studio icon",
    },
    {
      id: 6,
      aria_label: "Invision square icon",
      icon: "/icons/invision_square_icon.svg",
      alt: "Invision square icon",
    },
  ];
  return (
    <section className={styles.our_clients}>
      <p className={`${fontSatoshi.className} global__text-meta ${styles.our_clients__text}`}>
        OUR CLIENTS
      </p>
      <div className={styles.our_clients__icons}>
        {iconItems.map(({ id, aria_label, alt, icon }) => (
          <IconItem key={id} aria_label={aria_label} icon={icon} alt={alt} />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
