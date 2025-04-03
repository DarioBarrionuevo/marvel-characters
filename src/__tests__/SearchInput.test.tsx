import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../components/SearchInput/SearchInput"; // Ajusta la ruta si es necesario

describe("SearchInput component", () => {
  it("renders correctly with initial value", () => {
    const handleChange = jest.fn();
    const value = "Spider-Man";

    render(<SearchInput value={value} onChange={handleChange} />);

    // Verificar que el input tiene el valor correcto
    const input = screen.getByTestId("search-input");
    expect(input).toHaveValue(value);
  });

  it("renders with placeholder text", () => {
    const handleChange = jest.fn();

    render(<SearchInput onChange={handleChange} />);

    // Verificar que el placeholder está presente
    const input = screen.getByTestId("search-input");
    expect(input).toHaveAttribute("placeholder", "SEARCH A CHARACTER...");
  });

  it("calls onChange when the user types", () => {
    const handleChange = jest.fn();

    render(<SearchInput onChange={handleChange} />);

    const input = screen.getByTestId("search-input");

    // Simular un cambio en el input
    fireEvent.change(input, { target: { value: "Iron Man" } });

    // Verificar que la función onChange fue llamada con el valor correcto
    expect(handleChange).toHaveBeenCalledWith("Iron Man");
  });

  it("updates input value when prop `value` changes", () => {
    const handleChange = jest.fn();

    const { rerender } = render(
      <SearchInput value="Batman" onChange={handleChange} />
    );

    // Verificar que el valor inicial es 'Batman'
    const input = screen.getByTestId("search-input");
    expect(input).toHaveValue("Batman");

    // Rerender con un nuevo valor
    rerender(<SearchInput value="Superman" onChange={handleChange} />);

    // Verificar que el valor se actualizó correctamente
    expect(input).toHaveValue("Superman");
  });

  it("does not call onChange when the input is empty and no value is provided", () => {
    const handleChange = jest.fn();

    render(<SearchInput onChange={handleChange} />);

    const input = screen.getByTestId("search-input");

    // Simular un cambio vacío en el input
    fireEvent.change(input, { target: { value: "" } });

    // Verificar que la función onChange no es llamada si el valor no cambia
    expect(handleChange).not.toHaveBeenCalled();
  });
});
