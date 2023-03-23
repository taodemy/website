import styles from "@/styles/AddressItem.module.css";
import { fontSatoshi, fontSyne } from "@/pages/_app";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { PHONE } = EViewPortQuery;
interface AddressItemProps {
  imgSrc: string;
  title: string;
  street: string;
  city: string;
}

const AddressItem = ({ imgSrc, title, street, city }: AddressItemProps) => {
  const isPhoneSize = useMediaQuery(PHONE);
  return (
    <div className={styles.address}>
      <img src={imgSrc} className={styles.address__img} alt="office" />
      <div className={styles.address__details}>
        <h2
          className={`${fontSyne.className} ${
            isPhoneSize ? "global__uppercase-heading-h4" : "global__uppercase-heading-h3"
          } ${styles.address__text}`}
        >
          {title}
        </h2>
        <p className={`${fontSatoshi.className} global__text-meta ${styles.address__text}`}>
          {street}
        </p>
        <p className={`${fontSatoshi.className} global__text-meta ${styles.address__text}`}>
          {city}
        </p>
      </div>
    </div>
  );
};
export default AddressItem;
