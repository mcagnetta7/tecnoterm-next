import Image from "next/image";

export default function Partner() {
  const partners = [
    { name: "General Fujitsu", src: "/genfujitsu-logo.png", url: "https://www.fujitsu.com" },
    { name: "Unical", src: "/unical-logo.jpeg", url: "https://www.unicalag.it" },
    { name: "Sylber", src: "/sylber-logo.jpg", url: "https://www.sylber.it" },
  ];

  return (
    <section className="mt-10 md:mt-12">
      <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-center">
        Partner
      </h2>
      <p className="mt-2 text-sm text-slate-600 text-center">
        Collaborazioni selezionate per garantire qualità e continuità del servizio.
      </p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {partners.map(({ name, src, url }) => (
          <a 
            key={name} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image
              src={src}
              alt={`Logo ${name}`}
              width={src.includes('genfujitsu') ? 140 : 112}
              height={src.includes('genfujitsu') ? 70 : 56}
              className="object-contain"
            />
            <span className="mt-2 text-sm text-slate-700">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}