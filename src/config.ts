// 1. General Site Info
export const siteConfig = {
  name: "Jevaughn Newman",
  title: "Risk & Fraud Data Analyst",
  description: "Portfolio showcasing my forensic data modelling, risk analytics pipelines, and business intelligence environments.",
  accentColor: "#FF6B00",
  social: {
    email: "mailto:jevaughn.newman@gmail.com",
    linkedin: "https://www.linkedin.com/in/jevaughnnewman",
    github: "https://github.com/JevaughnNewman",
    resume: "Jevaughn Newman - Fraud Analyst Master Resume 2026.docx_2.pdf",
    substack: "https://risktorealtime.substack.com",
  },
  aboutMe: `I have spent the last six years on the front lines of high-stakes risk operations and transaction triage within the Canadian insurance sector. My background is rooted in investigating adversarial fraud typologies, navigating complex regulatory logic, and identifying where financial leakage occurs. Through this experience, I realized that effectively mitigating risk at scale requires moving past manual review cycles and building more resilient data environments. I developed my expertise in SQL, Python, dbt, and Snowflake to bridge this exact gap—translating operational risk intuition into clean, auditable data models and interactive dashboards that protect organizational bottom lines. I look at data through a defensive, investigative lens, focusing on turning messy ledger entries into actionable risk intelligence.`,

  skills: [
    "SQL (Snowflake / MSSQL)",
    "dbt Core",
    "Python (Pandas)",
    "Relational Star-Schema Design",
    "Power BI (PL-300 Certified)",
    "Tableau",
    "Loss Mitigation Operations",
    "Regulatory Mapping (SABS/FSRA)"
  ],
};

// 2. Export separately so the template can find them
export const experience = [
  {
    company: "Intact Financial Corporation",
    title: "Senior Claims Adjuster",
    dateRange: "Jun 2022 - Present",
    bullets: [
      "Manage a caseload of 100+ active AB claims, reviewing medical records and clinical data to determine treatment approvals, assessments, and settlements under SABS, ensuring compliance and minimizing leakage.",
      "Analyzed trends across 300+ claims, identifying patterns in injury types and claimant demographics that informed department reporting and supported pricing strategies for high-risk profiles.",
      "Led cross-functional coordination with Legal, Accounting, and Management to standardize benefit tracking, achieving a 15% reduction in open file durations while maintaining settlement quality and compliance standards.",
      "Led negotiations on full and final settlements, achieving fair resolutions while reducing open file durations by 15%, and collaborated with legal, accounting, and management teams to align settlement strategies."
    ],
  },
  {
    company: "Intact Financial Corporation",
    title: "Claims Representative I & II, Accident Benefits",
    dateRange: "Jan 2020 - Jun 2022",
    bullets: [
      "Handled Minor Injury & Non-catastrophic accident benefits claims, reviewing and interpreting medical records, treatment plans, and police reports with 98% documentation accuracy under SABS compliance.",
      "Achieved a 65% Health Rely score (vs. 52% target), supporting a 25% improvement in customer satisfaction metrics.",
      "Analyzed trends in treatment plan submissions and injury patterns to support consistent approvals/denials, improving decision-making accuracy and file progression.",
      "Trained 5+ new team members on AB claims handling workflows and data entry protocols, enhancing team efficiency and file quality."
    ],
  }
];

export const education = [
  {
    school: "Microsoft",
    degree: "Microsoft Certified: Power BI Data Analyst Associate",
    image: "power-bi-cert.webp",
    achievements: [
      "Validated expertise in data analysis and visualization using the Microsoft Power BI platform.",
      "Certified in using Power Query, DAX, and M to build robust data models and reports.",
      "Proficient in creating interactive dashboards and sharing data-driven insights with stakeholders."
    ],
  },
  {
    school: "Carleton University",
    degree: "Bachelor of Arts: Economics, Minor in Statistics",
    image: "carleton-university-logo-background-removed.jpg", 
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
    title: "Target E-Commerce Sales & Operations Analysis",
    description: "Utilized MySQL Workbench to ingest, clean, and profile a multi-table Brazilian e-commerce dataset, running complex relational queries to evaluate product performance and customer segments. Structured the data to identify key operational friction points, tracking transaction volumes and delivery timeline variances across different regions. Developed an interactive Tableau dashboard to map these geographic trends, transforming raw database records into clear visual indicators that highlight regional growth and operational inefficiencies.",
    github: "https://github.com/JevaughnNewman/Target-E-Commerce-Sales-Data-Project",
    embedUrl: "", 
    slides: "Brazil_E-Commerce_Accelerated_Growth_Strategy.pdf",
    slideLabel: "Strategic Insights Deck",
    skills: ["Tableau", "SQL", "MySQL Workbench", "Geographic Mapping", "Customer Segmentation", "Data Cleansing", "Operations Analytics"],
    isTableau: true 
  },
  {
    title: "Insurance Claims Anomaly Engine, East Coast Insurance Database",
    description: "Engineered a relational star-schema data model in Microsoft SQL Server 2022 to unify fragmented, multi-source claims and customer logging records. Designed and executed complex relational queries to backtest historical transaction trends, profiling high-risk claimant demographics and identifying underlying injury pattern anomalies. Delivered an interactive Power BI analytics environment that isolated systemic billing variances, providing risk operations with the auditable insights required to plug leakage and mitigate future portfolio exposure.",
    github: "https://github.com/JevaughnNewman/East-Coast-Insurance-Data-Project",
    embedUrl: "https://app.powerbi.com/view?r=eyJr...",
    slides: "Risk_Mitigation_Strategies_Q1_Claims_Analysis.pdf",
    slideLabel: "Executive Briefing Deck",
    skills: ["Power BI", "SQL", "MS SQL Server 2022", "Star-Schema Design", "Forensic Analytics"],
  }
];
