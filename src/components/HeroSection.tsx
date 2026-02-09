import fanxoLogo from "@/assets/fanxo-logo.png";
import grungeBg from "@/assets/grunge-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{ backgroundImage: `url(${grungeBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="absolute -inset-8 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
          <div className="absolute -inset-4 rounded-full bg-neon/5 blur-2xl" />
          <img
            src={fanxoLogo}
            alt="FANXO - F*** The System, HODL This"
            className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 relative z-10 animate-float drop-shadow-2xl rounded-full ring-4 ring-primary/20"
          />
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-gold-gradient tracking-wider mb-3 leading-none">
          F*CK THE SYSTEM.
        </h1>
        <p className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wider mb-10">
          HODL THIS.
        </p>

        {/* Token info bar */}
        <div className="flex flex-wrap items-center justify-center gap-0 mb-8 border border-border/60 bg-muted/30 backdrop-blur-sm">
          <span className="px-5 py-3 font-heading text-sm tracking-[0.2em] uppercase text-primary border-r border-border/40">Solana</span>
          <span className="px-5 py-3 font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground border-r border-border/40">
            Ticker: <span className="text-primary">$FANXO</span>
          </span>
          <span className="px-5 py-3 font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Supply: <span className="text-primary">1,000,000,000</span>
          </span>
        </div>

        {/* Social icons */}
        <div className="flex gap-3 mb-10">
          {[
            { icon: "𝕏", label: "Twitter" },
            { icon: "✈", label: "Telegram" },
            { icon: "💬", label: "Discord" },
            { icon: "📡", label: "Reddit" },
          ].map((s, i) => (
            <a
              key={i}
              href="#"
              title={s.label}
              className="w-11 h-11 border border-neon/40 bg-neon/5 flex items-center justify-center text-neon hover:bg-neon hover:text-background transition-all text-lg backdrop-blur-sm"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Launch badge */}
        <div className="border border-primary/50 bg-primary/10 backdrop-blur-sm px-8 py-3 font-heading text-sm tracking-[0.4em] text-primary uppercase glow-gold animate-pulse-glow">
          ◆ Launching Soon on Raydium ◆
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
