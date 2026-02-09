import { useCountdown } from "@/hooks/useCountdown";
import fanxoLogo from "@/assets/fanxo-logo.png";

const phases = [
  { num: 1, title: "Launch on Raydium", description: "Token generation event & initial liquidity pool", active: true },
  { num: 2, title: "Spread the Mayhem", description: "Marketing blitz, influencer partnerships & viral campaigns", active: false },
  { num: 3, title: "Community Domination", description: "DAO governance, staking rewards & holder benefits", active: false },
  { num: 4, title: "Speculator Tears & Moonshot", description: "CEX listings, cross-chain bridges & global expansion", active: false },
];

const RoadmapSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 6);
  targetDate.setHours(targetDate.getHours() + 12);
  const timeLeft = useCountdown(targetDate);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="roadmap" className="relative py-24 md:py-32 px-4 md:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="inline-block border border-primary/40 bg-primary/5 px-4 py-1.5 font-heading text-[10px] tracking-[0.4em] uppercase text-primary mb-6">
          Roadmap
        </div>

        <h2 className="font-display text-4xl md:text-6xl text-gold-gradient mb-16 tracking-wider leading-none">
          The Path to<br />Revolution
        </h2>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div className="space-y-8">
            {/* Countdown */}
            <div className="border border-border/50 bg-muted/30 backdrop-blur-sm p-6 md:p-8">
              <p className="font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Phase 1 Launch In</p>
              <div className="flex gap-4 md:gap-6">
                {[
                  { val: pad(timeLeft.days), label: "Days" },
                  { val: pad(timeLeft.hours), label: "Hours" },
                  { val: pad(timeLeft.minutes), label: "Min" },
                  { val: pad(timeLeft.seconds), label: "Sec" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-4xl md:text-6xl text-primary glow-gold-text leading-none">
                      {item.val}
                    </div>
                    <div className="font-heading text-[10px] tracking-[0.2em] text-muted-foreground uppercase mt-2">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phases */}
            <div className="space-y-1">
              {phases.map((phase) => (
                <div
                  key={phase.num}
                  className={`flex items-start gap-5 p-5 border-l-2 transition-colors ${
                    phase.active
                      ? "border-l-neon bg-neon/5"
                      : "border-l-border/30 hover:bg-muted/20"
                  }`}
                >
                  <div className={`w-8 h-8 shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                    phase.active ? "bg-neon text-background" : "border border-neon/30 text-neon/50"
                  }`}>
                    {phase.num}
                  </div>
                  <div>
                    <h4 className="font-heading text-sm tracking-[0.15em] uppercase text-foreground mb-1">
                      Phase {phase.num}: {phase.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coin visual */}
          <div className="hidden lg:flex flex-col items-center justify-center sticky top-32">
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full animate-pulse-glow" />
              <img
                src={fanxoLogo}
                alt="FANXO"
                className="w-56 h-56 relative z-10 drop-shadow-2xl rounded-full ring-4 ring-primary/20"
              />
            </div>
            <div className="mt-8 border border-primary/50 bg-primary/10 px-6 py-2 font-heading text-xs tracking-[0.3em] text-primary uppercase text-center">
              Raydium Launch Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
