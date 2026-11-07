import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const TeamGallery = () => (
  <section className="font-sans relative w-full px-6 py-24 text-white">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-5xl font-extrabold tracking-normal text-transparent md:text-7xl">Our team</h2>
        <p className="mt-5 text-lg text-slate-400">Students from IGDTUW learning, building and shipping Web3 projects together.</p>
      </motion.div>

      <motion.div
        className="relative rounded-[2.5rem] bg-gradient-to-br from-violet-500 via-indigo-500/60 to-blue-500 p-[2px] shadow-[0_40px_120px_-30px_rgba(139,92,246,.6)]"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="overflow-hidden rounded-[calc(2.5rem-2px)] bg-black">
          <img src="WhatsApp Image 2026-09-01 at 22.05.35.jpeg" alt="The AssetMerkle team with the audience at an event" className="mx-auto h-auto w-full object-cover" />
        </div>
        <Link
          to="/team"
          className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl transition-transform duration-300 hover:scale-105 md:bottom-8 md:left-8"
        >
          Meet the core team
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default TeamGallery;
