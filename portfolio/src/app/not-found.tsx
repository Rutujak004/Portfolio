"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-display text-8xl md:text-9xl font-800 text-accent mb-4">404</h1>
      <h2 className="text-white text-2xl md:text-3xl font-700 mb-6">Page not found</h2>
      <p className="text-navy-400 mb-8 max-w-md mx-auto">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
