'use client';

import Link from 'next/link';

export default function MotivationPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] dark:bg-neutral-950">
      <div className="p-8 max-w-2xl mx-auto">

        {/* back nav */}
        <Link
          href="/bpd"
          className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors group mb-8"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
          Back to the visualization
        </Link>

        {/* header */}
        <p className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">
          Gender &amp; psychopathology
        </p>
        <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-8">
          The thinking behind this.
        </h1>

        {/* section 1 — why BPD */}
        <section className="mb-10">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            Why I wrote about BPD
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            BPD is one of the most stigmatized diagnoses in psychiatry and also one of the most gendered. 
            The label falls on women three times more often than men, yet community studies find near-equal 
            prevalence. The gap is not epidemiological. It is cultural.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            A woman expressing anger or emotional intensity is more likely to be seen as disordered than a 
            man exhibiting the same traits. Ford &amp; Widiger (1989) demonstrated this: given the same clinical profile, 
            clinicians were significantly more likely to assign BPD when the patient was female. The diagnosis 
            does not follow the symptoms. It follows the gender of the person expressing them.
          </p>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-700 mb-10" />

        {/* section 2 — the central message */}
        <section className="mb-10">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            The central message
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            A diagnostic label flattens human complexity into a single word. The visualization shows
            all{' '}
            <strong className="text-gray-700 dark:text-gray-300">256 unique combinations</strong> of
            symptoms that could qualify for a BPD diagnosis, ranging from someone with the minimum 5
            criteria to someone with all 9, yet all receive the same label. By letting viewers hover
            over individual dots and see the specific constellation of symptoms belonging to that
            person, the piece tries to restore some of the humanity that the diagnostic process erases.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            Two people who share a diagnosis may manifest completely opposite symptoms. Their pain and
            their needs are not the same, yet they face the same stigma.
          </p>

          {/* <blockquote className="border-l-2 border-[#AFA9EC] dark:border-[#534AB7] pl-4 my-6">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">
              &quot;Casting a wide net over all individuals makes it seem as if there&apos;s some panacea when
              in reality, individualized care must be done.&quot;
            </p>
          </blockquote> */}

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            BPD is highly stigmatizing: clinicians may spend less time with and feel less empathy
            towards patients carrying this label. When that label is also distributed in a
            gender-biased manner, it compounds existing health disparities for women. Raising
            awareness about diagnostic heterogeneity can push both the public and clinicians toward
            more humanizing ways to understand mental illness, and toward more equitable care.
          </p>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-700 mb-10" />

        {/* section 3 — the research */}
        <section className="mb-10">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            The research
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            Kaehler and Freyd (2012) found significant gender differences in the relationship between
            trauma and borderline personality characteristics, with women showing stronger associations
            between trauma exposure and BPD features. This grounds BPD symptomatology in{' '}
            <strong className="text-gray-700 dark:text-gray-300">
              trauma rather than inherent personality defect
            </strong>. The symptoms represented by each dot are better understood
            as responses to trauma not character flaws.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            It also highlights that the gendered pattern of BPD diagnosis reflects gendered patterns
            in trauma exposure. Women are not more prone to this &quot;disorder&quot;, they are more likely to
            have experienced the interpersonal violence that leads to its symptoms.
          </p>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-700 mb-10" />

        {/* section 4 — acknowledgements */}
        <section className="mb-10">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            Acknowledgements
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            This project was developed for HD 3320: Gender and Psychopathology. Thanks to 
            Professor Korfine for her guidance and for bringing visibility to the complexities 
            of these diagnostic biases.
          </p>
        </section>
        
        {/* section 5 — sources */}
        <section className="mb-8">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            Sources
          </p>
          <ul className="space-y-4">
            <li className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
              Ford, M. R., &amp; Widiger, T. A. (1989). Sex bias in the diagnosis of histrionic and 
              antisocial personality disorders. <em>Journal of Consulting and Clinical Psychology, 57</em>(2), 
              301&ndash;305.
            </li>
            <li className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
              Kaehler, L. A., &amp; Freyd, J. J. (2012). Betrayal trauma and borderline personality 
              characteristics: Gender differences. <em>Psychological Trauma: Theory, Research, Practice, 
              and Policy, 4</em>(4), 379&ndash;385.
            </li>
          </ul>
        </section>

        {/* footer nav */}
        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
          <Link
            href="/bpd"
            className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
            Return to the visualization
          </Link>
        </div>

      </div>
    </div>
  );
}