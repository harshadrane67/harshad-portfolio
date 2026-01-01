type EducationItemProps = {
  degree: string;
  major: string;
  university: string;
  score: string;
  scoreType: "CGPA" | "%";
};

const EducationItem = ({
  degree,
  major,
  university,
  score,
  scoreType,
}: EducationItemProps) => {
  const [integer, decimal] = score.split(".");

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
      {/* Score */}
      <div className="order-1 md:order-2 flex flex-col items-center md:items-end min-w-[120px]">
        <div className="flex items-baseline font-bold">
          <span className="text-4xl md:text-3xl">{integer}</span>
          <span className="text-4xl md:text-3xl mx-[2px]">.</span>
          <span className="text-xl md:text-lg">{decimal}</span>
        </div>
        <span className="text-sm font-semibold tracking-wide">
          {scoreType}
        </span>
      </div>

      {/* Details */}
      <div className="order-2 md:order-1 text-center md:text-left max-w-full md:max-w-[70%]">
        <h3 className="font-bold text-xl">
          {degree}
        </h3>

        <p className="italic font-light mt-1 text-gray-600">
          {major}
        </p>

        <p className="italic font-medium mt-1 text-gray-700">
          {university}
        </p>
      </div>
    </div>
  );
};

export default EducationItem;
