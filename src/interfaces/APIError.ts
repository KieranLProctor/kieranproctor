import type Jsonapi from './Jsonapi';

export default interface APIError {
  jsonapi: Jsonapi;
  errors: Error[];
}

export interface Error {
  detail: string;
  status: string;
  title: string;
}
