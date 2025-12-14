export const siteConfig = {
  name: "Jevaughn Newman",
  title: "Business Intelligence Analyst",
  description: "Portfolio showcasing my analytics projects and skills",
  accentColor: "#1d4ed8",
  social: {
    email: "mailto:jevaughn.newman@gmail.com",
    linkedin: "https://www.linkedin.com/in/jevaughnnewman",
    github: "https://github.com/JevaughnNewman",
    resume: "/Jevaughn Newman - Businesses Intelligence Analyst.pdf",
  },
  aboutMe: `I’m a data analyst with nearly six years in insurance, specializing in accident benefits and complex claims. Using SQL, Power BI, Excel, Tableau, and Python, I transform complex claims data into actionable insights that reduce costs, enhance operational efficiency, and inform strategic decisions.

I design scalable analytics solutions and interactive dashboards to monitor reserve trends and claims leakage, enabling faster, data-driven decision-making within highly regulated environments.

As a mentor to junior adjusters, I promote team development and clear communication across legal, finance, and operations. Certified as a Microsoft Power BI Data Analyst Associate, I combine deep industry knowledge with technical expertise to drive measurable business results.

I’m excited to contribute to a data-driven team where my analytical skills and insurance experience create real impact. Let’s connect to explore opportunities.`,
  skills: ["PowerBI", "SQL", "Tableau", "Python", "Data Analysis", "DAX", "Power Query", "Data Modeling", "Git"],
  experience: [
    {
      company: "Intact Financial Corporation",
      title: "Senior Claims Adjuster",
      dateRange: "Jan 2023 - Present",
      bullets: [
        "Manage a caseload of 100+ active AB claims, reviewing medical records and clinical data to determine treatment approvals, assessments, and settlements under SABS, ensuring compliance and minimizing leakage.",
        "Analyzed trends across 300+ claims, identifying patterns in injury types and claimant demographics that informed department reporting and supported pricing strategies for high-risk profiles.",
        "Lead negotiations on full and final settlements, achieving fair resolutions while reducing open file durations by 15%, and collaborated with legal, accounting, and management teams to align settlement strategies.Manage a caseload of 100+ active AB claims, reviewing medical records and clinical data to determine treatment approvals, assessments, and settlements under SABS, ensuring compliance and minimizing leakage. Analyzed trends across 300+ claims, identifying patterns in injury types and claimant demographics that informed department reporting and supported pricing strategies for high-risk profiles. Contributed to the Priority Leakage Project, identifying workflow inefficiencies that reduced operational costs by 10% and streamlined over 5 key claims handling processes. Lead negotiations on full and final settlements, achieving fair resolutions while reducing open file durations by 15%, and collaborated with legal, accounting, and management teams to align settlement strategies.",
      ],
    },
    {
      company: "Intact Financial Corporation",
      title: "Claims Representative II, Accident Benefits at Intact",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Handled mid-tier AB claims, reviewing and interpreting medical records, treatment plans, and police reports with 98% documentation accuracy under SABS compliance.",
        "Achieved a 65% Health Rely score (vs. 52% target), supporting a 25% improvement in customer satisfaction metrics.",
        "Analyzed trends in treatment plan submissions and injury patterns to support consistent approvals/denials, improving decision-making accuracy and file progression.",
        "Trained 5+ new team members on AB claims handling workflows and data entry protocols, enhancing team efficiency and file quality.",
      ],
    },
  ],
  education: [
    {
      school: "Microsoft",
      degree: "Microsoft Certified: Power BI Data Analyst Associate",
      dateRange: "2024",
      achievements: [
        "Validated expertise in data analysis and visualization using the Microsoft Power BI platform.",
        "Certified in using Power Query, DAX, and M to build robust data models and reports.",
        "Proficient in creating interactive dashboards and sharing data-driven insights with stakeholders.",
      ],
      logo: "/power-bi-cert.webp",
    },
    {
      school: "Carleton University",
      degree: "Bachelor of Arts: Economics, Minor in Statistics",
      dateRange: "2018",
      achievements: [
        "Statistical Modelling: Applied linear regression and ANOVA to analyze complex datasets.",
        "Experimental Design: Completed coursework in hypothesis testing and A/B testing frameworks.",
        "Economic Analysis: Gained a strong foundation in intermediate micro and macroeconomics.",
        "Applied statistical methods to analyze datasets using Excel and SQL."
      ],
    },
  ],
};

export interface Project {
  name: string;
  description: string;
  skills: string[];
  link: string;
  embedUrl: string;
}

export const projects: Project[] = [

  {
    name: "East Coast Insurance Claims Dashboard Q1 2015",
    description:
      "Developed an interactive claims dashboard for East Coast Insurance using Power BI and SQL Server 2022. This solution provides key insights into Q1 claims trends, total claim amounts, and claimant profiles, empowering claims management to make faster, data-driven decisions.",
    link: "https://github.com/JevaughnNewman/East-Coast-Insurance-Data-Project",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNGY2Y2Y4NDItYzBjNC00NWU3LWEyNjgtYjYyYmIyOWQwYzNkIiwidCI6IjVhMmY2ZmQxLTU3MzctNGY3Ny04MmNkLWQ4MGNhMGNkZjZiYSJ9",
    skills: ["Power BI", "SQL", "MS SQL Server 2022"],
  },
];  