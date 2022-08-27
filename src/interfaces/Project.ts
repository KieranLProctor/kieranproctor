import type Image from './Image';

export default interface Project {
  id: number;
  title: string;
  description: string;
  urls: {
    url: string;
    type: string;
  };
  image: Image;
}
