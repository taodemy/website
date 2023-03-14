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
    const blogVideoBtn = screen.getByRole("button", { name: /video/i });
    expect(work_block_heading).toBeInTheDocument();
    expect(work_block__title_text).toBeInTheDocument();
  });

  it("should render post section information in success", () => {
    const firstLargeImg = screen.getByRole("img", {
      name: /things to look for when comparing branding alternatives image/i,
    });
    const firstLargeImgTitle = screen.getByRole("heading", {
      name: /things to look for when comparing branding alternatives/i,
    });
    const secondLargeImg = screen.getByRole("img", {
      name: /5 stand\-out features of branding you should know image/i,
    });
    const secondLargeImgTitle = screen.getByRole("heading", {
      name: /5 stand\-out features of branding you should know/i,
    });
    expect(firstLargeImg).toBeInTheDocument();
    expect(firstLargeImg).toHaveAttribute("src", "/images/two_people_praying.png");
    expect(firstLargeImgTitle).toBeInTheDocument();
    expect(secondLargeImg).toBeInTheDocument();
    expect(secondLargeImg).toHaveAttribute("src", "/images/channel.png");
    expect(secondLargeImgTitle).toBeInTheDocument();
  });

  it("should render small group of blog gallery section in success", () => {
    const firstSmallImg = screen.getByRole("img", {
      name: /branding: what real customers have to say image/i,
    });
    const firstSmallImgTitle = screen.getByRole("heading", {
      name: /branding: what real customers have to say/i,
    });
    const secondSmallImg = screen.getByRole("img", {
      name: /branding: pros and cons they don't tell you image/i,
    });
    const secondSmallImgTitle = screen.getByRole("heading", {
      name: /branding: pros and cons they don't tell you/i,
    });
    const thirdSmallImg = screen.getByRole("img", {
      name: /how to spot the best branding for you: signs and features image/i,
    });
    const thirdSmallImgTitle = screen.getByRole("heading", {
      name: /how to spot the best branding for you: signs and features/i,
    });
    const fourthSmallImg = screen.getByRole("img", {
      name: /how much should i spend on branding image/i,
    });
    const fourthSmallImgTitle = screen.getByRole("heading", {
      name: /how much should i spend on branding/i,
    });
    const fifthSmallImg = screen.getByRole("img", {
      name: /rookie mistakes you're making with your branding image/i,
    });
    const fifthSmallImgTitle = screen.getByRole("heading", {
      name: /rookie mistakes you're making with your branding/i,
    });
    const sixthSmallImg = screen.getByRole("img", {
      name: /real branding customer reviews you need to see image/i,
    });
    const sixthSmallImgTitle = screen.getByRole("heading", {
      name: /real branding customer reviews you need to see/i,
    });
    expect(firstSmallImg).toBeInTheDocument();
    expect(firstSmallImg).toHaveAttribute("src", "/images/what_is_brand_strategy.png");
    expect(firstSmallImgTitle).toBeInTheDocument();
    expect(secondSmallImg).toBeInTheDocument();
    expect(secondSmallImg).toHaveAttribute("src", "/images/shaping_art.png");
    expect(secondSmallImgTitle).toBeInTheDocument();
    expect(thirdSmallImg).toBeInTheDocument();
    expect(thirdSmallImg).toHaveAttribute("src", "/images/hero_hand.png");
    expect(thirdSmallImgTitle).toBeInTheDocument();
    expect(fourthSmallImg).toBeInTheDocument();
    expect(fourthSmallImg).toHaveAttribute("src", "/images/perfume.png");
    expect(fourthSmallImgTitle).toBeInTheDocument();
    expect(fifthSmallImg).toBeInTheDocument();
    expect(fifthSmallImg).toHaveAttribute("src", "/images/hero.png");
    expect(fifthSmallImgTitle).toBeInTheDocument();
    expect(sixthSmallImg).toBeInTheDocument();
    expect(sixthSmallImg).toHaveAttribute("src", "/images/gabby.png");
    expect(sixthSmallImgTitle).toBeInTheDocument();
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
