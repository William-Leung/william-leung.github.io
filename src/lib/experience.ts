// src/lib/experience.ts

export type ExperienceItem = {
  date: string;
  title: string;
  company: string;
  location?: string;
  quickImpact?: string;
  achievements?: string[];
  technologies?: string[];
  links?: { label: string; url: string }[];
};

export const experience: ExperienceItem[] = [
  {
  date: "May 2025 - Present",
  title: "Development Manager",
  company: "SeaBridge Sustainability",
  location: "San Jose, CA",
  quickImpact:
    "Built AWS ESG RAG platform automating ~85% of workflows, cutting report turnaround from weeks to days.",
  achievements: [
    "Developed Bedrock/FastAPI/MongoDB pipeline with LangGraph agents for ingestion, QA, and framework mapping (GRESB/ISSB).",
    "Automated ~85% of ESG workflows via vector search, prompt engineering, and multi-agent orchestration.",
    "Reduced report generation cycle by ~90%, improving accuracy and investor readiness."
  ],
  technologies: ["Python", "LangGraph", "MongoDB", "FastAPI", "AWS"]
    // links: [
    //   { label: "Case Study", url: "https://example.com/case-study" },
    //   { label: "GitHub Repo", url: "https://github.com/William-Leung/project" }
    // ]
  },
  {
    date: "Jun 2024 - Aug 2024",
    title: "Software Engineering Intern",
    company: "NetApp",
    location: "San Jose, CA",
    quickImpact:
      "Implemented an AWS S3-compatible GetObjectAttributes API in C++ for ONTAP, supporting 25K+ concurrent requests.",
    achievements: [
      "Delivered production code with ~97% unit test coverage across 70+ tests; released with zero defects.",
      "Enabled seamless cloud integration paths for 10K+ enterprise clients across ONTAP deployments."
    ],
    technologies: ["C++", "AWS S3", "API Development", "Distributed Systems"]
  },
  {
    date: "Aug 2023 - Present",
    title: "Head Teaching Assistant, Analysis of Algorithms",
    company: "Cornell University",
    location: "Ithaca, NY",
    quickImpact:
      "Coordinated grading quality and logistics for a 400+ student course across a 14 person TA team.",
    achievements: [
      "Standardized rubrics and grader communications to ensure fairness and consistency at scale.",
      "Supported instruction, logistics, and tooling to improve turnaround and student experience."
    ],
    technologies: ["Algorithms", "Python/Java (course tooling)", "Education Ops"]
  },
  {
    date: "Jul 2023 - Oct 2023",
    title: "Frontend Developer Team Lead",
    company: "Global Business Consulting Services",
    location: "San Jose, CA",
    quickImpact:
      "Led delivery of a real-time fleet app tracking 2K+ vehicles with 99.9% uptime.",
    achievements: [
      "Implemented CI/CD to accelerate delivery by ~20% and maintain 95%+ test coverage per sprint.",
      "Led 7 engineers through Agile sprints to ship 9 major releases on schedule."
    ],
    technologies: ["TypeScript", "React", "Next.js", "CI/CD"]
  }
];