import { Fragment } from "react";

// ─── Inline bold parser ───────────────────────────────────────────────────────
// Splits "some **bold** text" into [text, bold, text] React nodes.

function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-navy-200 font-600">{part.slice(2, -2)}</strong>;
    }
    // Render inline code: `code`
    if (part.includes("`")) {
      const codeParts = part.split(/(`[^`]+`)/g);
      return (
        <Fragment key={i}>
          {codeParts.map((cp, j) =>
            cp.startsWith("`") && cp.endsWith("`") ? (
              <code
                key={j}
                className="bg-navy-800 text-accent font-mono text-[0.85em] px-1.5 py-0.5 rounded"
              >
                {cp.slice(1, -1)}
              </code>
            ) : (
              <Fragment key={j}>{cp}</Fragment>
            )
          )}
        </Fragment>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

// ─── Text block renderer ──────────────────────────────────────────────────────
// Handles a text segment (non-code block): splits into lines and renders headings / paragraphs.

function renderTextBlock(text: string, blockIdx: number): React.ReactNode[] {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];
  let paraLines: string[] = [];

  const flushPara = (key: string) => {
    const content = paraLines.join(" ").trim();
    if (content) {
      nodes.push(
        <p key={key} className="text-navy-400 leading-relaxed mb-4">
          {parseInline(content)}
        </p>
      );
    }
    paraLines = [];
  };

  lines.forEach((line, lineIdx) => {
    const trimmed = line.trim();
    const key = `${blockIdx}-${lineIdx}`;

    if (trimmed.startsWith("### ")) {
      flushPara(`${key}-para`);
      nodes.push(
        <h3 key={key} className="font-display text-lg font-700 text-white mt-8 mb-3">
          {parseInline(trimmed.slice(4))}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      flushPara(`${key}-para`);
      nodes.push(
        <h2 key={key} className="font-display text-2xl font-700 text-white mt-10 mb-4">
          {parseInline(trimmed.slice(3))}
        </h2>
      );
    } else if (trimmed.startsWith("# ")) {
      flushPara(`${key}-para`);
      nodes.push(
        <h1 key={key} className="font-display text-3xl font-800 text-white mt-10 mb-5">
          {parseInline(trimmed.slice(2))}
        </h1>
      );
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      flushPara(`${key}-para`);
      nodes.push(
        <li key={key} className="flex items-start gap-2 text-navy-400 leading-relaxed mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
          {parseInline(trimmed.slice(2))}
        </li>
      );
    } else if (trimmed === "---") {
      flushPara(`${key}-para`);
      nodes.push(<hr key={key} className="border-navy-700 my-8" />);
    } else if (trimmed === "") {
      flushPara(`${key}-para`);
    } else {
      paraLines.push(trimmed);
    }
  });

  flushPara(`${blockIdx}-last`);
  return nodes;
}

// ─── Main component ───────────────────────────────────────────────────────────

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  // Split on triple-backtick fences.
  // Odd indices are code blocks; even indices are regular text.
  const segments = content.split(/```(?:[a-z]*\n?)?/g);

  const nodes = segments.map((segment, idx) => {
    if (idx % 2 === 1) {
      // Code block
      return (
        <pre
          key={`code-${idx}`}
          className="bg-navy-800 border border-navy-700 rounded-xl p-4 overflow-x-auto my-6 text-sm font-mono text-navy-200 leading-relaxed"
        >
          <code>{segment.trim()}</code>
        </pre>
      );
    }
    // Text block
    return <Fragment key={`text-${idx}`}>{renderTextBlock(segment, idx)}</Fragment>;
  });

  return (
    <article className="prose-custom">
      {nodes}
    </article>
  );
}
