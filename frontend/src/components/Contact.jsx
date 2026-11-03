import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Handshake, BadgeDollarSign, ArrowUpRight } from "lucide-react";

const options = [
  {
    title: "Collaborate",
    description: "Share knowledge and build Web3 projects, workshops and events with our community.",
    cta: "Propose a collaboration",
    link: "/collaborate",
    Icon: Handshake,
    bg: "from-amber-300 via-amber-400 to-orange-500",
    dark: true,
  },
  {
    title: "Sponsor",
    description: "Boost your brand and empower innovation in blockchain and Web3 as a valued community sponsor.",
    cta: "Become a sponsor",
    link: "/sponsor",
    Icon: BadgeDollarSign,
    bg: "from-violet-500 via-indigo-600 to-blue-700",
  },
];

const Contact = () => (
  <section className="relative w-full px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">Partner with us</h2>
        <p className="mt-4 text-lg text-slate-400">
          Whether you want to collaborate or sponsor, your journey with our Web3 community starts here.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {options.map(({ title, description, cta, link, Icon, bg, dark }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <Link
              to={link}
              className={`group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br ${bg} p-8 md:p-10 ring-1 ring-white/20 transition-transform duration-500 hover:-translate-y-1.5 ${dark ? "text-slate-950" : "text-white"}`}
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/25 blur-2xl" />
              <Icon className={`absolute -bottom-6 -right-4 h-56 w-56 ${dark ? "text-black/10" : "text-white/15"}`} strokeWidth={1} />
              <div className="relative">
                <h3 className="text-4xl font-black tracking-tight">{title}</h3>
                <p className={`mt-3 max-w-sm text-base md:text-lg ${dark ? "text-slate-900/75" : "text-white/80"}`}>{description}</p>
              </div>
              <span className={`relative mt-10 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold ${dark ? "bg-slate-950 text-white" : "bg-white text-slate-950"}`}>
                {cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
