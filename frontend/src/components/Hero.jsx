import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const gloss = "linear-gradient(135deg,rgba(255,255,255,.95) 0%,rgba(255,255,255,.35) 40%,rgba(255,255,255,.08) 70%,rgba(0,0,0,.2) 100%)";
const base = "h-24 w-24 md:h-28 md:w-28";

// Glossy 3D-style shape used on slides that have no photo
const Shape = ({ type }) => {
  if (type === "hex") return <div className={base} style={{ background: gloss, clipPath: "polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0 50%)" }} />;
  if (type === "orb") return <div className={`${base} rounded-full`} style={{ background: "radial-gradient(circle at 30% 25%,#fff,rgba(255,255,255,.35) 35%,rgba(255,255,255,.08) 70%)" }} />;
  if (type === "diamond") return <div className={`${base} rotate-45 scale-75 rounded-2xl`} style={{ background: gloss }} />;
  if (type === "ring") return <div className={`${base} rounded-full border-[14px] border-white/75`} style={{ boxShadow: "inset 0 0 24px rgba(255,255,255,.5)" }} />;
  return (
    <div className="relative h-24 w-32">
      <div className="absolute left-0 top-2 h-20 w-20 rounded-full bg-white/55" />
      <div className="absolute right-0 top-2 h-20 w-20 rounded-full bg-white/35" />
    </div>
  );
};

const TEAM_PHOTO = "/WhatsApp%20Image%202026-09-01%20at%2022.05.35.jpeg";
const JOIN = "https://chat.whatsapp.com/KUvfa2sCnYO8Z8GZ1llj2H";

const slides = [
  { id: "welcome", tag: "Welcome", cardTitle: "Welcome", long: true,
    title: "Empowering students to shape a trustworthy world with Web3",
    desc: "We are AssetMerkle, the student-led Web3 and blockchain community of IGDTUW. We build dApps, run national hackathons and train the builders of tomorrow.",
    cta: "Log in or sign up", to: "/login", bg: "from-[#0b0720] via-[#1b1150] to-[#0b1a52]", shape: "hex" },
  { id: "events", tag: "Workshops and talks", cardTitle: "Events", title: "Events",
    desc: "Hands-on sessions on wallets, Layer 2, Starknet and more, led by people in the field.",
    cta: "See all events", to: "/events", bg: "from-indigo-700 via-violet-800 to-purple-950", shape: "ring" },
  { id: "amhacks", tag: "Hackathon", cardTitle: "AM Hacks 2.0", title: "AM Hacks 2.0",
    desc: "Our annual flagship Web3 hackathon with massive prizes and custom dev tracks.",
    cta: "Explore AM Hacks", to: "/amhacks", bg: "from-sky-700 via-blue-800 to-indigo-950", shape: "hex" },
  { id: "team", tag: "Community", cardTitle: "Builders", title: "Meet the builders",
    desc: "Meet the core team directing the society's initiatives and supporting innovators.",
    cta: "Meet the team", to: "/team", bg: "from-violet-800 via-purple-900 to-indigo-950", shape: "orb", image: TEAM_PHOTO },
  { id: "docs", tag: "Learn", cardTitle: "Web3 docs", title: "Web3 docs",
    desc: "Curated, beginner-to-expert guides for mastering Solidity, Rust and dApps.",
    cta: "Open the docs", to: "/docs", bg: "from-fuchsia-700 via-purple-800 to-violet-950", shape: "diamond" },
  { id: "partner", tag: "Collaborate or sponsor", cardTitle: "Partner", title: "Partner with us",
    desc: "Whether you want to collaborate or sponsor, your journey with our Web3 community starts here.",
    cta: "Partner with us", to: "/collaborate", bg: "from-cyan-700 via-blue-800 to-indigo-950", shape: "venn" },
];

const DURATION = 8; // seconds per slide

const Hero = () => {
  const n = slides.length;
  const [active, setActive] = useState(0);
  const [still, setStill] = useState(false);
  const go = (i) => setActive(((i % n) + n) % n);
  const s = slides[active];
  const queue = Array.from({ length: n - 1 }, (_, k) => slides[(active + 1 + k) % n]);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (still) return;
    const t = setTimeout(() => go(active + 1), DURATION * 1000);
    return () => clearTimeout(t);
  }, [active, still]);

  const pct = `${((active + 1) / n) * 100}%`;

  return (
    <section className="font-sans relative min-h-[100svh] w-full overflow-hidden text-white">
      {/* Scene */}
      <AnimatePresence initial={false}>
        <motion.div
          key={s.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${s.bg}`} />
          {s.image && <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          {!s.image && (
            <div className="absolute right-[16%] top-[24%] hidden scale-[3.4] opacity-70 md:block">
              <Shape type={s.shape} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050507] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 pb-10 pt-32">
        {/* Title block */}
        <div className="flex flex-1 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-sm font-semibold text-white/80">{s.tag}</p>
              <h1 className={`mt-3 max-w-xl font-extrabold leading-[1.02] ${s.long ? "text-4xl md:text-6xl" : "text-6xl md:text-8xl"}`}>
                {s.title}
              </h1>
              <p className="mt-5 max-w-md text-base text-white/80 md:text-lg">{s.desc}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to={s.to} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:scale-105">
                  {s.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={JOIN} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors duration-300 hover:bg-white/20">
                  Join the community
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cards + controls */}
        <div className="lg:ml-auto lg:w-[36rem]">
          <motion.div layout className="flex gap-3 overflow-hidden md:gap-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {queue.map((c, i) => (
                <motion.button
                  key={c.id}
                  layout
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  onClick={() => go(slides.indexOf(c))}
                  aria-label={`Show ${c.title}`}
                  className={`group relative h-44 w-28 shrink-0 overflow-hidden rounded-2xl text-left shadow-xl ring-1 ring-white/25 md:h-64 md:w-40 ${i > 1 ? "hidden md:block" : ""}`}
                >
                  <span className={`absolute inset-0 bg-gradient-to-br ${c.bg}`} />
                  {c.image && <img src={c.image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
                  {!c.image && (
                    <span className="absolute inset-0 grid scale-[.55] place-items-center pb-10 transition-transform duration-500 group-hover:scale-[.65]">
                      <Shape type={c.shape} />
                    </span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/10" />
                  <span className="absolute inset-x-3 bottom-3">
                    <span className="block text-[10px] text-white/70">{c.tag}</span>
                    <span className="block text-sm font-extrabold leading-tight md:text-base">{c.cardTitle}</span>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-6 flex items-center gap-4">
            {[[-1, ArrowLeft, "Previous"], [1, ArrowRight, "Next"]].map(([d, Icon, label]) => (
              <button
                key={label}
                aria-label={label}
                onClick={() => go(active + d)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 bg-white/5 backdrop-blur transition-colors hover:bg-white/20"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
            <div className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-white/20">
              <motion.div
                key={active}
                className="absolute inset-y-0 left-0 bg-white"
                initial={{ width: still ? pct : "0%" }}
                animate={{ width: still ? pct : "100%" }}
                transition={{ duration: still ? 0 : DURATION, ease: "linear" }}
              />
            </div>
            <span className="text-3xl font-extrabold tabular-nums text-white/90">{String(active + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
