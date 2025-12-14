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
      "Manage a caseload of 100+ active AB claims, reviewing medical records and clinical data to determine treatment approvals, assessments, and settlements under SABS, ensuring compliance and minimizing leakage.",
      "Analyzed trends across 300+ claims, identifying patterns in injury types and claimant demographics that informed department reporting and supported pricing strategies for high-risk profiles.",
      "Led cross-functional coordination with Legal, Accounting, and Management to standardize benefit tracking, achieving a 15% reduction in open file durations while maintaining settlement quality and compliance standards.",
      "Led negotiations on full and final settlements, achieving fair resolutions while reducing open file durations by 15%, and collaborated with legal, accounting, and management teams to align settlement strategies.",
    ],
  }
];

export const education = [
  {
    school: "Microsoft",
    degree: "Microsoft Certified: Power BI Data Analyst Associate",
    dateRange: "2024",
    image: "/power-bi-cert.webp",
    achievements: [
      "Validated expertise in data analysis and visualization using the Microsoft Power BI platform.",
      "Certified in using Power Query, DAX, and M to build robust data models and reports.",
      "Proficient in creating interactive dashboards and sharing data-driven insights with stakeholders.",
    ],
  },
  {
    school: "Carleton University",
    degree: "Bachelor of Arts: Economics, Minor in Statistics",
    dateRange: "2018",
    image: "", // You can add a Carleton logo here later
    achievements: [
      "Statistical Modelling: Applied linear regression and ANOVA to analyze complex datasets.",
      "Experimental Design: Completed coursework in hypothesis testing and A/B testing frameworks.",
      "Economic Analysis: Gained a strong foundation in intermediate micro and macroeconomics.",
      "Applied statistical methods to analyze datasets using Excel and SQL."
    ],
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