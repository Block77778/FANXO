import { useState } from "react";
import { motion } from "framer-motion";
import fanxoPromo from "@/assets/fanxo-promo.mp4";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => onComplete(), 1000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <video
        src={fanxoPromo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />

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
  );
};

export default IntroAnimation;
