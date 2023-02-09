import { render, screen } from "@testing-library/react";
import ListItem from "@/components/ItemList";
import number_one from "@/public/number_one_icon.svg";

describe("ListItems", () => {
  const props = {
    title: "Connection",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: number_one,
  };

  beforeEach(() => {
    render(<ListItem title={props.title} content={props.content} icon={props.icon} />);
  });

  it("should render list title in success", () => {
    const title = screen.getByText("CONNECTION");
    expect(title).toBeInTheDocument();
  });

  it("should render content in success", () => {
    const content = screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
    expect(content).toBeInTheDocument();
  });
});
