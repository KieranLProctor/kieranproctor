import type Jsonapi from './Jsonapi';
import type Link from './Link';

export default interface Image {
  jsonapi?: Jsonapi;
  links: Link;
  data: Data;
}

export interface Data {
  type: string;
  id: string;
  attributes: Attributes;
  links: Link;
}

export interface Attributes {
  url: string;
  imageableType: string;
  imageableId: number;
  createdAt: Date;
  updatedAt: Date;
}
