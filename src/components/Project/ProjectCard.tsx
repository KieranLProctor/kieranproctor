import React from 'react';

import type { ProjectData } from '@/interfaces/Project';

interface Props {
  project: ProjectData;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <li key={project.id} className="relative">
      <div className="group">
        <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img
            src={'temp'}
            alt=""
            className="pointer-cursor object-cover group-hover:opacity-75"
          />
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">
              View details for {project.attributes.title}
            </span>
          </button>
        </div>
        <p className="pointer-cursor mt-2 block truncate text-lg font-medium text-gray-900 group-hover:underline">
          {project.attributes.title}
        </p>
        <p className="pointer-cursor block font-medium text-gray-500">
          {project.attributes.body}
        </p>
      </div>
    </li>
  );
};

export default ProjectCard;
