import React from 'react';
import { FaXTwitter, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// --- Animation Variants ---
const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
        },
    },
};

const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#050507]/80 backdrop-blur-xl border-t border-white/5 pt-16 pb-8 px-6 sm:px-8 overflow-hidden z-20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

            <motion.div
                className="container mx-auto max-w-7xl relative z-10"
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="mb-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-amber-400/25 bg-gradient-to-r from-amber-400/15 via-amber-400/5 to-violet-500/15 p-8 md:p-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Ready to build with us?</h2>
                        <p className="mt-2 text-slate-400">Join the community and start building Web3 projects at IGDTUW.</p>
                    </div>
                    <Link to={'/login'} className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-7 py-3 text-sm font-bold text-slate-950 transition-transform duration-300 hover:scale-105">Log in or sign up</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <motion.div variants={columnVariants} className="flex flex-col">
                        <Link to={'/'} className="flex items-center gap-3 mb-4 group">
                            <img src="/logo.png" className='h-8 w-8 transition-transform duration-300 group-hover:scale-110' alt="Assetmerkle Logo" />
                            <span className="font-display text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
                                Assetmerkle
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                            The first Web3-based community at IGDTUW. Bridging building and blockchain.
                        </p>
                        <div className="flex space-x-3.5">
                            <a href='https://x.com/AM_igdtuw' target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"><FaXTwitter size={16} /></a>
                            <a href='https://chat.whatsapp.com/Cp0ppTJBmOS4vgDze8XMPq' target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"><FaWhatsapp size={16} /></a>
                            <a href='https://www.linkedin.com/company/assetmerkle-igdtuw/' target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"><FaLinkedin size={16} /></a>
                            <a href='https://www.instagram.com/assetmerkle.igdtuw/' target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"><FaInstagram size={16} /></a>
                        </div>
                    </motion.div>

                    <motion.div variants={columnVariants}>
                        <h3 className="font-display text-sm font-semibold mb-5 text-white">Explore</h3>
                        <ul className="space-y-3.5">
                            <li><Link to={'/'} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm">About</Link></li>
                            <li><Link to={'/events'} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm">Events</Link></li>
                            <li><Link to={'/team'} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm">Team</Link></li>
                            <li><Link to={'/faq'} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm">FAQ</Link></li>
                            <li><Link to={'/docs'} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm">Docs</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div variants={columnVariants}>
                        <h3 className="font-display text-sm font-semibold mb-5 text-white">Partner with us</h3>
                        <ul className="space-y-3.5">
                            <li><Link to={'/collaborate'} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm">Collaborate</Link></li>
                            <li><Link to={'/sponsor'} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm">Sponsor Us</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div variants={columnVariants}>
                        <h3 className="font-display text-sm font-semibold mb-5 text-white">Stay in the loop</h3>
                        <a href="mailto:assetmerkle@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors duration-300 text-sm font-medium">
                            assetmerkle@gmail.com
                        </a>
                        <form className="relative flex items-center mt-6">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/40 transition-all duration-300 pr-28"
                            />
                            <button type="submit" className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-amber-400 text-black text-sm font-bold hover:bg-amber-300 transition-colors duration-300">Subscribe</button>
                        </form>
                    </motion.div>
                </div>

                <motion.div variants={columnVariants} className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-slate-500 text-xs">
                        Assetmerkle © {new Date().getFullYear()} . All rights reserved.
                    </p>
                </motion.div>
                <div aria-hidden="true" className="pointer-events-none select-none text-center font-black leading-none tracking-tighter text-white/[0.04] text-[16vw] mt-6 -mb-4">AssetMerkle</div>
            </motion.div>
        </footer>
    );
};

export default Footer;