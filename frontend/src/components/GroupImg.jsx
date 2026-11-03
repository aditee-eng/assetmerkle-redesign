import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const TeamGallery = () => (
  <section className="relative w-full px-6 py-24 text-white">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-10 flex flex-wrap items-end justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-xl">
          <h2 className="text-5xl font-black tracking-tight md:text-6xl">Our team</h2>
          <p className="mt-4 text-lg text-slate-400">
            Students from IGDTUW learning, building and shipping Web3 projects together.
          </p>
        </div>
        <Link
          to="/team"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-3 text-sm font-bold text-slate-950 transition-transform duration-300 hover:scale-105"
        >
          Meet the core team
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>

      <motion.div
        className="rounded-[2rem] bg-gradient-to-br from-amber-300/70 via-white/10 to-violet-500/60 p-[2px] shadow-[0_40px_120px_-30px_rgba(245,180,51,.45)]"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-black">
          <img
            src="WhatsApp Image 2026-09-01 at 22.05.35.jpeg"
            alt="The AssetMerkle team with the audience at an event"
            className="mx-auto h-auto w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default TeamGallery;
