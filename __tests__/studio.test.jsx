import Studio from "../pages/studio";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Studio Page", () => {
  beforeEach(() => {
    render(<Studio />);
  });

  it("should render the heading of about us section", () => {
    const aboutUsHeading = screen.getByText("About Us");
    expect(aboutUsHeading).toBeInTheDocument();
  });

  it("should render the title of about us section", () => {
    const aboutUsTitle = screen.getByRole("heading", {
      name: /creative studio that inspires\./i,
    });
    expect(aboutUsTitle).toBeInTheDocument();
  });

  it("should render the about us section image", () => {
    const aboutUsImage = screen.getByAltText("studio page about us image");
    expect(aboutUsImage).toBeInTheDocument();
  });

  it("should render the heading of our values section", () => {
    const ourValuesHeading = screen.getByText("OUR VALUES");
    expect(ourValuesHeading).toBeInTheDocument();
  });

  it("should render the title of our values section", () => {
    const ourValuesTitle = screen.getByRole("heading", {
      name: /our vision is to connect with the world technology trough innovation\./i,
    });
    expect(ourValuesTitle).toBeInTheDocument();
  });

  it("should render the heading of our team section", () => {
    const ourTeamHeading = screen.getByText("OUR TEAM");
    expect(ourTeamHeading).toBeInTheDocument();
  });

  it("should render the content of our team section", () => {
    const ourTeamContent = screen.getByText(
      /a team comprised of talented individuals with a range of skills and expertise, working collaboratively towards achieving our goals\./i
    );
    expect(ourTeamContent).toBeInTheDocument();
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
});
