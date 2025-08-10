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
  location: "Remote (San Jose, CA)",
  quickImpact:
    "Engineered an AWS-based RAG pipeline that ingests 940+ GB/month and automates 85% of GRESB report creation workflows.",
  achievements: [
    "Built an end-to-end RAG architecture on AWS (Bedrock, Lambda, S3, API Gateway, ECS) with FastAPI, LangGraph, MongoDB, and Pinecone to parse ESG documents and map their contents to GRESB Assessment Indicators.",
    "Designed a LangGraph multi-agent RAG system for document ingestion, guideline mapping, compliance checks, and citations.",
    "Reduced report preparation from ~3 months to 1 week while maintaining accuracy, audit readiness, and consistency across investor-facing outputs."
  ],
  technologies: ["LangGraph", "AWS Bedrock", "AWS Lambda", "API Gateway", "Pinecone", "FastAPI"]
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
      "Implemented an AWS S3-compatible GetObjectAttributes API in C++ for ONTAP, handling 25K+ concurrent requests.",
    achievements: [
      "Optimised API performance for distributed storage environments by reducing request latency under high concurrency and improving fault tolerance at scale.",
      "Achieved 97% unit test coverage across 70+ tests and enabled cloud integration for 10K+ enterprise clients with a zero-defect release."
    ],
    technologies: ["C++", "AWS S3", "Distributed Systems", "Systems Programming", "API Development"]
  },
  {
    date: "Aug 2023 - Present",
    title: "Teaching Assistant, Analysis of Algorithms",
    company: "Cornell University",
    location: "Ithaca, NY",
    quickImpact:
      "Coordinated grading quality and logistics for a 400+ student course across a 14-person TA team.",
    achievements: [
      "Standardised grading rubrics and implemented feedback workflows to improve fairness and turnaround time across all assignments.",
      "Designed and developed grading scripts in Python, completely automating grading for coding assigments."
    ],
    technologies: ["Algorithms", "Python", "Team Leadership"]
  },
  {
    date: "Jul 2023 - Oct 2023",
    title: "Frontend Developer Team Lead",
    company: "Global Business Consulting Services",
    location: "San Jose, CA",
    quickImpact:
      "Led delivery of a real-time fleet management app tracking 2K+ vehicles with 99.9% uptime.",
    achievements: [
      "Implemented CI/CD pipelines to accelerate release cycles by ~20% while maintaining 95%+ automated test coverage per sprint.",
      "Directed a 7-engineer team through Agile sprints, delivering 9 major releases on schedule with full stakeholder sign-off."
    ],
    technologies: ["TypeScript", "React", "Next.js", "CI/CD", "Agile"]
  }
];