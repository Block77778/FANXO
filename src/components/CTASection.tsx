const CTASection = () => {
  return (
    <section id="community" className="relative py-24 md:py-32 px-4 md:px-8">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-block border border-neon/40 bg-neon/5 px-4 py-1.5 font-heading text-[10px] tracking-[0.4em] uppercase text-neon mb-2">
              Community
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-gold-gradient tracking-wider leading-none">
              Join the<br />Revolt!
            </h2>
            <p className="text-foreground/70 text-base md:text-lg font-body max-w-md">
              Become part of the <span className="text-primary font-semibold">FANXO Army</span>.
              HODL and defy the system's bullsh*t!
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://t.me/+JRrYRw2jcHMzYjNk" target="_blank" rel="noopener noreferrer" className="border-2 border-neon bg-neon/10 px-8 py-3 font-heading text-xs tracking-[0.3em] text-neon hover:bg-neon hover:text-background transition-all uppercase glow-green">
                Join Telegram
              </a>
              <a href="https://x.com/FANXO4855071" target="_blank" rel="noopener noreferrer" className="border border-border px-8 py-3 font-heading text-xs tracking-[0.3em] text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all uppercase">
                Follow on X
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-neon/5 blur-3xl rounded-full" />
              <h3 className="relative font-display text-7xl md:text-8xl lg:text-9xl text-neon glow-green-text tracking-wider leading-none">
                HODL<br />THIS ↗
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
