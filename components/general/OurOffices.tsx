import styles from "@/styles/Contact.module.css";
import { fontRobotoMono } from "@/pages/_app";
import AddressItem from "./AddressItem";

const OurOffices = () => {
  return (
    <section className={styles.offices}>
      <div className={styles.offices_left__container}>
        <p
          className={`${styles.msg_left_title__heading} ${fontRobotoMono.className} global__text-meta`}
        >
          OUR OFFICES
        </p>
      </div>
      <div className={styles.offices_address__container}>
        <div className={styles.address_details__container}>
          <AddressItem
            imgSrc="/images/our_value.jpeg"
            title="HAMBURG"
            street="Main Street 16"
            city="Berlin, Germany"
          />
          <AddressItem
            imgSrc="/images/our_value.jpeg"
            title="LISBON"
            street="Main Street 16"
            city="Berlin, Germany"
          />
        </div>
        <div className={styles.address_border__container}>
          <div className={styles.address__border_center}></div>
        </div>
        <div className={styles.address_details__container}>
          <AddressItem
            imgSrc="/images/our_value.jpeg"
            title="BUDAPEST"
            street="Main Street 16"
            city="Berlin, Germany"
          />
          <AddressItem
            imgSrc="/images/our_value.jpeg"
            title="KRAKOW"
            street="Main Street 16"
            city="Berlin, Germany"
          />
        </div>
      </div>
    </section>
  );
};
export default OurOffices;
