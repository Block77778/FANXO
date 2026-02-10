import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fanxoLogo from "@/assets/fanxo-logo.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"dark" | "rise" | "text" | "done">("dark");

  // Sequence: dark 1s → rise 3s → text 2.5s → fade out
  useState(() => {
    const t1 = setTimeout(() => setPhase("rise"), 800);
    const t2 = setTimeout(() => setPhase("text"), 3200);
    const t3 = setTimeout(() => setPhase("done"), 6500);
    const t4 = setTimeout(() => onComplete(), 7500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  });

  return (
    <AnimatePresence>
      {phase !== "done" ? null : null}
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-end overflow-hidden"
        style={{ background: "#000" }}
        animate={phase === "done" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (phase === "done") onComplete();
        }}
      >
        {/* Stars / particles in the dark sky */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, Math.random() * 0.6 + 0.2, 0] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>

        {/* Sky gradient that appears during sunrise */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={
            phase === "rise" || phase === "text" || phase === "done"
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          transition={{ duration: 2.5, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(ellipse 120% 60% at 50% 100%, hsl(45 90% 55% / 0.35) 0%, hsl(30 80% 30% / 0.2) 30%, hsl(15 60% 15% / 0.1) 50%, transparent 70%)",
          }}
        />

        {/* Horizon line */}
        <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Ground / dark earth below horizon */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "30%",
            background: "linear-gradient(to top, #050505 0%, #0a0a05 60%, #111108 100%)",
          }}
        />

        {/* Sun rays emanating from coin position */}
        <motion.div
          className="absolute"
          style={{ bottom: "30%", left: "50%", transform: "translateX(-50%)" }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={
            phase === "rise" || phase === "text" || phase === "done"
              ? { opacity: [0, 0.8, 0.5], scale: [0.3, 1.5, 1.2] }
              : {}
          }
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {/* Multiple ray layers */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute origin-bottom"
              style={{
                width: "3px",
                height: `${120 + Math.random() * 180}px`,
                bottom: 0,
                left: "50%",
                marginLeft: "-1.5px",
                transform: `rotate(${i * 30}deg)`,
                background: `linear-gradient(to top, hsl(45 80% 50% / 0.6), transparent)`,
              }}
              animate={{ opacity: [0.2, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
          {/* Glow orb */}
          <div
            className="absolute rounded-full"
            style={{
              width: 300,
              height: 300,
              bottom: -150,
              left: "50%",
              marginLeft: -150,
              background: "radial-gradient(circle, hsl(45 90% 60% / 0.4) 0%, hsl(45 80% 50% / 0.1) 50%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </motion.div>

        {/* The COIN — rising like the sun */}
        <motion.div
          className="absolute z-20"
          style={{ left: "50%", marginLeft: -80 }}
          initial={{ bottom: "15%" }}
          animate={
            phase === "rise" || phase === "text" || phase === "done"
              ? { bottom: "32%" }
              : { bottom: "15%" }
          }
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              phase === "rise" || phase === "text" || phase === "done"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.6 }
            }
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Outer glow */}
              <div
                className="absolute -inset-8 rounded-full animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle, hsl(45 80% 50% / 0.5) 0%, hsl(45 80% 50% / 0.1) 50%, transparent 70%)",
                  filter: "blur(15px)",
                }}
              />
              <img
                src={fanxoLogo}
                alt="FANXO"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full relative z-10 drop-shadow-[0_0_40px_hsl(45,80%,50%,0.6)]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Tagline text */}
        <motion.div
          className="absolute z-30 text-center px-6"
          style={{ top: "18%" }}
          initial={{ opacity: 0, y: 30 }}
          animate={
            phase === "text" || phase === "done"
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl tracking-wider text-gold-gradient leading-tight">
            A New Dawn.
          </h2>
          <motion.h2
            className="font-display text-3xl md:text-5xl lg:text-7xl tracking-wider text-gold-gradient leading-tight"
            initial={{ opacity: 0 }}
            animate={phase === "text" || phase === "done" ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A New Era.
          </motion.h2>
          <motion.h2
            className="font-display text-3xl md:text-5xl lg:text-7xl tracking-wider leading-tight mt-2"
            style={{ color: "hsl(120 100% 45%)" }}
            initial={{ opacity: 0 }}
            animate={phase === "text" || phase === "done" ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A Free New Coin.
          </motion.h2>
        </motion.div>

        {/* Skip button */}
        <motion.button
          className="absolute bottom-6 right-6 z-40 font-heading text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 hover:text-foreground/80 transition-colors border border-border/30 px-4 py-2 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onComplete}
        >
          Skip ▸
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
