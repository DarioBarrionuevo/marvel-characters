import Text from "../components/Text/Text";
import { render, screen } from "@testing-library/react";

describe("Text component", () => {
  it("renders the children correctly", () => {
    render(<Text level="h1">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders an h1 element when the level is 'h1'", () => {
    render(<Text level="h1">Header 1</Text>);
    const element = screen.getByText("Header 1");
    expect(element.tagName).toBe("H1");
  });

  it("renders an h2 element when the level is 'h2'", () => {
    render(<Text level="h2">Header 2</Text>);
    const element = screen.getByText("Header 2");
    expect(element.tagName).toBe("H2");
  });

  it("renders a p element when the level is 'p1'", () => {
    render(<Text level="p1">Paragraph 1</Text>);
    const element = screen.getByText("Paragraph 1");
    expect(element.tagName).toBe("P");
  });

  it("applies correct typography styles based on the level", () => {
    render(<Text level="h1">Styled Header</Text>);
    const element = screen.getByText("Styled Header");
    expect(element).toHaveStyle("font-size: 4rem");
  });
});
