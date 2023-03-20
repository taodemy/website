import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/WorkSinglePage.module.css";
import { fontSyne, fontSatoshi } from "../_app";
import works from "@/constants/works.json";
import Divider from "@/components/base/Divider";
import Contact from "@/components/general/Contact";
import InfoItem from "@/components/general/InfoItem";
import ReportItem from "@/components/general/ReportItem";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { DESKTOP, TABLET, PHONE } = EViewPortQuery;

type Work = {
  id: string;
  title: string;
  intro: string;
  info: {
    client: string;
    timeline: string;
    service: string;
    website: string;
  };
  report: {
    challenge: string;
    solution: string;
    result: string;
  };
  img: {
    src: string;
    alt: string;
  }[];
};

const WorkSinglePage = () => {
  const [work, setWork] = useState<Work | null>(null);

  const isPhoneSize = useMediaQuery(PHONE);

  const router = useRouter();
  const id = router.query.id;

  const icons = {
    challenge: "/images/vector.png",
    solution: "/images/logo.png",
    result: "/images/video_icon.png",
  };

  useEffect(() => {
    const workData = works.data.find((item) => item.id === id);
    if (workData) setWork(workData);
  }, [id]);

  return work ? (
    <div>
      <div className={styles["work-single-page__container"]}>
        <section className={styles["work-single-page__main"]}>
          <h1 className={`${fontSyne.className} global__heading--large`}>{work.title}</h1>
          <p className={`${fontSatoshi.className} global__text-xlarge `}>{work.intro}</p>
        </section>

        <Divider style={{ margin: "0px 48px" }} />

        <section className={styles["work-single-page__aside"]}>
          {Object.entries(work.info).map(([key, value], index) => (
            <InfoItem key={index} title={key} text={value} />
          ))}
        </section>
      </div>

      <div className={styles["work-single-page__container"]}>
        <section className={styles["work-single-page__aside"]}>
          {Object.entries(work.report).map(([key, value], index) => (
            <ReportItem key={index} icons={icons} icon={key} text={value} />
          ))}
        </section>

        <Divider style={{ margin: "0px 48px" }} />

        <section className={styles["work-single-page__main"]}>
          {work.img.map((item, index) => (
            <img
              key={index}
              className={styles["work-single-page__img"]}
              src={item.src}
              alt={item.alt}
            ></img>
          ))}
        </section>
      </div>
      <Contact isPhoneSize={isPhoneSize} />
    </div>
  ) : (
    <></>
  );
};

export default WorkSinglePage;
