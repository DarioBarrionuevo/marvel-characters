import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ICON_SIZE } from "../components/Button/Button";

const DummyIcon = () => (
  <svg data-testid="dummy-icon">
    <circle cx="10" cy="10" r="10" fill="black" />
  </svg>
);

describe("Button", () => {
  it("renders the button with the correct icon", () => {
    render(
      <Button icon={DummyIcon} size={ICON_SIZE.MEDIUM}>
        Click me
      </Button>
    );

    // Verifica que el componente Button tenga el icono dentro
    expect(screen.getByTestId("icon-button")).toBeInTheDocument();

    // Verifica que el icono se haya renderizado (tienes que pasar un SVG)
    const icon = screen.getByTestId("icon-button").querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("applies the correct icon size", () => {
    const { rerender } = render(
      <Button icon={DummyIcon} size={ICON_SIZE.SMALL}>
        Click me
      </Button>
    );

    let icon = screen.getByTestId("icon-button").querySelector("svg");
    expect(icon).toHaveStyle(`width: 1.2rem`);

    rerender(
      <Button icon={DummyIcon} size={ICON_SIZE.LARGE}>
        Click me
      </Button>
    );
    icon = screen.getByTestId("icon-button").querySelector("svg");
    expect(icon).toHaveStyle(`width: 3.6rem`);
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button icon={DummyIcon} size={ICON_SIZE.MEDIUM} onClick={handleClick}>
        Click me
      </Button>
    );

    // Simula un clic en el botón
    fireEvent.click(screen.getByTestId("icon-button"));

    // Verifica que la función onClick haya sido llamada
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
