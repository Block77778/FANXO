import fanxoLogo from "@/assets/fanxo-logo.png";

const slogans = [
  "I think freely. I leave the herd. I choose FANXO.",
  "My money does not belong to you: FANXO is my revolt.",
  "I don't invest to obey. I buy FANXO to destroy your game.",
  "A token, a middle finger, millions of consciences awakening.",
];

const hashtags = [
  "#ThinkFree", "#LeaveTheHerd", "#FanxoRevolt", "#BuyFanxo",
  "#NoToMarketWolves", "#StopSpeculators", "#BeyondBanks", "#AwakenPublicConscience",
];

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
              The Conscious<br />Revolt Starts<br />Here.
            </h2>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-body">
              FANXO is the choice for those who no longer want to be passive spectators but{" "}
              <span className="text-primary font-semibold">protagonists of a conscious revolt</span>: a symbol of breaking away, rebellion, and liberation from financial blackmail.
            </p>
            <p className="text-foreground/60 text-base leading-relaxed font-body">
              If you feel like part of the herd, leave it be. But if you feel something inside you is rebelling,{" "}
              <span className="text-neon font-semibold">'buy FANXO'</span> becomes your political act, your ultimate gesture of freedom.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#roadmap" className="bg-primary px-6 py-3 font-heading text-xs tracking-[0.2em] uppercase text-primary-foreground hover:bg-primary/80 transition-colors">
                View Roadmap
              </a>
              <a href="#community" className="border border-border px-6 py-3 font-heading text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
                Join The Revolt
              </a>
            </div>
          </div>

          {/* Right — slogans */}
          <div className="flex items-center justify-center">
            <div className="relative p-8 md:p-12">
              <div className="absolute inset-0 bg-neon/[0.03] blur-3xl rounded-full" />
              <div className="absolute inset-0 border border-neon/10 rounded-lg" />
              <div className="relative space-y-6">
                <img src={fanxoLogo} alt="" className="w-24 h-24 mx-auto rounded-full ring-2 ring-primary/20 mb-6" />
                {slogans.map((s, i) => (
                  <blockquote
                    key={i}
                    className="font-body text-sm md:text-base text-foreground/80 italic border-l-2 border-primary/40 pl-4"
                  >
                    "{s}"
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hashtags */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="border border-neon/30 bg-neon/5 px-4 py-1.5 font-heading text-[10px] tracking-[0.2em] uppercase text-neon"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
