import SkillBadge from "./SkillBadge";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="space-y-4">
      
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>

    </div>
  );
};

export default SkillCategory;
