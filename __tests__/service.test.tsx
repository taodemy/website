import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Service, { getStaticProps } from "@/pages/services";
import { mockServicePageData } from "@/components/mockData/MockServiceData";

describe("Service", () => {
  beforeEach(() => {
    render(<Service servicePage={mockServicePageData.servicePage} />);
  });

  it("should render the title heading of service page in success", () => {
    const servicesTitleHeading = screen.getByText("SERVICES");
    expect(servicesTitleHeading).toBeInTheDocument();
  });

  it("should render the title info of service page in success", () => {
    const servicesTitleHeading = screen.getByRole("heading", {
      name: "We create true brands.",
    });
    expect(servicesTitleHeading).toBeInTheDocument();
  });

  it("should render the title banding button of service page in success", () => {
    const servicesTitleBrandingButton = screen.getByRole("button", {
      name: "BRANDING",
    });
    expect(servicesTitleBrandingButton).toBeInTheDocument();
  });

  it("should render the title design button of service page in success", () => {
    const servicesTitleDesignButton = screen.getByRole("button", {
      name: "DESIGN",
    });
    expect(servicesTitleDesignButton).toBeInTheDocument();
  });

  it("should render the title video button of service page in success", () => {
    const servicesTitleVideoButton = screen.getByRole("button", {
      name: "VIDEO",
    });
    expect(servicesTitleVideoButton).toBeInTheDocument();
  });

  it("should render the title Content button of service page in success", () => {
    const servicesTitleContentButton = screen.getByRole("button", {
      name: "CONTENT",
    });
    expect(servicesTitleContentButton).toBeInTheDocument();
  });
});
