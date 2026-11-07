import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { n: "01", title: "Join the community", text: "Hop into our WhatsApp group to hear about events, hackathons and opportunities first.", cta: "Join on WhatsApp", href: "https://chat.whatsapp.com/KUvfa2sCnYO8Z8GZ1llj2H", ext: true },
  { n: "02", title: "Learn the basics", text: "Follow our curated guides for Solidity, Rust and dApps, from beginner to expert.", cta: "Open the docs", href: "/docs" },
  { n: "03", title: "Build with the team", text: "Put it into practice at workshops and at AM Hacks, our flagship Web3 hackathon.", cta: "See AM Hacks", href: "/amhacks" },
];

const JoinSteps = () => (
  <section className="relative w-full px-6 py-24 text-white">
    <div className="mx-auto max-w-6xl">
      <motion.h2
        className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-normal md:text-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        Start building in three steps
      </motion.h2>

      <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
        {steps.map(({ n, title, text, cta, href, ext }, i) => (
          <motion.a
            key={n}
            href={href}
            {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group grid items-center gap-6 py-10 md:grid-cols-[9rem_1fr_auto]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <span className="text-7xl font-extrabold leading-none tracking-normaler text-transparent transition-colors duration-500 [-webkit-text-stroke:2px_rgba(167,139,250,.7)] group-hover:text-violet-400 md:text-8xl">
              {n}
            </span>
            <div>
              <h3 className="text-2xl font-extrabold md:text-3xl">{title}</h3>
              <p className="mt-2 max-w-xl text-slate-400">{text}</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-400/60 px-6 py-3 text-sm font-bold text-violet-300 transition-colors duration-300 group-hover:bg-violet-400 group-hover:text-white">
              {cta}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default JoinSteps;
