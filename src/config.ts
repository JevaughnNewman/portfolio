// 1. General Site Info
export const siteConfig = {
  name: "Jevaughn Newman",
  title: "Business Intelligence Analyst",
  description: "Portfolio showcasing my analytics projects and skills",
  accentColor: "#1d4ed8",
  social: {
    email: "mailto:jevaughn.newman@gmail.com",
    linkedin: "https://www.linkedin.com/in/jevaughnnewman",
    github: "https://github.com/JevaughnNewman",
    resume: "/Jevaughn-Newman-Resume.pdf",
  },
  aboutMe: `I’m a data analyst with nearly six years in insurance...`,
  skills: ["PowerBI", "SQL", "Tableau", "Python", "Data Analysis", "DAX", "Power Query", "Data Modeling", "Git"],
};

// 2. Export separately so the template can find them
export const experience = [
  {
    company: "Intact Financial Corporation",
    title: "Senior Claims Adjuster",
    dateRange: "Jan 2023 - Present",
    bullets: [
      "Manage a caseload of 100+ active AB claims...",
      "Analyzed trends across 300+ claims..."
    ],
  }
];

export const education = [
  {
    school: "Microsoft",
    degree: "Microsoft Certified: Power BI Data Analyst Associate",
    dateRange: "2024",
    image: "/power-bi-cert.webp",
  },
  {
    school: "Carleton University",
    degree: "Bachelor of Arts: Economics, Minor in Statistics",
    dateRange: "2018",
    image: "" 
  }
];

export const projects = [
  {
    name: "East Coast Insurance Claims Dashboard Q1 2015",
    description: "Developed an interactive claims dashboard...",
    link: "https://github.com/JevaughnNewman/East-Coast-Insurance-Data-Project",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNGY2Y2Y4NDItYzBjNC00NWU3LWEyNjgtYjYyYmIyOWQwYzNkIiwidCI6IjVhMmY2ZmQxLTU3MzctNGY3Ny04MmNkLWQ4MGNhMGNkZjZiYSJ9",
    skills: ["Power BI", "SQL", "MS SQL Server 2022"],
  },
];