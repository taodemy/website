import Post from "../general/Post/Post";
import styles from "./WorkPosts.module.css";
import { PostProps } from "../general/Post/Post";

const WorkPosts = () => {
  const posts: PostProps[] = [
    {
      sectionName: "dancing\nstars",
      desOne: "content",
      desTwo: "video",
      desThree: "design",
      imgPath: "/images/featured-work-sec-img-1.png",
    },
    {
      sectionName: "enjoy\nsilence",
      desOne: "content",
      desTwo: "branding",
      imgPath: "/images/featured-work-sec-img-2.png",
    },
    {
      sectionName: "pure\nvision",
      desOne: "branding",
      desTwo: "video",
      desThree: "content",
      imgPath: "/images/featured-work-sec-img-3.png",
    },
    {
      sectionName: "boring\nbrand",
      desOne: "branding",
      desTwo: "video",
      desThree: "content",
      imgPath: "/images/featured-work-sec-img-4.png",
    },
    {
      sectionName: "new\nculture",
      desOne: "branding",
      desTwo: "video",
      desThree: "content",
      imgPath: "/images/featured-work-sec-img-5.png",
    },
  ];

  return (
    <>
      {posts.map((p) => (
        <Post
          sectionName={p.sectionName}
          desOne={p.desOne}
          desTwo={p.desTwo}
          desThree={p.desThree}
          imgPath={p.imgPath}
          key={p.sectionName}
        />
      ))}
    </>
  );
};

export default WorkPosts;
