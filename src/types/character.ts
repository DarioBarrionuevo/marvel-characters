import { ListResponse, ResourcesCollection } from "./api";
import { Comic } from "./comic";

export type CharactersListResponse = ListResponse<Character>;

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comic[];
  series: ResourcesCollection;
  stories: ResourcesCollection;
  events: ResourcesCollection;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Url {
  type: string;
  url: string;
}
