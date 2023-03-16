import { render, screen } from "@testing-library/react";
import Work from "@/pages/work";
import "@testing-library/jest-dom";

describe("Work Page", () => {
  beforeEach(() => {
    render(<Work />);
  });

  it("should render work title in success", () => {
    const work_block_heading = screen.getByRole("heading", { name: /work/i });
    const work_block__title_text = screen.getByText(/Our branding success stories.\./i);
    const workViewProjectBtn = screen.getByRole("button", { name: /video/i });
    expect(work_block_heading).toBeInTheDocument();
    expect(work_block__title_text).toBeInTheDocument();
    expect(workViewProjectBtn).toBeInTheDocument();
  });

  it("should render post section information in success", () => {
    const firstLargeImg = screen.getByRole("img", {
      name: /dancing stars/i,
    });
    const firstLargeImgSectionName = screen.getByRole("sectionName", {
      name: /dancing stars/i,
    });
    const firstLargeImgDescriptionOne = screen.getByRole("description", {
      name: /content/i,
    });
    const firstLargeImgDescriptionTwo = screen.getByRole("description", {
      name: /video/i,
    });
    const firstLargeImgDescriptionThree = screen.getByRole("description", {
      name: /design/i,
    });

    const secondLargeImg = screen.getByRole("img", {
      name: /enjoy silence/i,
    });
    const secondLargeImgSectionName = screen.getByRole("sectionName", {
      name: /enjoy silence/i,
    });
    const secondLargeImgDescriptionOne = screen.getByRole("description", {
      name: /content/i,
    });
    const secondLargeImgDescriptionTwo = screen.getByRole("description", {
      name: /branding/i,
    });

    const thirdLargeImg = screen.getByRole("img", {
      name: /pure vision/i,
    });
    const thirdLargeImgSectionName = screen.getByRole("sectionName", {
      name: /pure vision/i,
    });
    const thirdLargeImgDescriptionOne = screen.getByRole("description", {
      name: /branding/i,
    });
    const thirdLargeImgDescriptionTwo = screen.getByRole("description", {
      name: /video/i,
    });
    const thirdLargeImgDescriptionThree = screen.getByRole("description", {
      name: /content/i,
    });

    const fourthLargeImg = screen.getByRole("img", {
      name: /boring brand/i,
    });
    const fourthLargeImgSectionName = screen.getByRole("sectionName", {
      name: /boring brand/i,
    });
    const fourthLargeImgDescriptionOne = screen.getByRole("description", {
      name: /branding/i,
    });
    const fourthLargeImgDescriptionTwo = screen.getByRole("description", {
      name: /video/i,
    });
    const fourthLargeImgDescriptionThree = screen.getByRole("description", {
      name: /content/i,
    });

    const fifthLargeImg = screen.getByRole("img", {
      name: /new culture/i,
    });
    const fifthLargeImgSectionName = screen.getByRole("sectionName", {
      name: /new culture/i,
    });
    const fifthLargeImgDescriptionOne = screen.getByRole("description", {
      name: /branding/i,
    });
    const fifthLargeImgDescriptionTwo = screen.getByRole("description", {
      name: /video/i,
    });
    const fifthLargeImgDescriptionThree = screen.getByRole("description", {
      name: /content/i,
    });

    expect(firstLargeImg).toBeInTheDocument();
    expect(firstLargeImg).toHaveAttribute("src", "/images/two_people_praying.png");
    expect(firstLargeImgSectionName).toBeInTheDocument();
    expect(firstLargeImgDescriptionOne).toBeInTheDocument();
    expect(firstLargeImgDescriptionTwo).toBeInTheDocument();
    expect(firstLargeImgDescriptionThree).toBeInTheDocument();
    expect(secondLargeImg).toBeInTheDocument();
    expect(secondLargeImg).toHaveAttribute("src", "/images/channel.png");
    expect(secondLargeImgSectionName).toBeInTheDocument();
    expect(secondLargeImgDescriptionOne).toBeInTheDocument();
    expect(secondLargeImgDescriptionTwo).toBeInTheDocument();
    expect(thirdLargeImg).toBeInTheDocument();
    expect(thirdLargeImg).toHaveAttribute("src", "/images/two_people_praying.png");
    expect(thirdLargeImgSectionName).toBeInTheDocument();
    expect(thirdLargeImgDescriptionOne).toBeInTheDocument();
    expect(thirdLargeImgDescriptionTwo).toBeInTheDocument();
    expect(thirdLargeImgDescriptionThree).toBeInTheDocument();
    expect(fourthLargeImg).toBeInTheDocument();
    expect(fourthLargeImg).toHaveAttribute("src", "/images/two_people_praying.png");
    expect(fourthLargeImgSectionName).toBeInTheDocument();
    expect(fourthLargeImgDescriptionOne).toBeInTheDocument();
    expect(fourthLargeImgDescriptionTwo).toBeInTheDocument();
    expect(fourthLargeImgDescriptionThree).toBeInTheDocument();
    expect(firstLargeImg).toBeInTheDocument();
    expect(fifthLargeImg).toHaveAttribute("src", "/images/two_people_praying.png");
    expect(fifthLargeImgSectionName).toBeInTheDocument();
    expect(fifthLargeImgDescriptionOne).toBeInTheDocument();
    expect(fifthLargeImgDescriptionTwo).toBeInTheDocument();
    expect(fifthLargeImgDescriptionThree).toBeInTheDocument();
  });

  it("should render subscription section in success", () => {
    const subscriptionTitle = screen.getByRole("heading", {
      name: /get the latest news into your inbox/i,
    });
    const subscriptionIcon = screen.getByRole("img", {
      name: /get the latest news into your inboxicon/i,
    });
    const subscriptionContent = screen.getByText(
      "Design your own brand, one click at a time. --Subscribe to our newsletter to get the most up-to-date information."
    );
    const subscriptionInput = screen.getByRole("textbox");
    const subscriptionButton = screen.getByRole("button", { name: /sign up/i });
    expect(subscriptionTitle).toBeInTheDocument();
    expect(subscriptionIcon).toBeInTheDocument();
    expect(subscriptionIcon).toHaveAttribute("src", "/images/star.svg");
    expect(subscriptionContent).toBeInTheDocument();
    expect(subscriptionInput).toBeInTheDocument();
    expect(subscriptionInput).toHaveAttribute("type", "email");
    expect(subscriptionInput).toHaveAttribute("value", "YOUR EMAIL");
    expect(subscriptionButton).toBeInTheDocument();
  });
});
