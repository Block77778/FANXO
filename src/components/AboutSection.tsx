const AboutSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-gold-gradient mb-6 tracking-wider">
              Time to Give the System the Finger!
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed font-body">
              For those who give the <span className="text-primary font-bold">middle finger</span> to the system, 
              FANXO is your token of defiance. Join the rebels of crypto and break free from the chains of control!
            </p>
          </div>

          {/* Right callout */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neon/5 blur-3xl rounded-full" />
              <h3 className="relative font-display text-5xl md:text-6xl text-neon glow-green-text text-center leading-tight tracking-wider">
                SHOW THE<br />SYSTEM<br />WHO'S BOSS!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
