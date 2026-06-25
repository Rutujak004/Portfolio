"use client";

import { ExternalLink } from "lucide-react";
import type { Project } from "@/data";

// ─── Inline GitHub SVG (not in lucide-react v1.x) ───────────────────────────

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Project["status"] }) {
  if (status === "Live") return <span className="tag-accent">Live</span>;
  if (status === "Open Source")
    return (
      <span className="text-xs font-mono px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
        Open Source
      </span>
    );
  return <span className="tag">Completed</span>;
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card relative flex flex-col" id={`project-${project.id}`}>
      {/* Top row */}
      <div className="flex justify-between items-start gap-4">
        <h2 className="text-white font-700 text-xl leading-snug">{project.title}</h2>
        <div className="flex-shrink-0">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Short desc */}
      <p className="text-navy-400 text-sm mt-2 leading-relaxed">{project.shortDesc}</p>

      {/* Highlights */}
      <div className="mt-4">
        <p className="text-xs text-navy-500 uppercase tracking-widest mb-2">Key Highlights</p>
        <ul className="space-y-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-navy-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Full desc */}
      <p className="mt-4 text-sm text-navy-500 leading-relaxed italic">{project.fullDesc}</p>

      {/* Bottom buttons — pushed to bottom via mt-auto */}
      <div className="mt-auto pt-4 border-t border-navy-800 flex gap-3 flex-wrap mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-sm py-2 inline-flex items-center gap-2"
          id={`project-${project.id}-github`}
        >
          <GithubIcon size={16} />
          View Code on GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 inline-flex items-center gap-2"
            id={`project-${project.id}-demo`}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface ProjectFilterProps {
  projects: Project[];
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {projects.map((project, i) => (
        <div
          key={project.id}
          className="animate-fade-up"
          style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
