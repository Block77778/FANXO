import fanxoCoin from "@/assets/fanxo-coin.png";
import grungeBg from "@/assets/grunge-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${grungeBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Top nav */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:p-6 z-10">
        <div className="flex gap-2">
          {["🇺🇸", "🇫🇷", "🇩🇪", "🇯🇵"].map((flag, i) => (
            <span key={i} className="text-lg cursor-pointer hover:scale-110 transition-transform">{flag}</span>
          ))}
        </div>
        <button className="border border-neon px-4 py-2 font-heading text-sm tracking-widest text-neon hover:bg-neon hover:text-background transition-all uppercase">
          Join The Revolt
        </button>
      </nav>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16">
        {/* Coin */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          <img
            src={fanxoCoin}
            alt="FANXO Coin"
            className="w-48 h-48 md:w-72 md:h-72 relative z-10 animate-float drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold-gradient tracking-wider mb-2">
          HODL THIS.
        </h1>
        <p className="font-heading text-2xl md:text-4xl text-foreground tracking-wide mb-8 uppercase">
          F*ck the System. HODL This.
        </p>

        {/* Token info bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6 font-heading text-sm md:text-base tracking-widest uppercase text-muted-foreground">
          <span className="text-primary font-bold">Solana</span>
          <span className="border-l border-border pl-4">Ticker: <span className="text-primary">$FANXO</span></span>
          <span className="border-l border-border pl-4">Supply: <span className="text-primary">1,000,000,000</span></span>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 mb-8">
          {["𝕏", "💬", "📱", "🔗"].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 border border-neon/50 flex items-center justify-center text-neon hover:bg-neon hover:text-background transition-all text-lg"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Launch badge */}
        <div className="border border-primary/60 bg-primary/10 px-6 py-2 font-heading text-sm tracking-[0.3em] text-primary uppercase glow-gold animate-pulse-glow">
          Launching Soon on Raydium
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
