export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-wide text-teal">{eyebrow}</p>
      )}
      <h2 className="text-[28px] font-bold leading-tight text-navy sm:text-[34px]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-secondary sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
