import fanxoLogo from "@/assets/fanxo-logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 md:px-8">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-primary/40" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div className="space-y-6">
            <div className="inline-block border border-primary/40 bg-primary/5 px-4 py-1.5 font-heading text-[10px] tracking-[0.4em] uppercase text-primary mb-2">
              The Movement
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-gold-gradient tracking-wider leading-none">
              Time to Give<br />the System<br />the Finger!
            </h2>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-body">
              For those who give the <span className="text-primary font-semibold">middle finger</span> to the system,
              FANXO is your token of defiance. Join the rebels of crypto and break free from the chains of control!
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#roadmap" className="bg-primary px-6 py-3 font-heading text-xs tracking-[0.2em] uppercase text-primary-foreground hover:bg-primary/80 transition-colors">
                View Roadmap
              </a>
              <a href="#community" className="border border-border px-6 py-3 font-heading text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Right callout */}
          <div className="flex items-center justify-center">
            <div className="relative p-12">
              <div className="absolute inset-0 bg-neon/[0.03] blur-3xl rounded-full" />
              <div className="absolute inset-0 border border-neon/10 rounded-lg" />
              <div className="relative text-center space-y-4">
                <img src={fanxoLogo} alt="" className="w-24 h-24 mx-auto rounded-full ring-2 ring-neon/20 mb-6" />
                <h3 className="font-display text-5xl md:text-6xl text-neon glow-green-text leading-tight tracking-wider">
                  SHOW THE<br />SYSTEM<br />WHO'S BOSS!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
