import fanxoPromo from "@/assets/fanxo-promo.mp4";
import fanxoBowling1 from "@/assets/fanxo-bowling-1.jpg";
import fanxoBowling2 from "@/assets/fanxo-bowling-2.jpg";

const VideoSection = () => {
  return (
    <section className="relative bg-background py-20 md:py-32 px-4">
      {/* Top darkness fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Video */}
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-xl opacity-30" />
          <div className="relative border border-border/40 bg-black overflow-hidden">
            <video
              src={fanxoPromo}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
          </div>
          <p className="text-center font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4">
            ◆ The Revolution Has Begun ◆
          </p>
        </div>

        {/* Two images side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative group overflow-hidden border border-border/30">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10" />
            <img
              src={fanxoBowling1}
              alt="FANXO bowling strike — knocking down the competition"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative group overflow-hidden border border-border/30">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10" />
            <img
              src={fanxoBowling2}
              alt="FANXO hero launching the coin to strike crypto pins"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom darkness fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default VideoSection;
