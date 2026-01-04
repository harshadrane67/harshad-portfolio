import SectionHeader from "../SectionHeader/SectionHeader";
import SkillCategory from "./SkillCategory";

const Skills = () => {
  return (
    <section id="skills" className="relative">
      
      {/* Sticky Header */}
      <SectionHeader
        title="Skills"
      />

      {/* Skills Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-12 md:grid-cols-2">
        
        <SkillCategory
          title="Backend"
          skills={[
            "C#",
            ".NET",
            "ASP.NET Core",
            "REST API",
            "Entity Framework",
            "LINQ",
            "Microservices"
          ]}
        />

        <SkillCategory
          title="Frontend"
          skills={[
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS"
          ]}
        />

        <SkillCategory
          title="Databases"
          skills={[
            "SQL Server",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
          ]}
        />

        <SkillCategory
          title="Cloud & Tools"
          skills={[
            "AWS",
            "Azure",
            "Docker",
            "Git",
            "GitHub",
            "CI/CD",
            "Jenkins",
            "Postman"
          ]}
        />

      </div>
    </section>
  );
};

export default Skills;
