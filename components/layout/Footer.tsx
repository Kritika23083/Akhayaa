import Link from "next/link";

const footerGroups = [
  {
    title: "Akhaya",
    links: [
      { label: "Explore", href: "#featured" },
      { label: "Destinations", href: "#destinations" },
      { label: "Experiences", href: "#experiences" },
      { label: "Hosts", href: "#hosts" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#why-akhaya" },
      { label: "Contact", href: "mailto:hello@akhayaescapes.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Trust & Safety", href: "#trust" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Cancellation Policy", href: "/" },
      { label: "Terms", href: "/" },
      { label: "Privacy", href: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#e8dccb] bg-[#1f1a16] text-[#f7ecdc]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div>
          <Link href="/" className="inline-flex flex-col">
            <span className="font-serif text-3xl">Akhaya Escapes</span>
            <span className="mt-2 text-sm tracking-[0.28em] text-[#d5b271]">
              BEAUTIFUL STAYS. VERIFIED FOR REAL LIFE.
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#d8cbbb]">
            A premium discovery platform for handpicked stays, meaningful escapes, and
            real-life verified travel experiences across India.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d5b271]">
                {group.title}
              </h3>
              <div className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-[#efe3d3]/78 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs uppercase tracking-[0.2em] text-[#cdbfab]">
        Phase 1 frontend concept - no bookings, payments, or authentication yet.
      </div>
    </footer>
  );
}
