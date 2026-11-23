import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  quote?: string;
  priority?: boolean;
  tone?: "ink" | "light";
  surface?: "paper" | "dark";
  height?: string;
  className?: string;
  objectPosition?: string;
};

/** A full-bleed photographic plate with an optional line over it and a caption in the margin. */
export function PhotoBand({
  src,
  alt,
  caption,
  quote,
  priority = false,
  tone = "ink",
  surface = "paper",
  height = "h-[clamp(16rem,40vw,34rem)]",
  className = "",
  objectPosition = "center",
}: Props) {
  return (
    <figure className={`${surface === "paper" ? "bg-paper" : "bg-bg-deep"} ${className}`}>
      <div className={`relative w-full overflow-hidden ${height}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover brightness-[0.82] contrast-[1.04] saturate-[0.92]"
          style={{ objectPosition }}
        />
        {quote ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1510]/85 via-[#0a1510]/20 to-transparent" />
            <div className="gutter page absolute inset-x-0 bottom-0 pb-7 lg:pb-10">
              <p className="max-w-[18ch] font-display text-[clamp(1.8rem,4vw,4rem)] leading-[1.02] tracking-[-0.024em] text-fg">
                {quote}
              </p>
            </div>
          </>
        ) : null}
      </div>
      {caption ? (
        <figcaption className={`gutter page py-3 text-[0.78rem] leading-relaxed ${tone === "light" ? "text-fg/50" : "text-ink-soft"}`}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
