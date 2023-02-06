import React from 'react';

import type { ProjectData } from '@/interfaces/Project';

import ProjectCard from './ProjectCard';

interface Props {
  projects?: ProjectData[];
}

const ProjectContainer: React.FC<Props> = ({ projects }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 tablet:grid-cols-3 tablet:gap-x-6 desktop:grid-cols-4"
    >
      {projects?.map((project: ProjectData) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectContainer;
