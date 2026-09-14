// components/common/section-heading.tsx
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "text-center mx-auto" : "text-left";
  const textColor = theme === "dark" ? "text-sand" : "text-cyprus";
  const mutedColor = theme === "dark" ? "text-sand/75" : "text-muted";
  const eyebrowColor = theme === "dark" ? "text-sand/80" : "text-cyprus";

  return (
    <div className={`max-w-3xl mb-6 ${alignmentClass}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full mb-4 ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-cyprus/5 border border-cyprus/10"}`}
        >
          <span
            className={`text-xs font-bold tracking-[0.12em] uppercase ${eyebrowColor}`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4 ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg font-medium leading-relaxed ${mutedColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
