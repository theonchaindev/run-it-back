"use client";

import Image from "next/image";

const CA = "G57dQGNkhVu8P85zqEfVmnV5nmofkKxPTaxcrb6tE1sK";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Run It Back" width={40} height={40} className="rounded-full" />
          <span className="text-lg font-black tracking-tight uppercase">Run It Back</span>
        </div>
        <a
          href="https://x.com/runitbackOG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X
        </a>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen pt-20 px-4 text-center">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Run It Back Logo"
            width={160}
            height={160}
            className="rounded-full mx-auto drop-shadow-[0_0_40px_rgba(255,215,0,0.6)]"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-b from-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-none">
          Run It Back
        </h1>
        <p className="text-white/50 text-xl mb-10">on Solana</p>

        {/* Alon tweet */}
        <div className="mb-10 max-w-sm w-full">
          <Image
            src="/alon-tweet.png"
            alt="Alon tweet: let's run it the fuck back."
            width={600}
            height={300}
            className="rounded-2xl mx-auto w-full border border-white/10"
          />
        </div>

        {/* CA */}
        <div className="mb-8 w-full max-w-lg">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Contract Address</p>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            <span className="text-yellow-400 font-mono text-xs md:text-sm break-all flex-1 text-left">{CA}</span>
            <button
              onClick={() => navigator.clipboard.writeText(CA)}
              className="shrink-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-yellow-300 transition-colors cursor-pointer"
            >
              COPY
            </button>
          </div>
        </div>

        {/* Buy button */}
        <a
          href={`https://pump.fun/coin/${CA}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xl uppercase tracking-wide px-12 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,215,0,0.4)]"
        >
          Buy Now
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
            What&apos;s the play?
          </h2>
          <p className="text-white/50 text-lg mb-12">
            Pump.fun called for it. Alon said it. The people demanded it.
          </p>

          <div className="mb-12 max-w-lg mx-auto">
            <Image
              src="/alon-tweet-2.png"
              alt="Pump.fun and Alon tweet about running it back"
              width={600}
              height={400}
              className="rounded-2xl mx-auto w-full border border-white/10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-black text-lg uppercase mb-2 text-yellow-400">Bag Working</h3>
              <p className="text-white/60 text-sm">The grind is back. Bags are moving. We&apos;re running it back to where it all began.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">📣</div>
              <h3 className="font-black text-lg uppercase mb-2 text-yellow-400">MAX RAIDS</h3>
              <p className="text-white/60 text-sm">Community on full blast. Raids, raids, and more raids. The culture never died.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🔁</div>
              <h3 className="font-black text-lg uppercase mb-2 text-yellow-400">Run It Back</h3>
              <p className="text-white/60 text-sm">461K views. One tweet. One movement. $RIB is the coin of the comeback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Image src="/logo.png" alt="Run It Back" width={28} height={28} className="rounded-full" />
          <span className="font-black uppercase tracking-tight text-white/60">Run It Back</span>
        </div>
        <p className="text-white/30 text-xs">
          $RIB is a memecoin on Solana. Not financial advice. Run it back responsibly.
        </p>
        <div className="mt-4">
          <a
            href="https://x.com/runitbackOG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors text-sm"
          >
            $RIB on X →
          </a>
        </div>
      </footer>
    </main>
  );
}
