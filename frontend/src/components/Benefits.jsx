import React from "react";
import { motion } from "framer-motion";
import { Presentation, Trophy, BookOpen, Rocket, Users, Handshake } from "lucide-react";

const items = [
  { title: "Workshops and talks", text: "Hands-on sessions on wallets, Layer 2, Starknet and more, led by people in the field.", Icon: Presentation, g: "from-indigo-500 to-violet-700" },
  { title: "National hackathons", text: "Build in a team at AM Hacks, our annual flagship Web3 hackathon.", Icon: Trophy, g: "from-amber-400 to-orange-600" },
  { title: "Learning docs", text: "Guides for Solidity, Rust and dApps that take you from beginner to expert.", Icon: BookOpen, g: "from-fuchsia-500 to-pink-600" },
  { title: "Real-world projects", text: "Design and ship next-gen dApps with other students, not just tutorials.", Icon: Rocket, g: "from-teal-400 to-cyan-600" },
  { title: "A builder community", text: "A student-led space at IGDTUW where you can ask, share and grow with peers.", Icon: Users, g: "from-rose-400 to-red-600" },
  { title: "Industry support", text: "Backed by sponsors and partners from across the Web3 ecosystem.", Icon: Handshake, g: "from-emerald-400 to-green-600" },
];

const Benefits = () => (
  <section className="relative w-full px-6 py-24 text-white">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-black tracking-tight md:text-6xl">What you get as a member</h2>
        <p className="mt-4 text-lg text-slate-400">Everything the society offers to help you learn Web3 and build with it.</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, text, Icon, g }, i) => (
          <motion.div
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/25"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <span className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${g} opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60`} />
            <span className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${g} shadow-lg ring-1 ring-white/30`}>
              <Icon className="h-7 w-7 text-white" />
            </span>
            <h3 className="relative mt-6 text-xl font-extrabold">{title}</h3>
            <p className="relative mt-2 text-slate-400">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
