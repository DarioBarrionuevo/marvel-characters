export interface ListResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: PaginatedResults<T>;
  etag: string;
}

export interface PaginatedResults<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}

export interface ResourcesCollection {
  available: number;
  collectionURI: string;
  items: Resource[];
  returned: number;
}

export interface Resource {
  resourceURI: string;
  name: string;
  type?: string;
  role?: string;
}
