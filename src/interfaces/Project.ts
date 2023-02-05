import type Image from './Image';
import type Link from './Link';

export default interface Project {
  jsonapi: {
    version: string;
  };
  links: Link;
  data: {
    type: string;
    id: number;
    attributes: {
      title: string;
      slug: string;
      body?: string;
      createdAt: Date;
      updatedAt: Date;
    };
    relationships: {
      image?: Image;
    };
    links: Link;
  };
}
