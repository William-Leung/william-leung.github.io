'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SECTIONS = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'work', label: 'Work Experience' },
    { id: 'studies', label: 'Studies' },
    { id: 'skills', label: 'Technical skills' },
];

export default function SideNav() {
    const [active, setActive] = useState<string>('introduction');
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isClickScrolling = useRef(false);
    // Ref to hold timeout IDs for our animation sequence
    const animationTimeoutsRef = useRef<NodeJS.Timeout[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        isClickScrolling.current = true;

        // Clear any scroll-based animations when a click occurs
        animationTimeoutsRef.current.forEach(clearTimeout);

        setActive(id);

        const el = document.getElementById(id);
        if (!el) return;

        const scroller = document.getElementById('contentScroll');
        const scrollMarginTop = parseFloat(getComputedStyle(el).scrollMarginTop || '0');
        const targetScrollTop = el.offsetTop - scrollMarginTop;

        scroller?.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
        });

        history.replaceState(null, '', `#${id}`);
    };

    useEffect(() => {
        const scroller = document.getElementById('contentScroll');
        if (!scroller) return;

        const handleScrollEnd = () => {
            isClickScrolling.current = false;
        };

        scroller.addEventListener('scrollend', handleScrollEnd);

        const observerCallback: IntersectionObserverCallback = (entries) => {
            if (isClickScrolling.current) return;

            animationTimeoutsRef.current.forEach(clearTimeout);
            animationTimeoutsRef.current = [];

            let bestEntry: IntersectionObserverEntry | undefined;
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    if (!bestEntry || entry.boundingClientRect.top < bestEntry.boundingClientRect.top) {
                        bestEntry = entry;
                    }
                }
            }

            if (!bestEntry) return;

            const destinationId = bestEntry.target.id;
            const currentIndex = SECTIONS.findIndex(s => s.id === active);
            const destinationIndex = SECTIONS.findIndex(s => s.id === destinationId);

            if (currentIndex === -1 || destinationIndex === -1 || currentIndex === destinationIndex) {
                setActive(destinationId);
                return;
            }

            const direction = Math.sign(destinationIndex - currentIndex);

            // ---- START: The only section that changes ----

            // Define a maximum total duration for the entire animation sequence.
            const MAX_TOTAL_DURATION_MS = 100;
            // Define a comfortable duration for a single-step animation.
            const SINGLE_STEP_DURATION_MS = 50;

            const numSteps = Math.abs(destinationIndex - currentIndex);

            // If it's just one step, use the predefined single step duration.
            // Otherwise, divide the max duration by the number of steps to get the delay for each step.
            const stepDelay = numSteps === 1
                ? SINGLE_STEP_DURATION_MS
                : MAX_TOTAL_DURATION_MS / numSteps;

            for (let i = currentIndex + direction; ; i += direction) {
                const sectionId = SECTIONS[i].id;
                const timeoutId = setTimeout(() => {
                    setActive(sectionId);
                }, Math.abs(i - currentIndex) * stepDelay); // Use the new dynamic stepDelay

                animationTimeoutsRef.current.push(timeoutId);

                if (i === destinationIndex) break;
            }
            // ---- END: The only section that changes ----
        };

        observerRef.current = new IntersectionObserver(observerCallback, {
            root: scroller,
            rootMargin: "-40% 0px -60% 0px",
            threshold: 0,
        });

        const currentObserver = observerRef.current;
        SECTIONS.forEach(section => {
            const el = document.getElementById(section.id);
            if (el) currentObserver.observe(el);
        });

        return () => {
            currentObserver.disconnect();
            scroller.removeEventListener('scrollend', handleScrollEnd);
            animationTimeoutsRef.current.forEach(clearTimeout);
        };
    }, [active]);

    return (
        <aside
            className="
        fixed left-0 top-0 hidden h-screen w-sidebar md:flex md:flex-col
        px-10 py-24
      "
            aria-label="Site navigation"
        >
            <div className="flex items-center gap-4">
                <div className="relative h-28 w-28 ml-4 overflow-hidden rounded-full ring-2 ring-white/80 shadow-sm">
                    <Image
                        src="/william_leung_headshot.png"
                        alt="Profile photo"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <nav className="mt-20 text-sm">
                <ul className="flex flex-col space-y-4">
                    {SECTIONS.map(({ id, label }) => {
                        const isActive = active === id;
                        return (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    aria-current={isActive ? 'page' : undefined}
                                    onClick={(e) => handleClick(e, id)}
                                    className="group flex items-center gap-4 py-2 transition-colors duration-200"
                                >
                                    <span
                                        className={[
                                            "h-[1.5px] rounded-full transition-all duration-200",
                                            isActive ? "w-10 bg-slate-900" : "w-5 bg-slate-400 group-hover:w-8 group-hover:bg-slate-700",
                                        ].join(' ')}
                                    />
                                    <span
                                        className={[
                                            "font-semibold transition-colors duration-200",
                                            isActive ? "text-slate-800" : "text-slate-500 group-hover:text-slate-800",
                                        ].join(' ')}
                                    >
                                        {label}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="flex-grow" />
        </aside>
    );
}