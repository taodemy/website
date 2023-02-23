import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/WorkSinglePage.module.css";
import { fontSyne, fontSatoshi } from "../_app";
import works from "@/constants/works.json";
import Divider from "@/components/base/Divider";
import Contact from "@/components/general/Contact";
import InfoItem from "@/components/general/InfoItem";

const WorkSinglePage = () => {
  const [data, setData] = useState({
    id: "",
    title: "",
    intro: "",
    info: {
      client: "",
      timeline: "",
      service: "",
      website: "",
    },
    report: {
      challenge: "",
      solution: "",
      result: "",
    },
    img: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  });

  const router = useRouter();
  const id = router.query.id;

  //which is better? load data here or load it when initiate state
  useEffect(() => {
    const workData = works.data.find((item) => item.id === id);
    if (workData) setData(workData);
  }, [id]);

  /*I did not put these icons source in data, they are fixed icon based on this page,
  so it's weird to get them from external data*/
  type Icons = { [index: string]: string };
  const icons: Icons = {
    challenge: "/images/vector.png",
    solution: "/images/logo.png",
    result: "/images/video_icon.png",
  };

  return (
    <div>
      <div className={styles["work-single-page__container"]}>
        <section className={styles["work-single-page__main"]}>
          <h1 className={`${fontSyne.className} global__heading--large`}>{data.title}</h1>
          <p className={`${fontSatoshi.className} global__text-xlarge `}>{data.intro}</p>
        </section>

        <Divider style={{ margin: "0px 48px" }} />

        <section className={styles["work-single-page__aside"]}>
          {Object.entries(data.info).map(([key, value], index) => (
            //I think this part is also used in single blog page so I made it a component
            <InfoItem key={index} title={key} text={value} />
          ))}
        </section>
      </div>

      <div className={styles["work-single-page__container"]}>
        <section className={styles["work-single-page__aside"]}>
          {Object.entries(data.report).map(([key, value], index) => (
            //not sure if I should also make this a component, because it's not so good for reuse
            <section key={index} className={styles["work-single-page__report-item"]}>
              <img className={styles["work-single-page__report-icon"]} src={icons[key]} alt={key} />
              <h3 className={`${fontSyne.className} global__uppercase-heading-h3`}>
                {key.toUpperCase()}
              </h3>
              <p className={`${fontSatoshi.className} global__text-default`}>{value}</p>
            </section>
          ))}
        </section>

        <Divider style={{ margin: "0px 48px" }} />

        <section className={styles["work-single-page__main"]}>
          {data.img.map((item, index) => (
            <img
              key={index}
              className={styles["work-single-page__img"]}
              src={item.src}
              alt={item.alt}
            ></img>
          ))}
        </section>
      </div>
      <Contact />
    </div>
  );
};

export default WorkSinglePage;
