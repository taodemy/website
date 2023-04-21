import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/WorkSinglePage.module.css";
import { fontSyne, fontSatoshi } from "../_app";
import works from "@/constants/works.json";
import Divider from "@/components/base/Divider";
import Contact, { IContact } from "@/components/general/Contact";
import InfoItem from "@/components/general/InfoItem";
import ReportItem from "@/components/general/ReportItem";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  indexPage: IIndexPage;
  errorMessage?: string;
}

interface IIndexPage {
  contact: IContact;
}

export /* istanbul ignore next */ async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.WEBSITE_API_URL}/IndexPage`);
    if (res.ok) {
      const data: IIndexPage = await res.json();
      return {
        props: {
          indexPage: data,
        },
      };
    } else {
      throw new Error("Failed to fetch data, please check!");
    }
  } catch (error) {
    return {
      props: {
        indexPage: null,
        errorMessage: "Failed to fetch data, please check!",
      },
    };
  }
}

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

const WorkSinglePage = ({ indexPage, errorMessage }: Props) => {
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

  if (!indexPage) {
    return <div>{errorMessage}</div>;
  }

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
      <Contact {...indexPage.contact} isPhoneSize={isPhoneSize} />
    </div>
  ) : (
    <></>
  );
};

export default WorkSinglePage;
