import { render, screen } from "@testing-library/react";
import InfoBlock from "@/components/general/InfoBlock/InfoBlock";
import "@testing-library/jest-dom";

describe("Information Block", () => {
  const InfoProps = {
    sectionName: "test",
    title: "testing",
    iconPath: "/images/arrows.svg",
    blockType: "normal",
    content: "get the test",
    isPhoneSize: Boolean,
  };

  it("should render testing title in success", () => {
    render(
      <InfoBlock
        sectionName={InfoProps.sectionName}
        title={InfoProps.title}
        iconPath={InfoProps.iconPath}
        blockType={"normal"}
        content={InfoProps.content}
        isPhoneSize={true}
      />
    );
    const testingTitle = screen.getByRole("heading", {
      name: /testing/i,
    });
    expect(testingTitle).toBeInTheDocument();
  });

  it("should render icon in testing section success", () => {
    render(
      <InfoBlock
        sectionName={InfoProps.sectionName}
        title={InfoProps.title}
        iconPath={InfoProps.iconPath}
        blockType={"normal"}
        content={InfoProps.content}
        isPhoneSize={true}
      />
    );
    const testingIcon = screen.getByRole("img", {
      name: /testing/i,
    });
    expect(testingIcon).toBeInTheDocument();
    expect(testingIcon).toHaveAttribute("src", "/images/arrows.svg");
  });

  it("should render testing content text in success", () => {
    render(
      <InfoBlock
        sectionName={InfoProps.sectionName}
        title={InfoProps.title}
        iconPath={InfoProps.iconPath}
        blockType={"normal"}
        content={InfoProps.content}
        isPhoneSize={true}
      />
    );
    const testingContent = screen.getByText("get the test");
    expect(testingContent).toBeInTheDocument();
  });

  it("should render normal and phone size h1 in correct style", () => {
    render(
      <InfoBlock
        sectionName={InfoProps.sectionName}
        title={InfoProps.title}
        iconPath={InfoProps.iconPath}
        blockType={"normal"}
        content={InfoProps.content}
        isPhoneSize={true}
      />
    );
    const heading = screen.getByText("testing");
    expect(heading).toHaveClass("global__heading-h2");
  });

  it("should render normal and not phone size h1 in correct style", () => {
    render(
      <InfoBlock
        sectionName={InfoProps.sectionName}
        title={InfoProps.title}
        iconPath={InfoProps.iconPath}
        blockType={"normal"}
        content={InfoProps.content}
        isPhoneSize={false}
      />
    );
    const heading = screen.getByText("testing");
    expect(heading).toHaveClass("global__uppercase-heading--medium");
  });

  it("should render normal and not phone size h1 in correct style", () => {
    render(
      <InfoBlock
        sectionName={InfoProps.sectionName}
        title={InfoProps.title}
        iconPath={InfoProps.iconPath}
        blockType={"smallHeading"}
        content={InfoProps.content}
        isPhoneSize={true}
      />
    );
    const heading = screen.getByText("testing");
    expect(heading).toHaveClass("global__heading-h2");
  });

  it("should render normal and not phone size h1 in correct style", () => {
    render(
      <InfoBlock
        sectionName={InfoProps.sectionName}
        title={InfoProps.title}
        iconPath={InfoProps.iconPath}
        blockType={"smallHeading"}
        content={InfoProps.content}
        isPhoneSize={false}
      />
    );
    const heading = screen.getByText("testing");
    expect(heading).toHaveClass("global__uppercase-heading--medium");
  });
});
