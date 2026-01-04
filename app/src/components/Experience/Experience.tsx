import ExperienceItem, { type ExperienceData } from "./ExperienceItem";
import Timeline from "./Timeline";
import SectionHeader from "../SectionHeader/SectionHeader";
import cornerstoneLogo from "/cornerstone-white-png2.png";
import gepLogo from "/gep-white.png"


const experiences: ExperienceData[] = [
  {
    title: "Software Engineer",
    company: "Cornerstone OnDemand",
    logo: cornerstoneLogo,
    aboutCompany:
      "Cornerstone OnDemand is a leading product-based company specializing in AI-powered LMS and HR software. Its flagship platform, Cornerstone Galaxy, empowers 125 million users across 180 countries to build future-ready workforces.",
    myTeamRole: [
      "Succession: I began my journey at Cornerstone on the Succession team, working on a legacy monolith architecture. My primary focus was managing leadership transition workflows to ensure business continuity across the organization.",
      "Check-ins: I transitioned to the Check-ins team to work on a modern tech stack (React, .NET Core, and GraphQL). This performance management tool enables ongoing coaching and alignment through scheduled one-on-ones and templated feedback.",
      "Skills & Capability: Currently, I work on the Skills team managing the Capability Model. This module allows administrators to define groups of critical skills and competencies for specific audiences, directly influencing personalized skill development and organizational growth.",
    ],
    accomplishments: [
      "Optimized the Get Capability Model API by restructuring SQL scripts and implementing strategic indexing, which successfully reduced response times by 88% (from 8s to 0.9s).",
      "Redesigned the Talent Pool Admin module using a hybrid approach (ASPX + .NET Core) to enable ownership transfers, effectively reducing manual work order requests by ~40-45%.",
      "Developed the AI Summary feature for the Check-in application, which automatically generates meeting summaries with customizable tones and timeframes to help managers review insights faster.",
    ],
    isLogoVisible: true,
    startDate: "June 2024",
    endDate: "Present",
  },
  {
    title: "Software Engineer",
    company: "GEP Worldwide",
    logo: gepLogo,
    aboutCompany:
      "GEP provides AI-powered procurement and supply chain solutions.",
    myTeamRole: [
      "Worked on backend APIs",
      "Angular Office add-ins",
      "and CI/CD pipelines.",
    ],
    accomplishments: [
      "Reduced Auction Dashboard API load time by 93%.",
      "Improved CI pipeline pass rate from 36% to 91%.",
      "Built xUnit test suites with ~100% line coverage.",
    ],
    isLogoVisible: true,
    startDate: "March 2023",
    endDate: "June 2024",
  },
  {
    title: "Associate Software Engineer",
    company: "GEP Worldwide",
    logo: gepLogo,
    aboutCompany:
      "GEP provides AI-powered procurement and supply chain solutions.",
    myTeamRole: [
      "Worked on backend APIs",
      "Angular Office add-ins",
      "and CI/CD pipelines.",
    ],
    accomplishments: [
      "Reduced Auction Dashboard API load time by 93%.",
      "Improved CI pipeline pass rate from 36% to 91%.",
      "Built xUnit test suites with ~100% line coverage.",
    ],
    isLogoVisible: false,
    startDate: "June 2022",
    endDate: "March 2023",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-slate-900">
      <SectionHeader title="Experience" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-[30%_70%] gap-12">
        {/* Timeline */}
        <Timeline items={experiences} />

        {/* Content */}
        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} data={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
