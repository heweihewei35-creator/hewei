import Image from "next/image";

export function PortraitSection() {
  return (
    <section className="mx-auto w-full max-w-[680px]">
      <div className="section-card relative aspect-[3/4] overflow-hidden rounded-[1.1rem] p-0">
        <Image
          src="/00741b924b1a6d89f2bee0f0814de356.jpg"
          alt="Personal portrait"
          fill
          priority
          className="object-cover object-[50%_24%]"
          sizes="(max-width: 768px) 88vw, 680px"
        />
      </div>
    </section>
  );
}

