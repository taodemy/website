import Post from "../general/Post/Post";
import styles from "./WorkPosts.module.css";
import { PostProps } from "../general/Post/Post";

const WorkPosts = () => {
  const posts: PostProps[] = [
    {
      sectionName: "dancing\nstars",
      descriptionOne: "content",
      descriptionTwo: "video",
      descriptionThree: "design",
      imgPath: "/images/featured-work-sec-img-1.png",
      pagePath: "work/1",
    },
    {
      sectionName: "enjoy\nsilence",
      descriptionOne: "content",
      descriptionTwo: "branding",
      imgPath: "/images/featured-work-sec-img-2.png",
      pagePath: "work/2",
    },
    {
      sectionName: "pure\nvision",
      descriptionOne: "branding",
      descriptionTwo: "video",
      descriptionThree: "content",
      imgPath: "/images/featured-work-sec-img-3.png",
      pagePath: "work/3",
    },
    {
      sectionName: "boring\nbrand",
      descriptionOne: "branding",
      descriptionTwo: "video",
      descriptionThree: "content",
      imgPath: "/images/featured-work-sec-img-4.png",
      pagePath: "work/4",
    },
    {
      sectionName: "new\nculture",
      descriptionOne: "branding",
      descriptionTwo: "video",
      descriptionThree: "content",
      imgPath: "/images/featured-work-sec-img-5.png",
      pagePath: "work/5",
    },
  ];

  return (
    <>
      <div className={styles.work_posts}>
        {posts.map((p) => (
          <Post
            sectionName={p.sectionName}
            descriptionOne={p.descriptionOne}
            descriptionTwo={p.descriptionTwo}
            descriptionThree={p.descriptionThree}
            imgPath={p.imgPath}
            key={p.sectionName}
            pagePath={p.pagePath}
          />
        ))}
      </div>
    </>
  );
};

export default WorkPosts;
