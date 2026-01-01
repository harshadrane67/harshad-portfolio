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
        hover:bg-gray-100
        transition
      "
    >
      <div className="text-xl">{icon}</div>

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </a>
  );
};

export default ContactItem;
