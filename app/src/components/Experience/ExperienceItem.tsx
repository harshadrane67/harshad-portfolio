export interface ExperienceData {
  title: string;
  company: string;
  logo?: string;
  aboutCompany: string;
  myTeamRole: string[];
  accomplishments: string[];
  isLogoVisible: boolean;
  startDate: string;
  endDate: string;
}

export default function ExperienceItem({ data }: { data: ExperienceData }) {
  return (
    <article className="relative scroll-mt-32">
      {/* Logo */}
      {data.isLogoVisible && data.logo && (
        <img
          src={data.logo}
          alt={data.company}
          className="w-auto h-10 mb-6 rounded-xl"
        />
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-blue-400">{data.title}</h3>

      <p className="text-slate-400 mt-1">{data.company}</p>
      <p className="text-slate-400 mt-1">
        {data.startDate} – {data.endDate}
      </p>

      {/* About */}
      <section className="mt-8">
        <h4 className="text-slate-200 font-medium mb-2">About Company</h4>
        <p className="text-slate-400 leading-relaxed whitespace-pre-line">
          {data.aboutCompany}
        </p>
      </section>

      {/* Role */}
      <section className="mt-6">
        <h4 className="text-slate-200 font-medium mb-2">My Team & Role</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-400">
          {data.myTeamRole.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Accomplishments */}
      <section className="mt-6">
        <h4 className="text-slate-200 font-medium mb-3">Accomplishments</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-400">
          {data.accomplishments.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
