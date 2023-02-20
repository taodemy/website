import styles from "@/styles/OurClients.module.css";

interface Props {
  aria_label: string;
  alt: string;
  icon: string;
}

const IconsList = ({ aria_label, alt, icon }: Props) => {
  return (
    <div className={styles.our_clients__icons}>
      <img src={icon} arial-label={aria_label} alt={alt} />
    </div>
  );
};

export default IconsList;
