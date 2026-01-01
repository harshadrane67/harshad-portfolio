import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const memojiImages = [
  "/memoji/Harshad-1.png",
  "/memoji/Harshad-2.png",
  "/memoji/Harshad-3.png",
];

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % memojiImages.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left side – Memoji */}
        <div className="flex items-center gap-3">
          <div className="w-18 h-18 relative">
            <img
              key={currentIndex}
              src={memojiImages[currentIndex]}
              alt="Harshad memoji"
              className="absolute inset-0 w-full h-full object-contain rounded-full
                         transition-opacity duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Right side – Icons */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <a
            href="mailto:harshadrane67@gmail.com"
            className="hover:text-slate-900"
            aria-label="Send Mail"
          >
            <Mail size={18} />
          </a>

          <a
            href="tel:+918928757614"
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
