import { render, screen } from "@testing-library/react";
import Comics from "../components/Comics/Comics";
import { Comic } from "@/types/comic";

const mockComics: Comic[] = [
  {
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
    variants: [
      { name: "Variant B", resourceURI: "http://example.com/variant" },
    ],
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
      { type: "onsaleDate", date: new Date() },
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
  },
  {
    id: 2,
    digitalId: 124,
    title: "Comic 2",
    issueNumber: 2,
    variantDescription: "Variant B",
    description: "Description 2",
    modified: new Date(),
    isbn: "978-3-16-148411-7",
    upc: "987654321098",
    diamondCode: "XYZ456",
    ean: "9783161484117",
    issn: "9876-5432",
    format: "Hardcover",
    pageCount: 50,
    textObjects: [
      {
        type: "issue_summary",
        language: "en",
        text: "This is a summary of the second comic.",
      },
    ],
    resourceURI: "http://example.com/resource2",
    urls: [
      { type: "detail", url: "http://example.com/comic2-details" },
      { type: "purchase", url: "http://example.com/buy2" },
    ],
    series: { name: "Series 2", resourceURI: "http://example.com/series2" },
    variants: [
      { name: "Variant C", resourceURI: "http://example.com/variant2" },
    ],
    collections: [
      { name: "Collection B", resourceURI: "http://example.com/collection2" },
    ],
    collectedIssues: [
      {
        name: "Collected Issue 2",
        resourceURI: "http://example.com/collected-issue2",
      },
    ],
    dates: [
      { type: "onsaleDate", date: new Date() },
      { type: "focDate", date: new Date() },
    ],
    prices: [
      { type: "printPrice", price: 12.99 },
      { type: "digitalPrice", price: 7.99 },
    ],
    thumbnail: { path: "http://example.com/thumbnail2", extension: "jpg" },
    images: [
      { path: "http://example.com/image3", extension: "jpg" },
      { path: "http://example.com/image4", extension: "jpg" },
    ],
    creators: {
      available: 2,
      collectionURI: "http://example.com/creators2",
      items: [
        {
          resourceURI: "http://example.com/creator3",
          name: "Creator 3",
          role: "Writer",
        },
        {
          resourceURI: "http://example.com/creator4",
          name: "Creator 4",
          role: "Artist",
        },
      ],
      returned: 1,
    },
    characters: {
      available: 3,
      collectionURI: "http://example.com/characters2",
      items: [
        { resourceURI: "http://example.com/character4", name: "Character 4" },
        { resourceURI: "http://example.com/character5", name: "Character 5" },
        { resourceURI: "http://example.com/character6", name: "Character 6" },
      ],
      returned: 1,
    },
    stories: {
      available: 2,
      collectionURI: "http://example.com/stories2",
      items: [
        {
          resourceURI: "http://example.com/story3",
          name: "Story 3",
          type: "interiorStory",
        },
        {
          resourceURI: "http://example.com/story4",
          name: "Story 4",
          type: "coverStory",
        },
      ],
      returned: 1,
    },
    events: {
      available: 1,
      collectionURI: "http://example.com/events2",
      items: [{ resourceURI: "http://example.com/event2", name: "Event 2" }],
      returned: 1,
    },
  },
];

describe("Comics component", () => {
  it("renders the Comics heading", () => {
    render(<Comics comics={mockComics} />);
    const heading = screen.getByRole("heading", { name: /Comics/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the correct number of ComicInfo components", () => {
    render(<Comics comics={mockComics} />);
    const comicInfoElements = screen.getAllByRole("listitem"); // Asumiendo que ComicInfo está envuelto en un <li>
    expect(comicInfoElements).toHaveLength(mockComics.length);
  });

  it("renders each comic's title", () => {
    render(<Comics comics={mockComics} />);
    mockComics.forEach((comic) => {
      const title = screen.getByText(comic.title);
      expect(title).toBeInTheDocument();
    });
  });

  it("applies correct styles to the container", () => {
    render(<Comics comics={mockComics} />);
    const container = screen.getByRole("list"); // Asumiendo que los cómics están dentro de una lista desordenada (<ul>)
    expect(container).toHaveStyle("display: flex");
    expect(container).toHaveStyle("gap: var(--spacing-16)");
    expect(container).toHaveStyle("overflow-x: auto");
  });
});
