'use client'
import Link from "next/link";
import React, { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: {
    title: string;
    desc: string;
    roleClarity?: string;
    githubLink?: string;
    liveLink?: string;
    stack: string[];
    image: { url: string };
    hasCaseStudy?: boolean;
    problem?: string;
    role?: string;
    keyDecisions?: string[];
    outcome?: string;
    retrospective?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-1 group border-b py-7">
        <img
          src={project.image.url}
          className="rounded-md object-cover grayscale ease-in duration-200 group-hover:grayscale-0 aspect-[1.7/1]"
          alt={`Screenshot of ${project.title}`}
        />

        <h4 className="text-lg font-semibold mt-2">{project.title}</h4>
        <p>{project.desc}</p>

        {project.roleClarity && (
          <p className="text-sm text-[#272727]/70 italic mt-1">{project.roleClarity}</p>
        )}

        <div className="flex gap-2 flex-wrap mt-2">
          {project.stack.map((el: string) => (
            <span key={el} className="text-sm px-3 p-1 rounded-full border">
              {el}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-3 items-center">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              className="flex items-center gap-1 text-sm hover:underline"
              aria-label={`Live demo of ${project.title}`}
            >
              <FiExternalLink size={14} />
              Live
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-1 text-sm hover:underline"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FaGithub size={14} />
              Code
            </Link>
          )}
          {project.hasCaseStudy && (
            <button
              onClick={() => setShowCaseStudy(true)}
              className="text-sm px-3 py-1 rounded-md bg-[#272727] text-white hover:bg-[#272727]/80 transition-colors"
            >
              Case Study
            </button>
          )}
        </div>
      </div>

      {project.hasCaseStudy && (
        <CaseStudyModal
          isOpen={showCaseStudy}
          onClose={() => setShowCaseStudy(false)}
          title={project.title}
          problem={project.problem}
          role={project.role}
          keyDecisions={project.keyDecisions}
          outcome={project.outcome}
          retrospective={project.retrospective}
        />
      )}
    </>
  );
};

export default ProjectCard;
