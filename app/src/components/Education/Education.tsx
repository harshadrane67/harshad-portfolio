import SectionHeader from "../SectionHeader/SectionHeader";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <section id="education" className="relative">
      {/* Sticky Section Header */}
      <SectionHeader title="Education" />

      {/* Education Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <EducationItem
          degree="Bachelor Of Engineering"
          major="Computer Engineering"
          university="Pillai College of Engineering (Mumbai University)"
          score="8.49"
          scoreType="CGPA"
        />

        <EducationItem
          degree="Diploma"
          major="Computer Engineering"
          university="Dr. D. Y. Patil Polytechnic (MSBTE)"
          score="88.56"
          scoreType="%"
        />
      </div>
    </section>
  );
};

export default Education;
