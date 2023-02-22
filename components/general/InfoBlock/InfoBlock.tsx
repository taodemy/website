import styles from "@/styles/InfoBlock.module.css";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";
import Button from "../../base/Button";

type InfoBlockType = "normal" | "input";
type InfoProps = {
  sectionName: string;
  title: string;
  iconPath: string;
  blockType: InfoBlockType;
  content: string;
  buttonContent: string;
};

const InfoBlock = ({
  sectionName,
  title,
  iconPath,
  blockType,
  content,
  buttonContent,
}: InfoProps) => {
  const imgDescription = { title } + " icon";
  return (
    <section className={styles.info_block}>
      <div className={styles.info_block__title}>
        <p className={`${fontRobotoMono.className} global__text-meta ${styles.info_block_heading}`}>
          {sectionName}
        </p>
        <h1
          className={`${fontSyne.className} global__uppercase-heading--medium ${styles.info_block__title_text}`}
        >
          {title}
        </h1>
        <img
          src={iconPath}
          alt={imgDescription}
          aria-label={imgDescription}
          width={100}
          height={100}
          className={styles.info_block__icon}
        />
      </div>
      {blockType === "normal" && (
        <div className={styles.info_block__content}>
          <p
            className={`${fontSatoshi.className} global__text-xlarge ${styles.info_block__content_text}`}
          >
            {content}
          </p>
          <Button>{buttonContent}</Button>
        </div>
      )}
      {blockType === "input" && (
        <div className={styles.info_block__content}>
          <p
            className={`${fontSatoshi.className} global__text-xlarge ${styles.info_block__content_text}`}
          >
            {content}
          </p>
          <Button>{buttonContent}</Button>
        </div>
      )}
    </section>
  );
};

export default InfoBlock;
