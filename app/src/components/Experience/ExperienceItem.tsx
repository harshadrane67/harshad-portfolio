interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  description: string[];
  image: string;
}

export default function ExperienceItem({
  company,
  role,
  duration,
  description,
  image,
}: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[35%_1fr] gap-8 items-start">

      {/* IMAGE */}
      <div className="w-full max-w-[420px] mx-auto md:mx-0">
        <div
          className="
            aspect-[7/6] rounded-2xl overflow-hidden
            border border-slate-700
            shadow-lg shadow-black/20
            transition-transform duration-300 ease-out
            hover:scale-[1.03]
          "
        >
          <img
            src={image}
            alt={`${company} team`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="font-bold text-slate-100 text-2xl md:text-[2.5rem] leading-tight">
          {company}
        </h3>

        <p className="text-sm text-slate-400 mt-1">
          {role} · {duration}
        </p>

        <ul className="mt-4 space-y-3 text-slate-300 leading-relaxed list-disc list-inside">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
