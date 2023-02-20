import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  //test hero section
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

  //test what we do section
  it("renders what we do txt", () => {
    const text = screen.getByText("WHAT WE DO");
    expect(text).toBeInTheDocument();
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
    const ourClientsIcon = screen.getByRole("img", { name: "icon1" });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/icon1.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "icon1");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: "icon2" });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/icon2.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "icon2");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: "icon3" });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/icon3.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "icon3");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: "icon4" });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/icon4.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "icon4");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: "icon5" });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/icon5.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "icon5");
  });
  it("should render our clients icon in success", () => {
    const ourClientsIcon = screen.getByRole("img", { name: "icon6" });
    expect(ourClientsIcon).toBeInTheDocument();
    expect(ourClientsIcon).toHaveAttribute("src", "/icons/icon6.svg");
    expect(ourClientsIcon).toHaveAttribute("alt", "icon6");
  });

  //test contact section
  it("should render contact section title in success", () => {
    const contactTitle = screen.getByText("Let’s bring your brand to the next level");
    expect(contactTitle).toBeInTheDocument();
  });

  it("should render icon in contact section success", () => {
    const contactIcon = screen.getByRole("img", { name: "contact_arrows_icon" });
    expect(contactIcon).toBeInTheDocument();
    expect(contactIcon).toHaveAttribute("src", "/images/arrows.svg");
    expect(contactIcon).toHaveAttribute("alt", "contact arrows icon");
  });

  it("should render contact content text in success", () => {
    const contactContent = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );
    expect(contactContent).toBeInTheDocument();
  });

  it("should render the header of latest news section success", () => {
    const latestNewsTitle = screen.getByRole("heading", { name: /latest news/i });
    const seeAllBtn = screen.getByRole("button", { name: /see all/i });
    expect(latestNewsTitle).toBeInTheDocument();
    expect(seeAllBtn).toBeInTheDocument();
  });
});
