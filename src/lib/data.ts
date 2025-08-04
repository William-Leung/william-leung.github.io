export const personalInfo = {
  name: "William Leung",
  email: "wcl53@cornell.edu",
  // Replace with your actual LinkedIn and GitHub URLs
  linkedin: "https://www.linkedin.com/in/william-leung-50980021b/", 
  github: "https://github.com/William-Leung",
  profileImage: "https://placehold.co/400x400/E2E8F0/4A5568?text=WL&font=sans"
};

export const projects = [
  {
    title: "Tree of Thoughts LLM Framework",
    description: "Enhanced a Tree of Thoughts LLM reasoning framework by integrating a custom reinforcement learning component in PyTorch. Reduced API costs by 100x and latency by 75% while maintaining 92% accuracy.",
    tags: ["PyTorch", "LLM", "Reinforcement Learning", "Python"],
  },
  {
    title: "UpStyle: AI Outfit Recommender",
    description: "Built an end-to-end ML pipeline that scrapes 30K+ fashion items and fine-tunes a sentence transformer, allowing users to search for outfits using natural language.",
    tags: ["Machine Learning", "Transformers", "Web Scraping", "Python"],
  },
  {
    title: "Enterprise RAG Platform",
    description: "Architected and shipped an enterprise RAG platform on AWS using Bedrock, FastAPI, and MongoDB. Automated 85% of manual ESG workflows, reducing report generation time from weeks to days.",
    tags: ["AWS", "RAG", "LangGraph", "FastAPI", "MongoDB"],
  },
  {
    title: "S3-Compliant Storage API",
    description: "Engineered a fully AWS S3 compliant GetObjectAttributes API in C++ for the ONTAP distributed storage system, supporting over 25K concurrent requests for enterprise clients.",
    tags: ["C++", "Distributed Systems", "APIs", "Cloud"],
  },
  {
    title: "Real-Time Fleet Management App",
    description: "Led the frontend development of a real-time fleet management application in React and TypeScript, tracking 2K+ vehicles with 99.9% uptime and implementing a CI/CD pipeline.",
    tags: ["ReactJS", "TypeScript", "CI/CD", "Frontend"],
  },
  {
    title: "GeoData Computer Vision Pipeline",
    description: "Deployed a computer vision pipeline processing 70K+ BirdCam frames daily using YOLO and built ML models to predict harmful algal blooms with 85% accuracy.",
    tags: ["Computer Vision", "YOLO", "AWS", "Machine Learning"],
  },
];
