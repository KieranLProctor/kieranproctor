import type Image from './Image';
import type Jsonapi from './Jsonapi';
import type Link from './Link';

export default interface Project {
  jsonapi?: Jsonapi;
  links: Link;
  data: ProjectData;
}

export interface ProjectData {
  type: string;
  id: string;
  attributes: ProjectAttributes;
  relationships?: ProjectRelationships;
  links: Link;
}

export interface ProjectAttributes {
  title: string;
  slug: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectRelationships {
  image: Image;
}
