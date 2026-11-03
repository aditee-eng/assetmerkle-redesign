import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, BookOpen, Users, CalendarDays, Handshake, ArrowUpRight } from "lucide-react";

const gloss = "linear-gradient(135deg,rgba(255,255,255,.95) 0%,rgba(255,255,255,.35) 40%,rgba(255,255,255,.08) 70%,rgba(0,0,0,.2) 100%)";
const base = "h-24 w-24 md:h-28 md:w-28";

// Glossy 3D-style shape for each card
const Shape = ({ type }) => {
  if (type === "hex") return <div className={base} style={{ background: gloss, clipPath: "polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0 50%)" }} />;
  if (type === "orb") return <div className={`${base} rounded-full`} style={{ background: "radial-gradient(circle at 30% 25%,#fff,rgba(255,255,255,.35) 35%,rgba(255,255,255,.08) 70%)", boxShadow: "0 18px 40px rgba(0,0,0,.35)" }} />;
  if (type === "diamond") return <div className={`${base} rotate-45 scale-75 rounded-2xl`} style={{ background: gloss, boxShadow: "0 18px 40px rgba(0,0,0,.3)" }} />;
  if (type === "ring") return <div className={`${base} rounded-full border-[14px] border-white/75`} style={{ boxShadow: "inset 0 0 24px rgba(255,255,255,.5), 0 18px 40px rgba(0,0,0,.3)" }} />;
  return (
    <div className="relative h-24 w-32">
      <div className="absolute left-0 top-2 h-20 w-20 rounded-full bg-white/55" />
      <div className="absolute right-0 top-2 h-20 w-20 rounded-full bg-white/35" />
    </div>
  );
};

const cards = [
  { title: "Events", tag: "Workshops", to: "/events", Icon: CalendarDays, shape: "ring", bg: "from-indigo-500 via-violet-600 to-purple-800", glow: "rgba(124,92,255,.55)", rot: -14, y: 60, hide: true },
  { title: "AM Hacks 2.0", tag: "Hackathon", to: "/amhacks", Icon: Trophy, shape: "hex", bg: "from-amber-300 via-orange-500 to-rose-600", glow: "rgba(251,146,60,.55)", rot: -7, y: 22 },
  { title: "Meet the builders", tag: "Community", to: "/team", Icon: Users, shape: "orb", bg: "from-teal-300 via-cyan-500 to-blue-700", glow: "rgba(34,211,238,.55)", rot: 0, y: 0, center: true },
  { title: "Web3 docs", tag: "Learn", to: "/docs", Icon: BookOpen, shape: "diamond", bg: "from-fuchsia-400 via-pink-500 to-rose-700", glow: "rgba(236,72,153,.5)", rot: 7, y: 22 },
  { title: "Partner with us", tag: "Collaborate", to: "/collaborate", Icon: Handshake, shape: "venn", bg: "from-lime-300 via-emerald-500 to-teal-700", glow: "rgba(52,211,153,.5)", rot: 14, y: 60, hide: true },
];

const chips = [
  { label: "Builder", cls: "left-[8%] top-[34%] bg-teal-400/90 text-slate-950", d: 0 },
  { label: "Hackathon team", cls: "right-[8%] top-[46%] bg-rose-400/90 text-slate-950", d: 1.2 },
];

const Hero = () => (
  <section className="relative flex min-h-[100svh] w-full flex-col items-center overflow-hidden px-6 pt-40 text-white">
    {chips.map((c) => (
      <motion.span
        key={c.label}
        className={`absolute hidden rounded-full px-4 py-1.5 text-sm font-bold shadow-lg lg:block ${c.cls}`}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: c.d }}
      >
        {c.label}
      </motion.span>
    ))}

    <motion.h1
      className="max-w-4xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-center text-5xl font-black leading-[1.08] tracking-tight text-transparent md:text-7xl"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Empowering students to shape a trustworthy world with Web3
    </motion.h1>

    <motion.p
      className="mt-6 max-w-xl text-center text-base leading-relaxed text-slate-400 md:text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      We are AssetMerkle, the student-led Web3 and blockchain community of IGDTUW. We build dApps, run national hackathons and train the builders of tomorrow.
    </motion.p>

    <motion.div
      className="mt-9 flex flex-wrap items-center justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <a
        href="https://chat.whatsapp.com/KUvfa2sCnYO8Z8GZ1llj2H"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-slate-100 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
      >
        Join the community
      </a>
    </motion.div>

    <div className="mt-auto flex w-full max-w-5xl items-end justify-center pt-16">
      {cards.map(({ title, tag, to, Icon, shape, bg, glow, rot, y, center, hide }, i) => (
        <motion.div
          key={title}
          className={`${hide ? "hidden md:block" : ""} -mx-3 md:-mx-4`}
          style={{ zIndex: center ? 10 : 5 - Math.abs(rot) / 5 }}
          initial={{ opacity: 0, y: 140 }}
          animate={{ opacity: 1, y: y + 50, rotate: rot }}
          whileHover={{ y: y - 10, rotate: 0, scale: 1.06, zIndex: 20 }}
          transition={{ duration: 0.7, delay: 0.5 + i * 0.08 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            <Link
              to={to}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br ${bg} p-5 ring-1 ring-white/30 ${
                center ? "h-72 w-52 md:h-[22rem] md:w-60" : "h-60 w-40 md:h-72 md:w-52"
              }`}
              style={{ boxShadow: `0 30px 80px -20px ${glow}` }}
            >
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(255,255,255,.4),transparent_55%)]" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10 flex items-center justify-between">
                <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-bold text-white backdrop-blur">{tag}</span>
                <Icon className="h-5 w-5 text-white/80" />
              </span>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-10">
                <Shape type={shape} />
              </div>

              <span className="relative z-10 flex items-end justify-between gap-2">
                <h3 className="text-lg font-extrabold leading-tight text-white drop-shadow md:text-xl">{title}</h3>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-slate-900 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Hero;
