import { ListResponse, Resource, ResourcesCollection } from "./api";

export type ComicsListResponse = ListResponse<Comic>;

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Resource;
  variants: Resource[];
  collections: Resource[];
  collectedIssues: Resource[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: ResourcesCollection;
  characters: ResourcesCollection;
  stories: ResourcesCollection;
  events: ResourcesCollection;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface ComicDate {
  type: string;
  date: Date;
}

interface ComicPrice {
  type: string;
  price: number;
}

interface Image {
  path: string;
  extension: string;
}
