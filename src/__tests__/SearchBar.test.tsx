import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";

describe("SearchBar component", () => {
  it("renders the search input", () => {
    render(<SearchBar loading={false} value="" onChange={() => {}} />);

    // Verifica que el input de búsqueda esté presente en el DOM
    const input = screen.getByTestId("search-input");
    expect(input).toBeInTheDocument();
  });

  it("does not display the results count when loading", () => {
    render(<SearchBar loading={true} value="" onChange={() => {}} />);

    // Verifica que el resultado no se muestre cuando loading es true
    const resultsCount = screen.queryByText(/RESULTS/i);
    expect(resultsCount).toBeNull();
  });

  it("displays the results count when loading is false", () => {
    render(
      <SearchBar loading={false} value="" onChange={() => {}} count={5} />
    );

    // Verifica que el contador de resultados sea visible cuando loading es false
    const resultsCount = screen.getByText("5 RESULTS");
    expect(resultsCount).toBeInTheDocument();
  });

  it("calls onChange when the search input value changes", () => {
    const handleChange = jest.fn();
    render(<SearchBar loading={false} value="" onChange={handleChange} />);

    // Simula un cambio en el valor del input
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "new search term" } });

    // Verifica que la función onChange haya sido llamada con el nuevo valor
    expect(handleChange).toHaveBeenCalledWith("new search term");
  });

  it("renders the singular result message when count is 1", () => {
    render(
      <SearchBar loading={false} value="" onChange={() => {}} count={1} />
    );

    // Verifica que se muestre "1 RESULT" cuando count es 1
    const resultsCount = screen.getByText("1 RESULT");
    expect(resultsCount).toBeInTheDocument();
  });
});
