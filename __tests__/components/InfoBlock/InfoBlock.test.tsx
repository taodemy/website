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
  };

  beforeEach(() => {
    render(
      <InfoBlock
        sectionName={InfoProps.sectionName}
        title={InfoProps.title}
        iconPath={InfoProps.iconPath}
        blockType={"normal"}
        content={InfoProps.content}
      />
    );
  });

  it("should render testing title in success", () => {
    const testingTitle = screen.getByRole("heading", {
      name: /testing/i,
    });
    expect(testingTitle).toBeInTheDocument();
  });

  it("should render icon in testing section success", () => {
    const testingIcon = screen.getByRole("img", {
      name: /testing/i,
    });
    expect(testingIcon).toBeInTheDocument();
    expect(testingIcon).toHaveAttribute("src", "/images/arrows.svg");
  });

  it("should render testing content text in success", () => {
    const testingContent = screen.getByText("get the test");
    expect(testingContent).toBeInTheDocument();
  });
});
