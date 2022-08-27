import type Image from './Image';

export default interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  image: Image;
  publishedAt: string; // This will be parsed using moment.js.
}
