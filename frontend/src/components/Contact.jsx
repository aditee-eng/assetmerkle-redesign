import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Data for the partner cards remains the same
const partnerOptions = [
    {
        icon: "/collaborate.png",
        title: "Collaborate",
        description: "Unlock the power of collaboration and knowledge-sharing in blockchain and web3 technology with our vibrant community.",
        handler: () => console.log('Navigate to Collaborate'),
        link : '/collaborate',
        cta: 'Propose a collaboration'
    },
    {
        icon: "/sponsor.png",
        title: "Sponsor",
        description: "Boost your brand and empower innovation in blockchain and web3 technology as a valued community sponsor.",
        handler: () => console.log('Navigate to Sponsor'),
        link : '/sponsor',
        cta: 'Become a sponsor'
    }
];

// Reusable Arrow component for the cards
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

// --- Animation Variants ---
// This variant controls the overall container for the title and cards
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Reveals children one by one
        },
    },
};

// This variant controls the title and paragraph
const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// This variant controls the card itself (the container)
const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.1, // Animate the card's content one by one
        },
    },
};

// This variant controls the items INSIDE the card (icon, title, etc.)
const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


const Contact = () => {
    const handleMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div className="relative isolate min-h-[600px] w-full flex flex-col items-center justify-center py-20 px-4">
            
            {/* Main animated container */}
            <motion.div
                className="max-w-7xl mx-auto text-center z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h1
                    variants={titleVariants}
                    className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500"
                >
                    Partner With Us
                </motion.h1>
                <motion.p
                    variants={titleVariants}
                    className="text-gray-300 max-w-2xl mx-auto text-lg mb-16"
                >
                    Whether you're looking to collaborate or sponsor, your journey with our Web3 community starts here.
                </motion.p>
                
                <div className="flex items-center justify-center gap-8 lg:gap-12 w-full max-w-5xl flex-wrap">
                    {partnerOptions.map((card) => (
                      <motion.div
                            key={card.title}
                            variants={cardVariants} // Use the card container variants
                            onMouseMove={handleMouseMove}
                            onClick={card.handler}
                            className="group relative w-full max-w-sm min-h-[22rem] p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col cursor-pointer transition-all duration-300 hover:border-amber-400/40"
                            style={{ backgroundImage: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(250, 204, 21, 0.15), transparent 40%)` }}
                        >
                      <Link to={`${card.link}`} className="flex flex-col flex-grow items-start text-left">
                            <motion.div variants={cardItemVariants} className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-yellow-400/30 shadow-lg">
                                <img src={card.icon} alt={`${card.title} icon`} className="w-12 h-12" />
                            </motion.div>

                            <motion.h3 variants={cardItemVariants} className="text-2xl font-bold text-white mb-3">{card.title}</motion.h3>
                            <motion.p variants={cardItemVariants} className="text-gray-400 text-base flex-grow max-w-xs">{card.description}</motion.p>
                            
                            <motion.span variants={cardItemVariants} className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/60 px-5 py-2.5 text-sm font-bold text-amber-300 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-black">
                                {card.cta}
                                <ArrowIcon />
                            </motion.span>
                        </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;