import { render, screen } from "@testing-library/react";
import ListItem from "@/components/general/ItemList";

describe("ListItems", () => {
  const props = {
    title: "CONNECTION",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: "/images/number_one_icon.svg",
  };

  beforeEach(() => {
    render(
      <ListItem
        title={props.title}
        content={props.content}
        icon={props.icon}
        height={50}
        width={50}
      />
    );
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
