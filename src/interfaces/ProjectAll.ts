import type Jsonapi from './Jsonapi';
import type { ProjectData } from './Project';

export default interface ProjectAll {
  jsonapi: Jsonapi;
  data: ProjectData[];
}
