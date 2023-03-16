import styles from "./Post.module.css";
import Button from "@/components/base/Button";
import { fontRobotoMono, fontSyne } from "@/pages/_app";

export type PostProps = {
  sectionName: string;
  desOne?: string;
  desTwo?: string;
  desThree?: string;
  imgPath: string;
};

const Post = ({ sectionName, desOne, desTwo, desThree, imgPath }: PostProps) => {
  return (
    <section className={styles.post_section}>
      <div className={styles.post_section__information}>
        <div className={styles.post_section__description}>
          <h1 className={`${fontSyne.className} global__heading-h1`}>{sectionName}</h1>
          <p className={`${fontRobotoMono.className} global__text-meta`}>{desOne}</p>
          <p className={`${fontRobotoMono.className} global__text-meta`}>{desTwo}</p>
          <p className={`${fontRobotoMono.className} global__text-meta`}>{desThree}</p>
        </div>
        <Button variant="secondary">VIEW PROJECT</Button>
      </div>

      <img
        src={imgPath}
        alt={`${sectionName}image`}
        arial-label={`${sectionName}image`}
        className={styles.post_section__image}
      />
    </section>
  );
};

export default Post;
