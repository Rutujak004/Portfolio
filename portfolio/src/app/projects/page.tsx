import type { Metadata } from "next";
import { projects } from "@/data";
import { personalInfo } from "@/data";
import ProjectFilter from "@/components/ProjectFilter";

export const metadata: Metadata = {
  title: "Projects — Rutuja Patil | Next.js, Django, NLP",
  description:
    "A collection of full-stack apps, NLP tools, and open-source projects built by " +
    `${personalInfo.name} ${personalInfo.lastName}.`,
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* ── Page header ── */}
      <span className="section-label">My Work</span>
      <h1 className="font-display text-4xl font-800 text-white">Projects</h1>
      <p className="text-navy-400 mt-3 max-w-xl">
        A collection of things I&apos;ve built — from full-stack apps to NLP tools.
      </p>
      <div className="border-b border-navy-800 mt-8" />

      {/* ── Filter + Grid (client component) ── */}
      <ProjectFilter projects={projects} />
    </div>
  );
}
