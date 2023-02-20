import styles from "@/styles/OurClients.module.css";
import { titleFont } from "@/pages/_app";

const OurClients = () => {
  return (
    <section className={styles.our_clients}>
      <p>OUR CLIENTS</p>
      <div className={styles.our_clients__icons}>
        <img src="/icons/icon1.svg" alt="icon1" />
        <img src="/icons/icon2.svg" alt="icon2" />
        <img src="/icons/icon3.svg" alt="icon3" />
        <img src="/icons/icon4.svg" alt="icon4" />
        <img src="/icons/icon5.svg" alt="icon5" />
        <img src="/icons/icon6.svg" alt="icon6" />
      </div>
    </section>
  );
};

export default OurClients;
