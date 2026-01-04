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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left – Memoji */}
        <div className="flex items-center gap-3">
          <div className="w-18 h-18 relative">
            <img
              key={currentIndex}
              src={memojiImages[currentIndex]}
              alt="Harshad memoji"
              className="
                absolute inset-0 w-full h-full
                object-contain rounded-full
                transition-opacity duration-500 ease-in-out
              "
            />
          </div>
        </div>

        {/* Right – Icons */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a
            href="mailto:harshadrane67@gmail.com"
            aria-label="Send Mail"
            className="text-slate-300 hover:text-white transition"
          >
            <Mail size={18} />
          </a>

          <a
            href="tel:+918928757614"
            aria-label="Call"
            className="text-slate-300 hover:text-white transition"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
