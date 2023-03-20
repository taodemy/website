import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Post from "@/components/general/Post/Post";

describe("WorkPosts", () => {
  const WorkPost = {
    sectionName: "dancing stars",
    desOne: "content",
    desTwo: "video",
    desThree: "design",
    imgPath: "/images/featured-work-sec-img-1.png",
  };
  beforeEach(() => {
    render(
      <Post
        sectionName={WorkPost.sectionName}
        desOne={WorkPost.desOne}
        desTwo={WorkPost.desTwo}
        desThree={WorkPost.desThree}
        imgPath={WorkPost.imgPath}
      />
    );
  });

  it("should render first post sectionname in success", () => {
    const postSectionName = screen.getByText("dancing stars");
    expect(postSectionName).toBeInTheDocument();
  });

  it("should render first post description one in success", () => {
    const postDescriptionOne = screen.getByText("content");
    expect(postDescriptionOne).toBeInTheDocument();
  });

  it("should render first post description two in success", () => {
    const postDescriptionTwo = screen.getByText("video");
    expect(postDescriptionTwo).toBeInTheDocument();
  });

  it("should render first post description three in success", () => {
    const postDescriptionThree = screen.getByText("design");
    expect(postDescriptionThree).toBeInTheDocument();
  });

  it("should render first post section image in success", () => {
    const postImage = screen.getByRole("img", {
      name: /dancing stars/i,
    });
    expect(postImage).toBeInTheDocument();
    expect(postImage).toHaveAttribute("src", "/images/featured-work-sec-img-1.png");
    expect(postImage).toHaveAttribute("alt", "dancing starsimage");
  });

  it("should render first post section image in success", () => {
    const postBtn = screen.getByRole("button", { name: /view project/i });
    expect(postBtn).toBeInTheDocument();
  });
});
