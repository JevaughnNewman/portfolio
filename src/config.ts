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
  },
  aboutMe: `I bridge the gap between technical data analytics and deep fraud domain intuition. Backed by over six years of front-line risk operations and transaction triage experience within the Canadian insurance sector at Intact Financial Corporation, I write optimized SQL, build high-fidelity business intelligence assets, and design forensic data models to unmask structural anomalies, fraud typologies, and financial exposure.

From backtesting risk-scoring heuristics on large-scale datasets to constructing auditable analytical warehouses, my focus is on deploying the data-driven infrastructure required to protect organizational bottom lines, eliminate systemic leakage, and support executive decision-making.`,

  skills: [
    "SQL (MSSQL, MySQL, Snowflake)",
    "dbt Core",
    "Relational Star-Schema Design",
    "ETL/ELT Architecture",
    "Python (Pandas, NumPy)",
    "Power BI (PL-300 Certified)",
    "Tableau",
    "Power Query",
    "Advanced Excel Modelling",
    "Behavioural Anomaly Detection",
    "Fraud Typology Profiling",
    "Loss Mitigation",
    "Regulatory Mapping (SABS/FSRA/PIPEDA)"
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
      "Proficient in creating interactive dashboards and sharing data-driven insights with stakeholders.",
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
    title: "Target Ecommerce Executive Dashboard",
    description: "Analyzed Target's Brazil e-commerce data to uncover sales trends, customer segments, and top products. Delivered insights through Tableau dashboards and a detailed report with actionable business recommendations.",
    github: "https://github.com/JevaughnNewman/Target-E-Commerce-Sales-Data-Project",
    embedUrl: "", // Leave blank since Target uses the special <Tableau /> component
    slides: "Brazil_E-Commerce_Accelerated_Growth_Strategy.pdf",
    slideLabel: "Strategic Insights Deck",
    skills: ["Tableau", "SQL", "MySQL Workbench 8.0.40"],
    isTableau: true // We use this flag to tell the code to show the Tableau component
  },
  {
    title: "Insurance Claims Anomaly Engine, East Coast Insurance Database",
    description: "A granular database analysis and business intelligence framework built to isolate behavioural anomaly patterns, regional settlement spikes, and user verification profiles across historical e-commerce ledger records. Executed complex relational queries to clean and profile customer segment variations, mapping high-risk geographic distributions to inform transaction control testing and operational risk mitigation strategy tables",
    github: "https://github.com/JevaughnNewman/East-Coast-Insurance-Data-Project",
    embedUrl: "https://app.powerbi.com/view?r=eyJr...",
    slides: "Risk_Mitigation_Strategies_Q1_Claims_Analysis.pdf",
    slideLabel: "Strategic Insights Deck",
    skills: ["Tableau", "SQL", "MySQL Workbench 8.0.40", "Transaction Profiling", "Risk Mapping"]
  }
];
