import { getProjects } from "@/sanity/query";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const ProjectsPage = async () => {
  const data = await getProjects();

  return (
    <div className="mt-5 mb-10">
      <h3 className="text-xl font-semibold">Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        {data.map((project: any) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
