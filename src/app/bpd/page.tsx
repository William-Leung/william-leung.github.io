'use client';

import { useState } from 'react';
import Link from 'next/link';

const CRITERIA_LABELS = [
  "fear of abandonment",
  "unstable relationships",
  "unstable self-image",
  "impulsivity",
  "self-harm / suicidality",
  "emotional instability",
  "chronic emptiness",
  "intense anger",
  "dissociation",
];

const CRITERIA_PHRASES = [
  "is terrified of being left",
  "loves and loses people in cycles she can't stop",
  "is unsure from day to day who she really is",
  "acts before she thinks",
  "hurts herself when the pain gets too loud",
  "feels everything too fast and too hard",
  "carries a hollowness nothing seems to fill",
  "erupts into anger that surprises even her",
  "drifts outside herself like a passenger in her own life",
];

const NAMES = [
  "Adaeze","Ramona","Cleo","Saoirse","Taryn","Miriam","Delia","Priya","Ingrid","Fatou",
  "Yuki","Solange","Petra","Lena","Amara","Chidinma","Yael","Vesna","Halina","Sorcha",
  "Nadia","Elke","Blessing","Marisol","Anousha","Simone","Wren","Sela","Theodora","Margot",
  "Linh","Kiona","Zara","Amelia","Oona","Elif","Brigid","Hana","Celeste","Neha",
  "Astrid","Nkechi","Ximena","Irene","Signe","Flo","Roksana","Tamsin","Aoife","Juno",
  "Vivienne","Kezia","Renata","Laila","Brynn","Orla","Zadie","Mira","Nora","Tilda",
  "Iris","Sanaa","Leona","Iduna","Paloma","Freya","Seun","Ines","Aiko","Maren",
  "Raya","Caitlin","Aba","Suki","Vesper","Dani","Zeynep","Elspeth","Roos","Ondine",
  "Callie","Yewande","Saskia","Moa","Nell","Seren","Bijou","Nizhoni","Lilo","Cora",
  "Radha","Aoibheann","Keza","Sienna","Ilka","Bea","Mina","Awa","Saga","Sylvie",
  "Dayo","Pita","Rae","Zinnia","Caoimhe","Zuzu","Tove","Lumi","Sina","Ada",
  "Mabel","Asha","Yara","Naila","Dove","Tansy","Sorrel","Mahi","Vivi","Ilse",
  "Odessa","Ailbhe","Rumi","Shirin","Eira","Zola","Ula","Paz","Deja","Kya",
  "Rue","Phoebe","Anouk","Sura","Dalila","Amina","Elodie","Nour","Devi","Biba",
  "Sachi","Reva","Lyra","Kali","Naomi","Edie","Tara","Nia","Safi","Vega",
  "Aya","Demi","Rena","Kea","Noa","Ila","Pia","Sia","Ara",
];

function seededRand(seed: number) {
  let s = seed;
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const rand = seededRand(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getCombos(n: number, k: number): number[][] {
  const result: number[][] = [];
  function h(start: number, combo: number[]) {
    if (combo.length === k) { result.push([...combo]); return; }
    for (let i = start; i < n; i++) { combo.push(i); h(i + 1, combo); combo.pop(); }
  }
  h(0, []);
  return result;
}

function buildVignette(combo: number[]): { name: string; sentence: string } {
  const seed = combo.reduce((a, b) => a * 31 + b, 17);
  const rand = seededRand(seed);
  const name = NAMES[Math.floor(rand() * NAMES.length)];
  const phrases = shuffleWithSeed(combo.map(id => CRITERIA_PHRASES[id]), seed + 1);

  let sentence: string;
  sentence = `${name} ${phrases[0]}, ${phrases[1]}, ${phrases[2]}, ${phrases[3]}, ${phrases[4]}, ${phrases[5]}, ${phrases[6]}, and ${phrases[7]}.`;
  if (phrases.length === 9) {
    sentence = `${name} carries all nine.`;
  }

  return { name, sentence };
}

const ALL_COMBOS: number[][] = [5, 6, 7, 8, 9].flatMap(k =>
  shuffleWithSeed(getCombos(9, k), k * 999)
);

const DOT_CLASSES: Record<number, string> = {
  5: 'bg-[#EEEDFE] border-[#CECBF6] dark:bg-[#26215C] dark:border-[#3C3489]',
  6: 'bg-[#CECBF6] border-[#AFA9EC] dark:bg-[#3C3489] dark:border-[#534AB7]',
  7: 'bg-[#AFA9EC] border-[#7F77DD] dark:bg-[#534AB7] dark:border-[#7F77DD]',
  8: 'bg-[#7F77DD] border-[#534AB7] dark:bg-[#7F77DD] dark:border-[#AFA9EC]',
  9: 'bg-[#534AB7] border-[#3C3489] dark:bg-[#AFA9EC] dark:border-[#CECBF6]',
};

export default function BPDVisualizer() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [displayIdx, setDisplayIdx] = useState<number | null>(null);

  const displayCombo = displayIdx !== null ? ALL_COMBOS[displayIdx] : null;
  const vignette = displayCombo ? buildVignette(displayCombo) : null;

  return (
    <div className="p-8 max-w-2xl mx-auto">

      {/* header */}
      <p className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">
        Gender &amp; psychopathology
      </p>
      <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-2">Five of nine.</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
        A diagnosis of Borderline Personality Disorder requires any 5 of 9 criteria.
        That produces{' '}
        <strong className="text-gray-700 dark:text-gray-300">256 different combinations</strong>{' '}
        of symptoms: each a different person, a different life, a different pain.
        <br /><br />
        <strong className="text-gray-700 dark:text-gray-300">They all get the same label</strong>.
      </p>

      <Link
        href="/bpd/motivation"
        className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors group"
      >
        Read the thinking behind this
        <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
      </Link>

      {/* legend — moved above the grid */}
      <div className="flex items-center gap-4 mt-5 mb-3 flex-wrap">
        {[5, 6, 7, 8, 9].map(n => (
          <div key={n} className="flex items-center gap-1.5">
            <div className={`rounded-full border w-3 h-3 ${DOT_CLASSES[n]}`} />
            <span className="text-xs text-gray-400 dark:text-gray-500">{n} criteria</span>
          </div>
        ))}
      </div>

      {/* dot grid */}
      <div
        className="grid gap-1 mb-4"
        style={{ gridTemplateColumns: 'repeat(32, 1fr)' }}
        onMouseLeave={() => { setHoveredIdx(null); setDisplayIdx(null); }}
      >
        {ALL_COMBOS.map((combo, i) => (
          <div
            key={i}
            onMouseEnter={() => { setHoveredIdx(i); setDisplayIdx(i); }}
            className={`rounded-full border cursor-pointer transition-transform ${
              i === hoveredIdx
                ? 'bg-[#D85A30] border-[#993C1D] dark:bg-[#F0997B] dark:border-[#D85A30] scale-150'
                : DOT_CLASSES[combo.length]
            }`}
            style={{ width: 12, height: 12 }}
          />
        ))}
      </div>

      {/* person portrait — below grid, expands freely */}
      <div className="mb-6 p-4 rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 min-h-[72px]">
        {vignette === null ? (
          <p className="text-sm text-gray-400 dark:text-gray-500 italic mt-1">Hover a dot to reveal the person behind it</p>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#EEEDFE] dark:bg-[#3C3489] border border-[#AFA9EC] dark:border-[#534AB7] flex items-center justify-center text-xs font-medium text-[#3C3489] dark:text-[#CECBF6] shrink-0">
                {vignette.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-none mb-1">
                  {vignette.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic leading-relaxed">
                  {vignette.sentence.replace(vignette.name + ' ', '')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {CRITERIA_LABELS.map((label, id) => {
                const has = displayCombo!.includes(id);
                return (
                  <span
                    key={id}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      has
                        ? 'bg-[#EEEDFE] text-[#3C3489] border-[#AFA9EC] dark:bg-[#3C3489] dark:text-[#CECBF6] dark:border-[#534AB7]'
                        : 'bg-white dark:bg-gray-900 text-gray-300 dark:text-gray-600 border-gray-100 dark:border-gray-700 line-through'
                    }`}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* stamp */}
      <div className="my-4">
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">All 256 combinations receive the same label ↓</p>
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
      <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        Women are diagnosed with BPD at 3 times the rate of men yet community studies find near equal prevalence. Clinicians assign this label to women presenting identical symptoms to men more readily and the label carries a stigma the symptoms alone would not. Behind every dot is a person. Behind every label is a story that cannot be encapsulated.
      </p>
      </div>
    </div>
  );
}