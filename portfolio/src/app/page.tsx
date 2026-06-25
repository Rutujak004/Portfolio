"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Download, Mail, Layers, Cpu, PenTool, Code2, LucideIcon,
  GraduationCap, MapPin, Briefcase, Server, Monitor, Brain, Wrench,
  ExternalLink,
} from "lucide-react";
import { personalInfo, skills, experience, projects } from "@/data";
import { RevealOnScroll } from "@/components";

// Inline GitHub SVG (lucide-react v1.x has no Github icon)
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// ─── Icon helpers ─────────────────────────────────────────────────────────────

const focusIconMap: Record<string, LucideIcon> = {
  Layers, Cpu, PenTool, Code2,
};

const skillIconMap: Record<string, LucideIcon> = {
  Server, Monitor, BrainCircuit: Brain, Wrench,
};

function getFocusIcon(name: string): LucideIcon {
  return focusIconMap[name] ?? Layers;
}

function getSkillIcon(name: string): LucideIcon {
  return skillIconMap[name] ?? Server;
}

// ─── Initials fallback ───────────────────────────────────────────────────────

function InitialsFallback() {
  const initials = (personalInfo.name[0] ?? "") + (personalInfo.lastName[0] ?? "");
  return (
    <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-700 to-navy-800 border-4 border-navy-800 flex items-center justify-center">
      <span className="font-display font-800 text-5xl text-accent select-none">
        {initials}
      </span>
    </div>
  );
}

// ─── Stat card ───────────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-navy-800 rounded-xl p-4 text-center border border-navy-700">
      <div className="text-2xl font-800 text-accent">{value}</div>
      <div className="text-xs text-navy-400 mt-1">{label}</div>
    </div>
  );
}

// ─── Quick-fact row ──────────────────────────────────────────────────────────

function FactRow({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-navy-700 last:border-0">
      <Icon className="w-4 h-4 text-accent flex-shrink-0" />
      <span className="text-sm text-navy-300">{text}</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center bg-navy-950 relative overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(99,102,241,0.08)_0%,_transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

          {/* ── LEFT ── */}
          <div className="flex flex-col">
            {/* Availability badge */}
            <div
              className="animate-fade-up inline-flex items-center gap-2 mb-6 w-fit bg-navy-800 border border-navy-700 rounded-full px-4 py-1.5 text-sm text-navy-300"
              style={{ animationDelay: "0ms", opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Available for opportunities
            </div>

            {/* Name + title */}
            <div className="animate-fade-up" style={{ animationDelay: "100ms", opacity: 0 }}>
              <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight">
                {personalInfo.name} {personalInfo.lastName}
              </h1>
              <p className="font-display text-2xl md:text-3xl font-400 text-accent mt-1">
                {personalInfo.title}
              </p>
            </div>

            {/* Tagline */}
            <p
              className="animate-fade-up text-navy-400 text-lg leading-relaxed mt-4 max-w-md"
              style={{ animationDelay: "200ms", opacity: 0 }}
            >
              {personalInfo.tagline}
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-up mt-8 flex gap-4 flex-wrap"
              style={{ animationDelay: "300ms", opacity: 0 }}
            >
              <a href={personalInfo.cvUrl} download className="btn-primary" id="hero-download-cv">
                <Download size={18} />
                Download CV
              </a>
              <Link href="/contact" className="btn-outline" id="hero-contact">
                <Mail size={18} />
                Contact Me
              </Link>
            </div>

            {/* Focus pills */}
            <div
              className="animate-fade-up mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: "400ms", opacity: 0 }}
            >
              {personalInfo.focuses.map((focus) => {
                const Icon = getFocusIcon(focus.icon);
                return (
                  <span
                    key={focus.label}
                    className="bg-navy-800 border border-navy-700 rounded-full px-4 py-1.5 text-sm text-navy-300 flex items-center gap-2"
                  >
                    <Icon size={14} className="text-accent" />
                    {focus.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT — photo ── */}
          <div
            className="animate-fade-up flex justify-center"
            style={{ animationDelay: "200ms", opacity: 0 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse" />
              {personalInfo.photoUrl ? (
                <Image
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-full object-cover border-4 border-navy-800"
                  priority
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : (
                <InitialsFallback />
              )}
              <div
                className="absolute -bottom-2 -right-2 bg-accent text-white text-xs font-600 px-3 py-1.5 rounded-full shadow-lg select-none"
                id="hero-open-to-work-badge"
              >
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT ME
      ════════════════════════════════════════════════ */}
      <section id="about" className="py-24 bg-navy-950 border-t border-navy-800">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-6">
            <span className="section-label">About Me</span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
            {/* Left — bio + stats */}
            <div>
              <h2 className="text-3xl font-display font-700 text-white">
                Building things that work and feel right
              </h2>
              <p className="text-navy-400 leading-relaxed mt-4">{personalInfo.bio}</p>
              <p className="text-navy-400 leading-relaxed mt-4">{personalInfo.bio2}</p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <StatCard value="3+" label="Projects Built" />
                <StatCard value="1+" label="Years Experience" />
                <StatCard value="10+" label="Technologies" />
              </div>
            </div>

            {/* Right — quick facts card */}
            <div className="card">
              <p className="text-white font-600 mb-4">Quick Facts</p>
              <FactRow icon={GraduationCap} text="BE Computer Engineering, SPPU" />
              <FactRow icon={MapPin} text={personalInfo.location} />
              <FactRow icon={Code2} text="Full-Stack · NLP · UI/UX" />
              <FactRow icon={Briefcase} text="Open to opportunities" />
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ════════════════════════════════════════════════
          SKILLS
      ════════════════════════════════════════════════ */}
      <section id="skills" className="py-24 bg-navy-900/50">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-6">
            <span className="section-label">Skills</span>
          <h2 className="text-3xl font-display font-700 text-white">
            What I work with
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group, i) => {
              const Icon = getSkillIcon(group.icon);
              return (
                <div
                  key={group.category}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                >
                  {/* Icon circle */}
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>

                  {/* Category */}
                  <p className="text-white font-600 mt-4 mb-3">{group.category}</p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ════════════════════════════════════════════════
          EXPERIENCE TIMELINE
      ════════════════════════════════════════════════ */}
      <section id="experience" className="py-24 bg-navy-950 border-t border-navy-800">
        <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label">Experience</span>
          <h2 className="text-3xl font-display font-700 text-white">My journey so far</h2>

          {/* Timeline */}
          <div className="mt-10 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-navy-700 pl-12 flex flex-col gap-10">
            {experience.map((item, i) => (
              <div
                key={i}
                className="relative animate-fade-up"
                style={{ animationDelay: `${i * 120}ms`, opacity: 0 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-navy-800 border-2 border-accent flex-shrink-0" />

                {/* Year */}
                <span className="tag-accent inline-block mb-2">{item.year}</span>

                {/* Role */}
                <p className="text-white font-600 text-lg">{item.role}</p>

                {/* Org */}
                <p className="text-navy-400 text-sm mt-0.5">{item.org}</p>

                {/* Desc */}
                <p className="text-navy-400 text-sm leading-relaxed mt-2 whitespace-pre-line">{item.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ════════════════════════════════════════════════
          FEATURED PROJECTS
      ════════════════════════════════════════════════ */}
      <section id="projects-preview" className="py-24 bg-navy-900/50">
        <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label">Featured Projects</span>
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-display font-700 text-white">Things I&apos;ve built</h2>
            <Link href="/projects" className="text-accent hover:underline text-sm">
              View All Projects →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((project, i) => (
                <div
                  key={project.id}
                  className="card group relative animate-fade-up"
                  style={{ animationDelay: `${i * 120}ms`, opacity: 0 }}
                >
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={project.status === "Live" ? "tag-accent" : "tag"}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-700 text-lg mt-2 pr-16">{project.title}</h3>

                  {/* Short desc */}
                  <p className="text-navy-400 text-sm mt-2 leading-relaxed">{project.shortDesc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 pt-4 border-t border-navy-700 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-1.5 px-3 inline-flex items-center gap-1.5"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs py-1.5 px-3 inline-flex items-center gap-1.5"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/5 border-y border-accent/10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-700 text-white">
            Let&apos;s build something together
          </h2>
          <p className="text-navy-400 mt-3">
            I&apos;m currently open to internship and full-time opportunities.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary" id="cta-get-in-touch">
              <Mail size={18} />
              Get in Touch
            </Link>
            <Link href="/projects" className="btn-outline" id="cta-see-projects">
              See All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
