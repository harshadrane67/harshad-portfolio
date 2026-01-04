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
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100">
        Hi 👋, I am{" "}
        <span className="text-blue-400">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-xl text-slate-400 text-base md:text-lg">
        I build scalable, reliable and clean software with modern technologies.
      </p>

      {/* CTA buttons */}
<div className="mt-10 flex justify-center gap-4">

  {/* Primary: Call */}
  <a
  href="tel:+918928757614"
  className="
    flex items-center gap-2 px-7 py-3.5 rounded-full
    bg-blue-500/90
    text-white font-medium
    shadow-[0_8px_20px_rgba(59,130,246,0.35)]
    hover:bg-blue-400
    hover:shadow-[0_10px_25px_rgba(59,130,246,0.45)]
    transition-all duration-300
    active:scale-[0.97]
  "
>
  <Phone size={18} />
  Call
</a>



  {/* Secondary: Email */}
  <a
  href="mailto:harshadrane67@gmail.com"
  className="
    flex items-center gap-2 px-7 py-3.5 rounded-full
    bg-white/10
    backdrop-blur-md
    text-slate-200 font-medium
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
    hover:bg-white/15
    transition-all duration-300
    active:scale-[0.97]
  "
>
  <Mail size={18} />
  Email
</a>


</div>

    </section>
  );
};

export default Hero;
