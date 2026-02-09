const CTASection = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="font-display text-5xl md:text-6xl text-gold-gradient tracking-wider mb-4">
            Join the Revolt!
          </h2>
          <p className="text-foreground/80 text-lg font-body mb-8">
            Become part of the <span className="text-primary font-bold">FANXO Army</span>. 
            HODL and defy the system's bullsh*t!
          </p>
          <button className="border-2 border-neon bg-neon/10 px-8 py-3 font-heading text-base tracking-[0.3em] text-neon hover:bg-neon hover:text-background transition-all uppercase glow-green">
            Join Our Community
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <h3 className="font-display text-6xl md:text-7xl text-neon glow-green-text tracking-wider">
              HODL THIS ↗
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
