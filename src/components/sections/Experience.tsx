// src/components/ExperienceSection.tsx
"use client";

import { useState, KeyboardEvent, MouseEvent } from "react";
import { experience } from "@/lib/experience";

type LinkItem = { label: string; url: string };
type ExperienceEntry = {
  title: string;
  company?: string;
  date?: string;
  location?: string;
  description?: string;
  quickImpact?: string;
  achievements?: string[];
  technologies?: string[];
  links?: LinkItem[];
};

const VISIBLE_TECH = 3;

/** Return a short, sentence-based summary without cutting words */
function getQuickImpact(entry: ExperienceEntry): string {
  if (entry.quickImpact && typeof entry.quickImpact === "string") return entry.quickImpact.trim();

  const fromAchievements =
    Array.isArray(entry.achievements) && entry.achievements.length ? entry.achievements[0] : "";

  const candidate = (entry.description || "").trim() || fromAchievements;

  const match = candidate.match(/^(.*?[\.!\?])\s+/);
  const sentence = match ? match[1] : candidate;

  if (sentence.length <= 180) return sentence;
  const cut = sentence.slice(0, 180);
  const lastSpace = cut.lastIndexOf(" ");
  return (cut.slice(0, lastSpace > 120 ? lastSpace : 180) + "…").trim();
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-xs font-medium">
      {label}
    </span>
  );
}

function LinkButton({ link, onClick }: { link: LinkItem; onClick?: (e: MouseEvent) => void }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-white text-sm font-medium shadow transition bg-gradient-to-r from-[#654ea3] to-[#eaafc8]"
    >
      {link.label}
    </a>
  );
}

export default function ExperienceSection() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((p) => ({ ...p, [i]: !p[i] }));

  const onCardKey = (i: number) => (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(i);
    }
  };

  const stop = (e: MouseEvent) => e.stopPropagation();

  // Keep original indices when splitting into columns
  const indexed = (experience as ExperienceEntry[]).map((e, i) => ({ e, i }));
  const left = indexed.filter((x) => x.i % 2 === 0);
  const right = indexed.filter((x) => x.i % 2 === 1);

  const Card = ({ entry, idx }: { entry: ExperienceEntry; idx: number }) => {
    const isOpen = !!open[idx];
    const summary = getQuickImpact(entry);
    const tech = entry.technologies ?? [];
    const renderTech = isOpen ? tech : tech.slice(0, VISIBLE_TECH);
    const hiddenCount = Math.max(tech.length - VISIBLE_TECH, 0);
    const panelId = `exp-panel-${idx}`;

    return (
      <article
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => toggle(idx)}
        onKeyDown={onCardKey(idx)}
        className="relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#654ea3]/40"
      >
        <div className="relative z-10 p-6 md:p-8">
          <header className="mb-3">
            <h3 className="text-2xl font-bold text-gray-900 leading-tight">{entry.title}</h3>
            {entry.company && <p className="text-lg text-gray-600 font-medium">{entry.company}</p>}
            <div className="mt-1 flex flex-wrap items-center gap-2">
              {entry.date && <span className="text-sm text-[#654ea3] font-semibold">{entry.date}</span>}
              {entry.location && (
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                  {entry.location}
                </span>
              )}
            </div>
          </header>

          {summary && <p className="mt-3 text-gray-900/90">{summary}</p>}

          {(renderTech.length > 0 || (!isOpen && hiddenCount > 0)) && (
            <div className="flex flex-wrap gap-2 mt-5">
              {renderTech.map((t, tIdx) => (
                <TechBadge key={tIdx} label={t} />
              ))}
              {!isOpen && hiddenCount > 0 && <TechBadge label={`+${hiddenCount} more`} />}
            </div>
          )}

          {/* Inline toggle */}
          <div className="mt-3">
            <button
              type="button"
              onClick={(e) => {
                stop(e);
                toggle(idx);
              }}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
            >
              {isOpen ? "Show less ▲" : "Show more ▼"}
            </button>
          </div>

          {/* Expanded area */}
          <div
            id={panelId}
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
              isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
            aria-hidden={!isOpen}
          >
            {entry.achievements?.length ? (
              <div className="flex rounded-xl border border-gray-100 overflow-hidden mt-6">
                {/* Left gradient strip */}
                <div className="w-1.5 bg-gradient-to-b from-[#654ea3] to-[#eaafc8]" />
                {/* Content area */}
                <div className="flex-1 bg-gray-50/80 p-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {entry.achievements.map((a, j) => (
                      <li key={j} className="flex items-start text-sm text-gray-700 leading-relaxed">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#654ea3] to-[#eaafc8] mt-2 mr-3 flex-shrink-0" />
                        <span className="flex-1">{a}</span>
                      </li>
                    ))}
                  </ul>
                  {entry.links?.length ? (
                    <div className="flex flex-wrap gap-3 mt-5">
                      {entry.links.map((l, k) => (
                        <LinkButton key={k} link={l} onClick={stop} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="mb-16">
      <div className="mb-4">
        <h2 className="text-[2.25rem] md:text-[2.5rem] font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-[#654ea3] to-[#eaafc8] bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#654ea3] to-[#eaafc8] rounded-full mt-1" />
      </div>

      {/* Two independent vertical stacks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-6">
          {left.map(({ e, i }) => (
            <Card key={i} entry={e} idx={i} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {right.map(({ e, i }) => (
            <Card key={i} entry={e} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
