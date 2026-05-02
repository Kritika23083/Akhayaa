import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#9d6a46]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#211b17] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#65594f] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
