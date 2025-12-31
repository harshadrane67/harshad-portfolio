import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

const roles = ["Harshad", "Software Engineer", ".NET Developer"];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">
        Hi 👋, I am{" "}
        <span className="text-blue-600">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-xl text-slate-600 text-base md:text-lg">
        I build scalable, reliable and clean software with modern technologies.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex gap-4">
        <a
          href="tel:+91XXXXXXXXXX"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          <Phone size={18} />
          Call
        </a>

        <a
          href="mailto:yourmail@gmail.com"
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-900 hover:bg-slate-100 transition"
        >
          <Mail size={18} />
          Email
        </a>
      </div>
    </section>
  );
};

export default Hero;
