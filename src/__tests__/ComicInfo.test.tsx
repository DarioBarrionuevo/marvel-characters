import { render, screen } from "@testing-library/react";
import ComicInfo from "../components/ComicInfo/ComicInfo";
import { Comic } from "@/types/comic";

const mockComic: Comic = {
  id: 1,
  digitalId: 123,
  title: "Comic 1",
  issueNumber: 1,
  variantDescription: "Variant A",
  description: "Description 1",
  modified: new Date(),
  isbn: "978-3-16-148410-0",
  upc: "123456789012",
  diamondCode: "ABC123",
  ean: "9783161484100",
  issn: "1234-5678",
  format: "Paperback",
  pageCount: 30,
  textObjects: [
    {
      type: "issue_summary",
      language: "en",
      text: "This is a summary of the comic.",
    },
  ],
  resourceURI: "http://example.com/resource",
  urls: [
    { type: "detail", url: "http://example.com/comic-details" },
    { type: "purchase", url: "http://example.com/buy" },
  ],
  series: { name: "Series 1", resourceURI: "http://example.com/series" },
  variants: [{ name: "Variant B", resourceURI: "http://example.com/variant" }],
  collections: [
    { name: "Collection A", resourceURI: "http://example.com/collection" },
  ],
  collectedIssues: [
    {
      name: "Collected Issue 1",
      resourceURI: "http://example.com/collected-issue",
    },
  ],
  dates: [
    { type: "onsaleDate", date: new Date("2021-10-10") },
    { type: "focDate", date: new Date() },
  ],
  prices: [
    { type: "printPrice", price: 9.99 },
    { type: "digitalPrice", price: 5.99 },
  ],
  thumbnail: { path: "http://example.com/thumbnail", extension: "jpg" },
  images: [
    { path: "http://example.com/image1", extension: "jpg" },
    { path: "http://example.com/image2", extension: "jpg" },
  ],
  creators: {
    available: 2,
    collectionURI: "http://example.com/creators",
    items: [
      {
        resourceURI: "http://example.com/creator1",
        name: "Creator 1",
        role: "Writer",
      },
      {
        resourceURI: "http://example.com/creator2",
        name: "Creator 2",
        role: "Artist",
      },
    ],
    returned: 1,
  },
  characters: {
    available: 3,
    collectionURI: "http://example.com/characters",
    items: [
      { resourceURI: "http://example.com/character1", name: "Character 1" },
      { resourceURI: "http://example.com/character2", name: "Character 2" },
      { resourceURI: "http://example.com/character3", name: "Character 3" },
    ],
    returned: 1,
  },
  stories: {
    available: 2,
    collectionURI: "http://example.com/stories",
    items: [
      {
        resourceURI: "http://example.com/story1",
        name: "Story 1",
        type: "interiorStory",
      },
      {
        resourceURI: "http://example.com/story2",
        name: "Story 2",
        type: "coverStory",
      },
    ],
    returned: 1,
  },
  events: {
    available: 1,
    collectionURI: "http://example.com/events",
    items: [{ resourceURI: "http://example.com/event1", name: "Event 1" }],
    returned: 1,
  },
};

describe("ComicInfo", () => {
  it("renders the comic information correctly", () => {
    render(<ComicInfo comic={mockComic} />);

    // Verificar si el título del comic es renderizado correctamente
    expect(screen.getByText(mockComic.title)).toBeInTheDocument();

    // Verificar si el año de lanzamiento (release year) se muestra correctamente
    const releaseDate = mockComic.dates.find(
      (date) => date.type === "onsaleDate"
    );
    const releaseYear = releaseDate
      ? new Date(releaseDate.date).getFullYear()
      : null;

    if (releaseYear) {
      expect(screen.getByText(releaseYear.toString())).toBeInTheDocument();
    }

    // Verificar si la imagen del comic se está renderizando correctamente
    const image = screen.getByAltText(mockComic.title) as HTMLImageElement;
    expect(image.src).toBe(
      `${mockComic.thumbnail.path}.${mockComic.thumbnail.extension}`
    );
  });

  it("does not render release year if it's not available", () => {
    const comicWithoutReleaseDate = { ...mockComic, dates: [] };
    render(<ComicInfo comic={comicWithoutReleaseDate} />);

    // Verificar que no se muestra el año de lanzamiento si no está presente
    expect(screen.queryByText(/^\d{4}$/)).toBeNull();
  });
});
