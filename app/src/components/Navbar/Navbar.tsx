import { Mail, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left side - Name */}
        <div className="text-lg font-semibold text-slate-900">
          Harshad
        </div>

        {/* Right side - Navigation */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <button className="hover:text-slate-900 transition">
            Experience
          </button>

          <button className="hover:text-slate-900 transition">
            Skills
          </button>

          <a
            href="/resume.pdf"
            className="flex items-center gap-1 hover:text-slate-900 transition"
          >
            Resume
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-slate-900"
            aria-label="Send Mail"
          >
            <Mail size={18} />
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="hover:text-slate-900"
            aria-label="Call"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
