import styles from "@/styles/OurClients.module.css";
import { fontSatoshi, fontSyne } from "@/pages/_app";
import IconsList from "./IconList";

const OurClients = () => {
  const iconsList = [
    {
      id: 1,
      aria_label: "icon1",
      icon: "/icons/icon1.svg",
      alt: "icon1",
    },
    {
      id: 2,
      aria_label: "icon2",
      icon: "/icons/icon2.svg",
      alt: "icon2",
    },
    {
      id: 3,
      aria_label: "icon3",
      icon: "/icons/icon3.svg",
      alt: "icon3",
    },
    {
      id: 4,
      aria_label: "icon4",
      icon: "/icons/icon4.svg",
      alt: "icon4",
    },
    {
      id: 5,
      aria_label: "icon5",
      icon: "/icons/icon5.svg",
      alt: "icon5",
    },
    {
      id: 6,
      aria_label: "icon6",
      icon: "/icons/icon6.svg",
      alt: "icon6",
    },
  ];
  return (
    <section className={styles.our_clients}>
      <p className={`${fontSatoshi.className} global__text-meta ${styles.our_clients__text}`}>
        OUR CLIENTS
      </p>
      <div className={styles.our_clients__icons}>
        {iconsList.map(({ id, aria_label, alt, icon }) => (
          <IconsList key={id} aria_label={aria_label} icon={icon} alt={alt} />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
