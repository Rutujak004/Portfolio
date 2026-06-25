import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Rutuja Patil",
  description: "Get in touch for projects, collaborations, or internships.",
};

// ─── Inline SVGs for Github and Linkedin ─────────────────────────────────────

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactPage() {
  const githubHandle = personalInfo.github.split("/").filter(Boolean).pop();
  const linkedinHandle = personalInfo.linkedin.split("/in/")[1]?.replace(/\/$/, "");

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* ── Page header ── */}
      <span className="section-label">Get In Touch</span>
      <h1 className="font-display text-4xl font-800 text-white mt-4">Contact</h1>
      <p className="text-navy-400 mt-3 max-w-2xl leading-relaxed">
        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
      </p>

      {/* ── Content Grid ── */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* LEFT COLUMN: Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Contact Info Card */}
          <div className="card">
            <h2 className="text-white font-600 mb-6">Reach me at</h2>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-navy-500 text-xs uppercase tracking-widest">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white text-sm mt-0.5 block hover:text-accent hover:underline transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-navy-500 text-xs uppercase tracking-widest">Phone</p>
                  <p className="text-white text-sm mt-0.5">{personalInfo.phone}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-navy-500 text-xs uppercase tracking-widest">Location</p>
                  <p className="text-white text-sm mt-0.5">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="card">
            <h2 className="text-white font-600 mb-4">Find me online</h2>
            <div className="space-y-3">
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-navy-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent">
                    <GithubIcon size={20} />
                  </span>
                </div>
                <div>
                  <p className="text-white font-500">GitHub</p>
                  <p className="text-navy-400 text-sm">@{githubHandle}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-navy-600 group-hover:text-accent ml-auto transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-navy-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent">
                    <LinkedinIcon size={20} />
                  </span>
                </div>
                <div>
                  <p className="text-white font-500">LinkedIn</p>
                  <p className="text-navy-400 text-sm">linkedin.com/in/{linkedinHandle}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-navy-600 group-hover:text-accent ml-auto transition-colors" />
              </a>
            </div>
          </div>

          {/* Availability Card */}
          <div className="card bg-accent/5 border-accent/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <h2 className="text-white font-600">Available for opportunities</h2>
            </div>
            <p className="text-navy-400 text-sm mt-2 leading-relaxed">
              Currently looking for internship and full-time roles in full-stack development and NLP.
            </p>
            <p className="text-navy-500 text-xs mt-3">
              Typical response time: within 24 hours
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="lg:col-span-3">
          <div className="card h-full">
            <h2 className="text-white font-700 text-xl mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent" />
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
