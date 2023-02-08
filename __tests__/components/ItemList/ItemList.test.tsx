import { render, screen } from "@testing-library/react";
import ListItem from "@/components/ItemList/ListItem";
import number_one from "../../../assets/number_one_icon.svg";

describe("ListItems", () => {
  const props = {
    title: "Connection",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: number_one,
    ifHasBottomBorder: true,
  };

  beforeEach(() => {
    render(
      <ListItem
        title={props.title}
        content={props.content}
        icon={props.icon}
        ifHasBottomBorder={props.ifHasBottomBorder}
      />
    );
  });

  it("should render list title in success", () => {
    const title = screen.getByText("Connection");
    expect(title).toBeInTheDocument();
  });

  it("should render content in success", () => {
    const content = screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
    expect(content).toBeInTheDocument();
  });
});
