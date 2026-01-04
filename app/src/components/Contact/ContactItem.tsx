import type { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-start gap-4
        p-4 rounded-lg

        bg-slate-900
        hover:bg-slate-800
        transition-colors
      "
    >
      {/* Icon */}
      <div className="text-xl text-slate-400">{icon}</div>

      {/* Text */}
      <div>
        <p className="text-sm text-slate-400">{label}</p>

        <p className="font-medium text-slate-100">{value}</p>
      </div>
    </a>
  );
};

export default ContactItem;
