import Image from "next/image";

export function OptionalImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  if (!src) return null;

  return (
    <div className={`glass-card overflow-hidden p-1.5 sm:p-2 ${className}`}>
      <div className="relative w-full overflow-hidden rounded-xl bg-surface">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
