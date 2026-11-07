import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Handshake, BadgeDollarSign, ArrowUpRight } from "lucide-react";

const options = [
  { title: "Collaborate", description: "Share knowledge and build Web3 projects, workshops and events with our community.", cta: "Propose a collaboration", link: "/collaborate", Icon: Handshake, bg: "from-violet-600 via-purple-600 to-indigo-700" },
  { title: "Sponsor", description: "Boost your brand and empower innovation in blockchain and Web3 as a valued community sponsor.", cta: "Become a sponsor", link: "/sponsor", Icon: BadgeDollarSign, bg: "from-blue-500 via-blue-600 to-indigo-700" },
];

const Contact = () => (
  <section className="font-sans relative w-full px-6 py-24">
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
      <motion.div
        className="lg:sticky lg:top-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">Partner with us</h2>
        <p className="mt-5 max-w-sm text-lg text-slate-400">
          Whether you want to collaborate or sponsor, your journey with our Web3 community starts here.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {options.map(({ title, description, cta, link, Icon, bg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <Link
              to={link}
              className={`group relative flex flex-col gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-br ${bg} p-8 text-white ring-1 ring-white/20 transition-transform duration-500 hover:-translate-y-1.5 md:flex-row md:items-center md:p-10`}
            >
              <span className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
              <span className="relative grid h-24 w-24 shrink-0 place-items-center rounded-3xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
                <Icon className="h-12 w-12" strokeWidth={1.4} />
              </span>
              <div className="relative flex-1">
                <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h3>
                <p className="mt-2 max-w-md text-white/80">{description}</p>
              </div>
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950">
                {cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
