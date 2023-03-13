import styles from "@/styles/OurClients.module.css";

interface Props {
  aria_label: string;
  alt: string;
  icon: string;
}

const IconItem = ({ aria_label, alt, icon }: Props) => {
  return (
    <div className={styles.icon__item}>
      <img className={styles.icon__img} src={icon} arial-label={aria_label} alt={alt} />
    </div>
  );
};

export default IconItem;
