import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import ResumePreview from "./ResumePreview";
import ContactItem from "./ContactItem";
import SectionHeader from "../SectionHeader/SectionHeader";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      {/* Sticky Header */}
      <SectionHeader title="Contact & Resume" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-12 md:grid-cols-2">
        {/* Left - Resume */}
        <ResumePreview />

        {/* Right - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Contact Information</h3>

          <ContactItem
            icon={<MapPin />}
            label="Location"
            value="Airoli, Navi Mumbai, Maharashtra, India"
            href="https://www.google.com/maps/search/?api=1&query=Airoli+Navi+Mumbai"
          />

          <ContactItem
            icon={<Mail />}
            label="Email"
            value="harshadrane67@gmail.com"
            href="mailto:harshadrane67@gmail.com"
          />

          <ContactItem
            icon={<Linkedin />}
            label="LinkedIn"
            value="linkedin.com/in/rane-harshad/"
            href="https://www.linkedin.com/in/rane-harshad/"
          />

          <ContactItem
            icon={<Github />}
            label="GitHub"
            value="github.com/harshadrane67"
            href="https://github.com/harshadrane67"
          />

          <ContactItem
            icon={<Phone />}
            label="Phone"
            value="+91 89287 57614"
            href="tel:+918928757614"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
