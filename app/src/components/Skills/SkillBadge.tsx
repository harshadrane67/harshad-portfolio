interface SkillBadgeProps {
  label: string;
}

const SkillBadge = ({ label }: SkillBadgeProps) => {
  return (
    <span
      className="
        inline-flex items-center
        px-4 py-2
        text-sm font-medium
        rounded-full
        bg-slate-800 text-slate-200
        border border-slate-700
        hover:bg-slate-700 hover:text-white
        transition-colors duration-200
        cursor-default
      "
    >
      {label}
    </span>
  );
};

export default SkillBadge;
