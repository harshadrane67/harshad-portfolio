type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div
      className="
        sticky top-16 z-40
        bg-slate-900/80
        backdrop-blur
        border-b border-white/10
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
