import fanxoLogo from "@/assets/fanxo-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/40 bg-background">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={fanxoLogo} alt="FANXO" className="h-12 w-auto rounded-full ring-2 ring-primary/30" />
              <span className="font-display text-3xl text-gold-gradient tracking-wider">FANXO</span>
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed max-w-xs">
              The ultimate token of defiance. Built on Solana for the rebels who refuse to play by the system's rules.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Navigate</h4>
              <ul className="space-y-3">
                {["About", "Roadmap", "Tokenomics", "Community"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Socials</h4>
              <ul className="space-y-3">
                {[
                  { name: "Twitter / X", icon: "𝕏", href: "https://x.com/FANXO4855071" },
                  { name: "Telegram", icon: "✈", href: "https://t.me/+JRrYRw2jcHMzYjNk" },
                  { name: "Email", icon: "✉", href: "mailto:fanxo.crypto@proton.me" },
                ].map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body flex items-center gap-2">
                      <span>{s.icon}</span> {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-primary">Stay Informed</h4>
            <p className="text-sm text-muted-foreground font-body">Get updates on the launch and exclusive drops.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-muted/50 border border-border px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
              <button className="bg-primary px-5 py-2.5 font-heading text-xs tracking-[0.2em] uppercase text-primary-foreground hover:bg-primary/80 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 FANXO. All rights reserved. Not financial advice.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground font-body">Built on <span className="text-primary">Solana</span></span>
            <span className="text-xs text-muted-foreground font-body">Ticker: <span className="text-primary">$FANXO</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
