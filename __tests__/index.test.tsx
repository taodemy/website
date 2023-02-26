import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders the heading of featured work section", () => {
    const FeaturedWorkSection = screen.getByRole("heading", { name: /featured work/i });
    expect(FeaturedWorkSection).toBeInTheDocument();
  });

  it("renders a hero text with the right content", () => {
    const text = screen.getByText(
      "The featured work section shows some of the successful works of our website."
    );
    expect(text).toBeInTheDocument();
  });

  it("renders a featured work img", () => {
    const heroPhoto = screen.getByRole("img", { name: "hero__photo" });
    expect(heroPhoto).toBeInTheDocument();
  });

  it("renders a hero heading with the right content", () => {
    const heading = screen.getByText("We are a digital agency from Melbourne.");
    expect(heading).toBeInTheDocument();
  });

  it("renders a hero text with the right content", () => {
    const text = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    );
    expect(text).toBeInTheDocument();
  });

  it("renders a hero photo with the right src and alt", () => {
    const heroPhoto = screen.getByRole("img", { name: "hero__photo" });
    expect(heroPhoto).toBeInTheDocument();
    expect(heroPhoto).toHaveAttribute("src", "/images/hero.png");
    expect(heroPhoto).toHaveAttribute("alt", "hero photo");
  });

  it("renders a hero icon with the right src and alt", () => {
    const heroIcon = screen.getByRole("img", { name: "hero__icon" });
    expect(heroIcon).toBeInTheDocument();
    expect(heroIcon).toHaveAttribute("src", "/images/vector.png");
    expect(heroIcon).toHaveAttribute("alt", "hero icon");
  });

  //test what we do section
  it("renders what we do txt", () => {
    const text = screen.getByText("WHAT WE DO");
    expect(text).toBeInTheDocument();
  });

  // test how we work section
  it("should render how we work section in sucess", () => {
    const howWeWorkHead = screen.getByText(/how we work/i);
    expect(howWeWorkHead).toBeInTheDocument();
  });

  it("should render how we work title in sucess", () => {
    const howWeWorkTitle = screen.getByRole("heading", {
      name: /We help our clients succeed with innovative strategies./i,
    });
    expect(howWeWorkTitle).toBeInTheDocument();
  });

  it("should render how we work icon in sucess", () => {
    const howWeWorkIcon = screen.getByRole("img", {
      name: /we help our clients succeed with innovative strategies\.icon/i,
    });
    expect(howWeWorkIcon).toBeInTheDocument();
    expect(howWeWorkIcon).toHaveAttribute("src", "/images/star.svg");
  });

  it("should render how we work content in sucess", () => {
    const howWeWorkContent = screen.getByText(
      "Our team of experts is dedicated to delivering real results through creativity, strategic thinking, and technical expertise. Whether it‘s developing a new marketing campaign, designing a website, or creating a mobile app, we are always pushing the boundaries of what’s possible to help our clients stay ahead of the curve."
    );
    expect(howWeWorkContent).toBeInTheDocument();
  });

  it("should render the button in how we work section in success.", () => {
    const howWeWorkButton = screen.getByRole("button", { name: /OUR SERVICES/i });
    expect(howWeWorkButton).toBeInTheDocument();
  });

  //test our values section
  it("should render our values section in success", () => {
    const ourValuesTitle = screen.getByText("OUR VALUES");
    expect(ourValuesTitle).toBeInTheDocument();
  });

  it("should render our values image in success", () => {
    const ourValuesImage = screen.getByRole("img", { name: "our_values_image" });
    expect(ourValuesImage).toBeInTheDocument();
    expect(ourValuesImage).toHaveAttribute("src", "/images/our_value.jpeg");
    expect(ourValuesImage).toHaveAttribute("alt", "our values image");
  });

  //test our clients section
  it("should render our clients section in success", () => {
    const ourClientsText = screen.getByText("OUR CLIENTS");
    expect(ourClientsText).toBeInTheDocument();
  });

  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: /super food icon/i });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/super_food_icon.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "super food icon");
  });

  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: /creative studio icon/i });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/creative_studio_icon.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "creative studio icon");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: /in motion icon/i });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/in_motion_icon.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "in motion icon");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: /abstract icon/i });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/abstract_icon.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "abstract icon");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: /vision studio icon/i });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/vision_studio_icon.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "vision studio icon");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: /invision square icon/i });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/invision_square_icon.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "invision square icon");
  });

  it("should render contact section title in success", () => {
    const contactTitle = screen.getByText("Let’s bring your tech to the next level");
    expect(contactTitle).toBeInTheDocument();
  });

  it("should render icon in contact section success", () => {
    const contactIcon = screen.getByRole("img", {
      name: /let’s bring your tech to the next levelicon/i,
    });
    expect(contactIcon).toBeInTheDocument();
    expect(contactIcon).toHaveAttribute("src", "/images/design_icon.svg");
  });

  it("should render contact content text in success", () => {
    const contactContent = screen.getByText(
      "Contact us to explore partnership opportunities and discover how we can work together to drive innovation and create positive change."
    );
    expect(contactContent).toBeInTheDocument();
  });

  it("should render the header of latest news section success", () => {
    const latestNewsTitle = screen.getByRole("heading", { name: /latest news/i });
    const seeAllBtn = screen.getAllByRole("button", { name: /see all/i });
    const button = seeAllBtn[seeAllBtn.length - 1];
    expect(latestNewsTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(seeAllBtn[1]).toBeInTheDocument();
  });
});
