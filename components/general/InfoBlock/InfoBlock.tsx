import styles from "./InfoBlock.module.css";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";
import Button from "../../base/Button";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { PHONE } = EViewPortQuery;
export type InfoBlockType = "normal" | "smallHeading" | "input";
type InfoProps = {
  sectionName: string;
  title: string;
  iconPath: string;
  blockType: InfoBlockType;
  content: string;
  buttonContent?: string;
  isPhoneSize: boolean;
};

const InfoBlock = ({
  sectionName,
  title,
  iconPath,
  blockType,
  content,
  buttonContent,
  isPhoneSize,
}: InfoProps) => {
  return (
    <section className={styles.info_block}>
      <div className={styles.info_block__title}>
        <p className={`${fontRobotoMono.className} global__text-meta ${styles.info_block_heading}`}>
          {sectionName}
        </p>
        {blockType === "smallHeading" ? (
          <h1
            className={`${fontSyne.className} 
            ${!isPhoneSize ? "global__uppercase-heading--medium" : "global__heading-h2"} ${
              styles.info_block__title_text
            }`}
          >
            {title}
          </h1>
        ) : (
          <h1
            className={`
              ${fontSyne.className}
              ${isPhoneSize ? "global__heading-h2" : "global__uppercase-heading--medium"}
              ${styles.info_block__title_text}
            `}
          >
            {title}
          </h1>
        )}
        <img
          data-testid="infoBlockImg"
          src={iconPath}
          alt={`${title}icon`}
          aria-label={`${title}icon`}
          width={100}
          height={100}
          className={styles.info_block__icon}
        />
      </div>
      {blockType === "input" ? (
        <div className={styles.info_block__sign_up_content}>
          <p
            className={`${fontSatoshi.className} global__text-xlarge ${styles.info_block__sign_up_content__text}`}
          >
            {content}
          </p>
          <form className={styles.info_block__sign_up_content__form}>
            <div className={styles.info_block__sign_up_content__form__group}>
              <input type="email" className={`global__heading-h4 ${fontSyne.className}`} />
              <span className={`global__heading-h4 ${fontSyne.className}`}>your email</span>
            </div>
            <Button>sign up</Button>
          </form>
        </div>
      ) : (
        <div className={styles.info_block__normal_content}>
          {blockType === "smallHeading" ? (
            <p
              className={`${fontSatoshi.className} global__text--large ${styles.info_block__normal_content_text_small}`}
            >
              {content}
            </p>
          ) : (
            <p
              className={`${fontSatoshi.className} global__text-xlarge ${styles.info_block__normal_content_text}`}
            >
              {content}
            </p>
          )}
          <Button>{buttonContent}</Button>
        </div>
      )}
    </section>
  );
};

export default InfoBlock;
