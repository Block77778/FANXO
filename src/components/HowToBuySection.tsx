import fanxoCoin from "@/assets/fanxo-coin.png";

const steps = [
  {
    num: 1,
    title: "Create a Solana Wallet",
    description: "Download Phantom or Solflare wallet from their official website. Set it up and securely store your recovery phrase.",
  },
  {
    num: 2,
    title: "Get SOL",
    description: "Buy SOL on any major exchange (Binance, Coinbase, etc.) and transfer it to your Solana wallet address.",
  },
  {
    num: 3,
    title: "Go to Raydium",
    description: "Visit raydium.io and connect your wallet. Navigate to the Swap section.",
  },
  {
    num: 4,
    title: "Paste the Mint Address",
    description: "Paste the FANXO mint address below into the token search field, select FANXO, enter the amount of SOL to swap, and confirm.",
  },
];

const MINT_ADDRESS = "DmWzQ3GsPVhaNGVouQQiJpowzHj6vfTpccMfuCTeD7JS";

const HowToBuySection = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(MINT_ADDRESS);
  };

  return (
    <section id="how-to-buy" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <div className="inline-block border border-neon/40 bg-neon/5 px-4 py-1.5 font-heading text-[10px] tracking-[0.4em] uppercase text-neon mb-6">
          How To Buy
        </div>

        <h2 className="font-display text-4xl md:text-6xl text-gold-gradient mb-6 tracking-wider leading-none">
          Join the<br />Revolution
        </h2>
        <p className="text-foreground/70 text-base md:text-lg font-body max-w-xl mb-12">
          Four simple steps to grab your <span className="text-primary font-semibold">$FANXO</span> tokens
          and become part of the revolt.
        </p>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border border-border/50 bg-muted/20 backdrop-blur-sm p-6 hover:bg-muted/40 transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-neon text-background font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h4 className="font-heading text-sm tracking-[0.15em] uppercase text-foreground mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mint address */}
        <div className="border border-primary/40 bg-primary/5 backdrop-blur-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <img src={fanxoCoin} alt="FANXO" className="w-8 h-8 rounded-full" />
            <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-primary">
              FANXO Mint Address (Solana)
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <code className="flex-1 bg-background/60 border border-border/50 px-4 py-3 text-sm md:text-base font-mono text-foreground break-all select-all">
              {MINT_ADDRESS}
            </code>
            <button
              onClick={handleCopy}
              className="border-2 border-neon bg-neon/10 px-6 py-3 font-heading text-xs tracking-[0.3em] text-neon hover:bg-neon hover:text-background transition-all uppercase glow-green whitespace-nowrap"
            >
              Copy Address
            </button>
          </div>
          <p className="text-xs text-muted-foreground font-body mt-3">
            ⚠ Always verify the contract address before swapping. Only use the official address above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
