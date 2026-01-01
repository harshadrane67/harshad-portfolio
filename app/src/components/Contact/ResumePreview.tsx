const RESUME_PREVIEW_URL =
  "https://drive.google.com/file/d/1NBPv5hTd9lPc6rdUC5ml5X4iWvHulJv5/preview";

const RESUME_VIEW_URL =
  "https://drive.google.com/file/d/1NBPv5hTd9lPc6rdUC5ml5X4iWvHulJv5/view";

const ResumePreview = () => {
  return (
    <div className="space-y-4">
      
      <h3 className="text-xl font-semibold">
        Resume
      </h3>

      <div className="relative aspect-[3/4] rounded-xl overflow-hidden border">
        <iframe
          src={RESUME_PREVIEW_URL}
          className="w-full h-full"
          title="Resume Preview"
        />
      </div>

      <a
        href={RESUME_VIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2
          px-4 py-2
          text-sm font-medium
          border rounded-lg
          hover:bg-black hover:text-white
          transition
        "
      >
        View Full Resume
      </a>
    </div>
  );
};

export default ResumePreview;
