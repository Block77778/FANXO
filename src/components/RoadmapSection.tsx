import { useCountdown } from "@/hooks/useCountdown";
import fanxoCoin from "@/assets/fanxo-coin.png";

const phases = [
  { num: 1, title: "Launch on Raydium", active: true },
  { num: 2, title: "Spread the Mayhem", active: false },
  { num: 3, title: "Community Domination", active: false },
  { num: 4, title: "Speculator Tears & Moonshot", active: false },
];

const RoadmapSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 6);
  targetDate.setHours(targetDate.getHours() + 12);

  const timeLeft = useCountdown(targetDate);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-gold-gradient mb-12 tracking-wider">
          Time to Give the System the Finger!
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          {/* Phases + Countdown */}
          <div className="space-y-6">
            {/* Countdown */}
            <div className="flex gap-3 md:gap-4 mb-8">
              {[
                { val: pad(timeLeft.days), label: "Days" },
                { val: pad(timeLeft.hours), label: "Hours" },
                { val: pad(timeLeft.minutes), label: "Minutes" },
                { val: pad(timeLeft.seconds), label: "Seconds" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-4xl md:text-6xl text-primary glow-gold-text">
                    {item.val}
                  </div>
                  <div className="font-heading text-xs tracking-widest text-muted-foreground uppercase mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Launch badge */}
            <div className="inline-block border border-primary/60 bg-primary/10 px-6 py-2 font-heading text-sm tracking-[0.3em] text-primary uppercase mb-8">
              Raydium Launch Soon
            </div>

            {/* Phases */}
            <div className="space-y-4">
              {phases.map((phase) => (
                <div key={phase.num} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    phase.active 
                      ? "bg-neon text-background" 
                      : "border border-neon/40 text-neon/60"
                  }`}>
                    ◆
                  </div>
                  <div>
                    <span className="font-heading text-sm tracking-wider uppercase text-neon">Phase {phase.num}:</span>
                    <span className="ml-2 font-heading text-sm tracking-wider uppercase text-foreground/80">{phase.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right coin image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={fanxoCoin}
                alt="FANXO Coin"
                className="w-48 h-48 relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
