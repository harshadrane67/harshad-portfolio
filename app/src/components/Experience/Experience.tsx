import SectionHeader from "../SectionHeader/SectionHeader";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-900">
      <SectionHeader title="Experience" />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <ExperienceItem
          company="Cornerstone OnDemand"
          role="Software Engineer"
          duration="2023 – Present"
          image="/cornerstone.jpg"
          description={[
            "Optimized Get Capability Model API by restructuring SQL scripts and adding indexes, reducing response time by 88% (8s → 0.9s).",
            "Redesigned backend schema to support competency entities while ensuring backward compatibility across REST and GraphQL APIs.",
            "Engineered the Talent Pool Admin module (ASPX + ASP.NET Core) to enable ownership transfers, reducing work order requests by approximately 40–45%.",
            "Leveraged the existing Role-Based Access Control (RBAC) system in the Talent Pool Admin page to enforce regional access restrictions when updating talent pool owners.",
            "Developed an AI Summary feature for the Check-in app that automatically generates meeting summaries in native languages with tone and timeframe options, enabling faster insight review for managers.",
            "Built reusable React micro-frontend components for cross-product usage post-acquisition, ensuring interoperability and UI consistency.",
            "Optimized SQL queries and the Capability Model EPIC, improving performance and maintainability across both legacy (ASPX) and React-based modules.",
            "Collaborated with cross-border teams on code reviews, sprint planning, and releases to ensure timely delivery of all assigned epics."
          ]}
        />

        <ExperienceItem
          company="GEP Worldwide"
          role="Associate Software Engineer"
          duration="2022 – 2023"
          image="/gep.jpg"
          description={[
            "Optimized Auction Dashboard and Guideline APIs (C#, ASP.NET Core), reducing load time by 93% (5s → 0.34s) in performance environments.",
            "Engineered an Angular Office Add-in and integrated an AI chatbot plugin architecture in collaboration with a cross-border Romanian development team.",
            "Redesigned Cypress automation in TypeScript, increasing CI pipeline pass rate from 36% to 91% and reducing test execution time by 84%.",
            "Developed xUnit test suites for 10+ microservices, achieving approximately 100% line coverage and 91% branch coverage through robust unit testing strategies.",
            "Led Agile sprints, coordinated Azure CI/CD releases, and resolved post-release issues through detailed root cause analysis (RCA), ensuring stable production delivery."
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
