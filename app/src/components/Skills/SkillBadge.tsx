interface SkillBadgeProps {
  label: string;
}

const SkillBadge = ({ label }: SkillBadgeProps) => {
  return (
    <span className="
      inline-flex items-center
      px-4 py-2
      text-sm font-medium
      rounded-full
      bg-gray-100 text-gray-800
      hover:bg-black hover:text-white
      transition-colors duration-200
      cursor-default
    ">
      {label}
    </span>
  );
};

export default SkillBadge;
