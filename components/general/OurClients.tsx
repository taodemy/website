import styles from "@/styles/OurClients.module.css";
import { fontRobotoMono, fontSatoshi, fontSyne } from "@/pages/_app";
import IconItem from "./IconItem";

export interface IOurClients {
  iconItems: IIconItem[];
}
interface IIconItem {
  id: number;
  aria_label: string;
  icon: string;
  alt: string;
}

const OurClients = (props: IOurClients) => {
  const iconItems = props.iconItems;

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
