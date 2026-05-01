'use client';

import { useState } from 'react';

const CRITERIA = [
  { id: 0, short: "Fear of abandonment" },
  { id: 1, short: "Unstable relationships" },
  { id: 2, short: "Unstable self-image" },
  { id: 3, short: "Impulsivity" },
  { id: 4, short: "Self-harm / suicidality" },
  { id: 5, short: "Emotional instability" },
  { id: 6, short: "Chronic emptiness" },
  { id: 7, short: "Intense anger" },
  { id: 8, short: "Dissociation" },
];

function getCombos(n: number, k: number): number[][] {
  const result: number[][] = [];
  function helper(start: number, combo: number[]) {
    if (combo.length === k) { result.push([...combo]); return; }
    for (let i = start; i < n; i++) { combo.push(i); helper(i + 1, combo); combo.pop(); }
  }
  helper(0, []);
  return result;
}

const ALL_COMBOS: number[][] = [5, 6, 7, 8, 9].flatMap(k => getCombos(9, k));

const DOT_CLASSES: Record<number, string> = {
  5: 'bg-[#EEEDFE] border-[#CECBF6] dark:bg-[#26215C] dark:border-[#3C3489]',
  6: 'bg-[#CECBF6] border-[#AFA9EC] dark:bg-[#3C3489] dark:border-[#534AB7]',
  7: 'bg-[#AFA9EC] border-[#7F77DD] dark:bg-[#534AB7] dark:border-[#7F77DD]',
  8: 'bg-[#7F77DD] border-[#534AB7] dark:bg-[#7F77DD] dark:border-[#AFA9EC]',
  9: 'bg-[#534AB7] border-[#3C3489] dark:bg-[#AFA9EC] dark:border-[#CECBF6]',
};

export default function BPDVisualizer() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const hoveredCombo = hoveredIdx !== null ? ALL_COMBOS[hoveredIdx] : null;

  return (
    <div className="p-8 max-w-2xl mx-auto">

      {/* header */}
      <p className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">
        Gender &amp; psychopathology
      </p>
      <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-2">Five of nine.</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
        A diagnosis of Borderline Personality Disorder requires any 5 of 9 criteria.
        That produces <strong className="text-gray-700 dark:text-gray-300">256 different combinations</strong> of symptoms: each a different person, a different life, a different pain.
        <br /><br /><strong className="text-gray-700 dark:text-gray-300">They all get the same label</strong>.
      </p>

      <p className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 border-l-2 border-purple-400 dark:border-purple-500 px-3 py-2 rounded-r mb-6">
        Hover any dot to see who is behind the diagnosis.
      </p>

      {/* person portrait */}
      <div className="h-28 mb-6 p-4 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 overflow-hidden">
        {hoveredCombo === null ? (
          <p className="text-sm text-gray-400 dark:text-gray-500 italic">Hover a dot to reveal a person...</p>
        ) : (
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
              Person #{hoveredIdx! + 1} &nbsp;·&nbsp; {hoveredCombo.length} of 9 criteria
            </p>
            <div className="flex flex-wrap gap-2">
              {CRITERIA.map(c => {
                const has = hoveredCombo.includes(c.id);
                return (
                  <span
                    key={c.id}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      has
                        ? 'bg-[#EEEDFE] text-[#3C3489] border-[#AFA9EC] dark:bg-[#3C3489] dark:text-[#CECBF6] dark:border-[#534AB7]'
                        : 'bg-white dark:bg-gray-900 text-gray-300 dark:text-gray-600 border-gray-100 dark:border-gray-700 line-through'
                    }`}
                  >
                    {c.short}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* dot grid */}
      <div
        className="grid gap-1 mb-6"
        style={{ gridTemplateColumns: 'repeat(32, 1fr)' }}
      >
        {ALL_COMBOS.map((combo, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`rounded-full border cursor-pointer transition-transform ${
              i === hoveredIdx
                ? 'bg-[#D85A30] border-[#993C1D] dark:bg-[#F0997B] dark:border-[#D85A30] scale-150'
                : DOT_CLASSES[combo.length]
            }`}
            style={{ width: 12, height: 12 }}
          />
        ))}
      </div>

      {/* legend */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        {[5, 6, 7, 8, 9].map(n => (
          <div key={n} className="flex items-center gap-1.5">
            <div className={`rounded-full border w-3 h-3 ${DOT_CLASSES[n]}`} />
            <span className="text-xs text-gray-400 dark:text-gray-500">{n} criteria</span>
          </div>
        ))}
      </div>

      {/* stamp */}
      <div className="flex items-center gap-4 my-4 flex-wrap">
        <span className="text-sm text-gray-400 dark:text-gray-500">All 256 →</span>
        <div className="border-2 border-[#A32D2D] dark:border-[#F09595] rounded-lg px-5 py-2 inline-block">
          <span className="text-lg font-medium text-[#A32D2D] dark:text-[#F09595] tracking-wide">
            Borderline Personality Disorder
          </span>
          <span className="block text-center text-xs text-[#A32D2D] dark:text-[#F09595] tracking-widest mt-0.5 opacity-80">
            DSM-5 · 301.83
          </span>
        </div>
      </div>

      {/* footer */}
      <p className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4 mt-4 leading-relaxed italic">
        Women are diagnosed with BPD at 3x the rate of men — yet studies show clinicians assign
        this label to women presenting identical symptoms to men far more readily. Behind every
        dot is a person. Behind every stamp is a story the label cannot hold.
      </p>

    </div>
  );
}