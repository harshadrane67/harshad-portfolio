import SectionHeader from "../SectionHeader/SectionHeader";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      <SectionHeader
        title="Experience"
      />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        
        <ExperienceItem
          company="Cornerstone OnDemand"
          role="Software Engineer"
          duration="2023 – Present"
          image="/cornerstone.jpg"
          description={[
            "Built and maintained scalable enterprise applications using C# and .NET. and maintained scalable enterprise applications using C# and .NET. ",
            "Worked on performance optimizations and bug fixes across multiple modules.",
            "Collaborated with cross-functional teams to deliver features on time.",
            "Built and maintained scalable enterprise applications using C# and .NET. and maintained scalable enterprise applications using C# and .NET. ",
            "Worked on performance optimizations and bug fixes across multiple modules.",
            "Collaborated with cross-functional teams to deliver features on time.",
          ]}
        />

        <ExperienceItem
          company="GEP Worldwide"
          role="Associate Software Engineer"
          duration="2022 – 2023"
          image="/gep.jpg"
          description={[
            "Developed backend services using ASP.NET and SQL Server.",
            "Implemented REST APIs and improved system reliability.",
            "Participated in code reviews and agile ceremonies.",
          ]}
        />

      </div>
    </section>
  );
};

export default Experience;
