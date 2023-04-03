import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import ServiceItems from "@/components/ServicePage/ServicesItem";

describe("ServiceItem", () => {
  const ServiceItem = {
    service_name: "BRANDING",
    service_heading:
      "A strong brand is a tool to connect people with your brand all around the world.",
    service_info1: "test info1",
    service_info2: "test info2 ",
  };
  beforeEach(() => {
    render(
      <ServiceItems
        service_name={ServiceItem.service_name}
        service_heading={ServiceItem.service_heading}
        service_info1={ServiceItem.service_info1}
        service_info2={ServiceItem.service_info2}
        isPhoneSize={false}
      />
    );
  });

  it("should render the service name of service page in success", () => {
    const servicesName = screen.getByText("BRANDING");
    expect(servicesName).toBeInTheDocument();
  });

  it("should render the service heading of service page in success", () => {
    const servicesHeading = screen.getByText(
      "A strong brand is a tool to connect people with your brand all around the world."
    );
    expect(servicesHeading).toBeInTheDocument();
  });

  it("should render the serviceInfo1 of service page in success", () => {
    const servicesInfo1 = screen.getByText("test info1");
    expect(servicesInfo1).toBeInTheDocument();
  });

  it("should render the serviceInfo2 of service page in success", () => {
    const servicesInfo2 = screen.getByText("test info2");
    expect(servicesInfo2).toBeInTheDocument();
  });

  it("should render the service icon of service page in success", () => {
    const servicesBandingIcon = screen.getByRole("img", { name: "branding icon" });
    expect(servicesBandingIcon).toHaveAttribute("src", "/images/branding_icon.svg");
    expect(servicesBandingIcon).toHaveAttribute("alt", "branding icon");
    expect(servicesBandingIcon).toBeInTheDocument();
  });

  it("should render the service image of service page in success", () => {
    const servicesBandingImage = screen.getByRole("img", { name: "branding image" });
    expect(servicesBandingImage).toHaveAttribute("src", "/images/featured-work-sec-img-1.png");
    expect(servicesBandingImage).toHaveAttribute("alt", "branding image");
    expect(servicesBandingImage).toBeInTheDocument();
  });
});
