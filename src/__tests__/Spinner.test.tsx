import { render, screen } from "@testing-library/react";
import Spinner from "../components/Spinner/Spinner"; // Ajusta la ruta si es necesario

describe("Spinner component", () => {
  it("renders the spinner with the image", () => {
    render(<Spinner />);

    // Verificar que la imagen está presente
    const image = screen.getByAltText("Captain America Shield");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/shield.svg");
  });

  it("applies the spinning animation", () => {
    render(<Spinner />);

    // Verificar que el contenedor tiene la animación de rotación aplicada
    const spinnerContainer = screen.getByRole("img").parentElement; // El contenedor es el padre de la imagen
    expect(spinnerContainer).toHaveStyle(
      "animation: fvtopB 2s linear infinite"
    );
  });

  it("renders with the correct size", () => {
    render(<Spinner />);

    const spinnerContainer = screen.getByRole("img").parentElement;

    // Verificar que el tamaño del contenedor es de 80x80px
    expect(spinnerContainer).toHaveStyle("width: 80px");
    expect(spinnerContainer).toHaveStyle("height: 80px");
  });
});
