import { useState } from "react";
import fanxoLogo from "@/assets/fanxo-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Community", href: "#community" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src={fanxoLogo} alt="FANXO" className="h-10 md:h-12 w-auto rounded-full ring-2 ring-primary/40 group-hover:ring-primary transition-all" />
          <span className="font-display text-2xl md:text-3xl text-gold-gradient tracking-wider hidden sm:inline">FANXO</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#community"
            className="hidden sm:inline-flex border border-neon/70 bg-neon/5 px-5 py-2 font-heading text-xs tracking-[0.3em] text-neon hover:bg-neon hover:text-background transition-all uppercase"
          >
            Join The Revolt
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#community"
              onClick={() => setMobileOpen(false)}
              className="border border-neon/70 bg-neon/5 px-5 py-2 font-heading text-xs tracking-[0.3em] text-neon text-center uppercase mt-2"
            >
              Join The Revolt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
