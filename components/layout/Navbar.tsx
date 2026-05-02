"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Explore", href: "#featured" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Hosts", href: "#hosts" },
  { label: "About", href: "#why-akhaya" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 lg:px-5",
          scrolled
            ? "border-white/70 bg-[#fffaf1]/80 shadow-[0_18px_60px_rgba(74,55,38,0.16)] backdrop-blur-2xl"
            : "border-white/35 bg-[#fffaf1]/28 backdrop-blur-md",
        )}
      >
        <a href="/" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-[#201a16] text-[#f7dfab] shadow-[0_10px_30px_rgba(32,26,22,0.28)]">
            <Sparkles className="size-4" />
          </span>
          <span>
            <span className="block font-serif text-xl leading-none tracking-[-0.03em] text-[#201a16]">
              Akhaya Escapes
            </span>
            <span className="hidden text-[0.64rem] uppercase tracking-[0.24em] text-[#8b765f] sm:block">
              Verified for real life
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#51443b] transition hover:text-[#b76345]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full px-4 py-2 text-sm font-medium text-[#51443b] transition hover:bg-white/45">
            Sign In
          </button>
          <PremiumButton size="sm">Book a Stay</PremiumButton>
        </div>

        <button
          className="grid size-11 place-items-center rounded-full border border-[#eadbc4] bg-white/45 text-[#201a16] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.8rem] border border-white/60 bg-[#fffaf1]/88 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden",
          open ? "max-h-[30rem] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="grid gap-2 p-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[#51443b] transition hover:bg-[#f4ead9]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-3">
            <button className="rounded-full border border-[#e7d6bd] px-4 py-3 text-sm font-semibold text-[#51443b]">
              Sign In
            </button>
            <PremiumButton size="sm">Book a Stay</PremiumButton>
          </div>
        </div>
      </div>
    </header>
  );
}
