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

const ALL_COMBOS: number[][] = [5, 6, 7, 8, 9].flatMap(k => getCombos(9, k)); // 256 people

export default function BPDVisualizer() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const hoveredCombo = hoveredIdx !== null ? ALL_COMBOS[hoveredIdx] : null;

  // intensity: more criteria = slightly more saturated dot
  const getDotColor = (comboIdx: number) => {
    const len = ALL_COMBOS[comboIdx].length;
    const isHovered = comboIdx === hoveredIdx;
    if (isHovered) return 'bg-orange-500 border-orange-700 scale-150';
    // shade by how many criteria (5=lightest, 9=darkest)
    const shades: Record<number, string> = {
      5: 'bg-purple-100 border-purple-200',
      6: 'bg-purple-200 border-purple-300',
      7: 'bg-purple-300 border-purple-400',
      8: 'bg-purple-400 border-purple-500',
      9: 'bg-purple-600 border-purple-700',
    };
    return shades[len] ?? 'bg-purple-200 border-purple-300';
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">

      {/* header */}
      <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-1">
        Gender &amp; psychopathology
      </p>
      <h1 className="text-3xl font-medium text-gray-900 mb-1">Five of nine.</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        A diagnosis of Borderline Personality Disorder requires any 5 of 9 criteria.
        That produces <strong>256 different combinations</strong> of symptoms —
        each a different person, a different life, a different kind of pain.
        <br />They all get the same label.
      </p>

      <p className="text-xs text-gray-400 bg-gray-50 border-l-2 border-purple-400 px-3 py-2 rounded-r mb-6">
        Hover any dot to see who is behind the diagnosis.
      </p>

      {/* person portrait */}
        <div className="h-28 mb-6 p-4 rounded-lg border border-gray-100 bg-gray-50 overflow-hidden">
        {hoveredCombo === null ? (
          <p className="text-sm text-gray-400 italic">Hover a dot to reveal a person...</p>
        ) : (
          <div>
            <p className="text-xs text-gray-400 mb-2">
              Person #{hoveredIdx! + 1} &nbsp;·&nbsp; {hoveredCombo.length} of 9 criteria
            </p>
            <div className="flex flex-wrap gap-2">
              {CRITERIA.map(c => {
                const has = hoveredCombo.includes(c.id);
                return (
                  <span
                    key={c.id}
                    className={`text-xs px-3 py-1.5 rounded-full border ${
                      has
                        ? 'bg-purple-50 text-purple-800 border-purple-300'
                        : 'bg-white text-gray-300 border-gray-100 line-through'
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
        {ALL_COMBOS.map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`rounded-full border cursor-pointer transition-transform ${getDotColor(i)}`}
            style={{ width: 12, height: 12 }}
          />
        ))}
      </div>

      {/* legend */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        {[5,6,7,8,9].map(n => (
          <div key={n} className="flex items-center gap-1.5">
            <div className={`rounded-full border w-3 h-3 ${
              {5:'bg-purple-100 border-purple-200', 6:'bg-purple-200 border-purple-300',
               7:'bg-purple-300 border-purple-400', 8:'bg-purple-400 border-purple-500',
               9:'bg-purple-600 border-purple-700'}[n]
            }`}/>
            <span className="text-xs text-gray-400">{n} criteria</span>
          </div>
        ))}
      </div>

      {/* stamp */}
      <div className="flex items-center gap-4 my-4">
        <span className="text-sm text-gray-400">All 256 →</span>
        <div className="border-2 border-red-700 rounded-lg px-5 py-2 inline-block">
          <span className="text-lg font-medium text-red-700 tracking-wide">
            Borderline Personality Disorder
          </span>
          <span className="block text-center text-xs text-red-600 tracking-widest mt-0.5">
            DSM-5 · 301.83
          </span>
        </div>
      </div>

      {/* footer */}
      <p className="text-xs text-gray-500 border-t border-gray-100 pt-4 mt-4 leading-relaxed italic">
        Women are diagnosed with BPD at 3× the rate of men — yet studies show clinicians assign
        this label to women presenting identical symptoms to men far more readily. Behind every
        dot is a person. Behind every stamp is a story the label cannot hold.
      </p>

    </div>
  );
}