import styles from "@/styles/OurClients.module.css";
import { fontRobotoMono, fontSatoshi, fontSyne } from "@/pages/_app";
import IconItem from "./IconList";

const OurClients = () => {
  const iconItems = [
    {
      id: 1,
      aria_label: "super_food_icon",
      icon: "/icons/super_food_icon.svg",
      alt: "super food icon",
    },
    {
      id: 2,
      aria_label: "creative_studio_icon",
      icon: "/icons/creative_studio_icon.svg",
      alt: "creative studio icon",
    },
    {
      id: 3,
      aria_label: "in_motion_icon",
      icon: "/icons/in_motion_icon.svg",
      alt: "in motion icon",
    },
    {
      id: 4,
      aria_label: "abstract_icon",
      icon: "/icons/abstract_icon.svg",
      alt: "abstract icon",
    },
    {
      id: 5,
      aria_label: "vision_studio_icon",
      icon: "/icons/vision_studio_icon.svg",
      alt: "vision studio icon",
    },
    {
      id: 6,
      aria_label: "invision_square_icon",
      icon: "/icons/invision_square_icon.svg",
      alt: "invision square icon",
    },
  ];
  return (
    <section className={styles.our_clients}>
      <p className={`${fontRobotoMono.className} global__text-meta ${styles.our_clients__text}`}>
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
