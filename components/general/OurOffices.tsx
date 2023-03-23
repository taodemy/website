import styles from "@/styles/OurOffices.module.css";
import { fontRobotoMono } from "@/pages/_app";
import AddressItem from "./AddressItem";
import useMediaQuery from "@/hooks/useMediaQuery";
import EViewPortQuery from "@/constants/viewPortSize";

const { OUROFFICES } = EViewPortQuery;

const OurOffices = () => {
  const isOurOfficesViewChange = useMediaQuery(OUROFFICES);
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
        {isOurOfficesViewChange ? (
          ""
        ) : (
          <div className={styles.address_border__container}>
            <div className={styles.address__border_center}></div>
          </div>
        )}
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
