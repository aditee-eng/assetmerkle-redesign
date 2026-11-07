
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridBackground from '../components/GridBackground';


// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md group"
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
          {question}
        </span>
        <span className={`transition-transform duration-300 text-violet-400 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} />
        </span>
      </button>

      {/* Using AnimatePresence for smooth open/close animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-gray-300">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

const faqs = [
    {
      question: 'When was AssetMerkle IGDTUW established?',
      answer: 'AssetMerkle IGDTUW was established in January 2023 at IGDTUW'
    },
    {
      question: 'What is AssetMerkle?',
      answer: 'AssetMerkle IGDTUW is the first Web3-based club at IGDTUW. Our society intends to provide a platform for students to familiarize themselves with the professional world and gain practical experience in blockchain and Web3 technology.'
    },
    {
      question: 'What is the aim of AssetMerkle IGDTUW?',
      answer: 'Our aim is to bridge the gap between academic learning and real-world challenges in the field of blockchain and Web3 technology. With the growing importance of Web3 technology in the industry, we believe it is crucial for students to gain practical skills in this field.'
    },
    {
      question: 'Can I be a part of AssetMerkle IGDTUW?',
      answer: 'Yes, you can join our WhatsApp community and be a part of AssetMerkle IGDTUW.'
    },
    {
      question: 'I am from BBA, can I still be a part of this community?',
      answer: 'Absolutely! AssetMerkle encourages participation from individuals of all academic backgrounds, including BBA, and values the diverse skills they bring to the community.'
    },
    {
      question: 'I know nothing about web3, can I be a part of AssetMerkle IGDTUW?',
      answer: 'Certainly! AssetMerkle IGDTUW welcomes individuals with varying levels of knowledge, and if you are new to web3, we have got you covered. We offer mentor sessions, workshops, and other resources to help clear up your doubts and ensure that everyone, regardless of their background, can actively participate and learn within our community.'
    },
    {
      question: 'Is AssetMerkle only about web3?',
      answer: 'No! AssetMerkle is not solely focused on web3; while we aim to educate everyone about web3, we also delve into other cutting-edge technologies, fostering a comprehensive learning environment that extends beyond blockchain.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden min-h-screen w-full flex items-center justify-center py-24 px-6">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl md:text-4xl mt-24 font-black mb-6 text-white tracking-tight">
            Frequently Asked <span className="font-serif italic font-normal text-violet-400">Questions</span>
          </h2>
        </div>

        <motion.div
          className="max-w-3xl mx-auto flex flex-col space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </motion.div>

        <div className="text-center mt-20">
          <p className="text-slate-400 text-base mb-6 font-light">Still have questions?</p>
          <a
            href="/"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-violet-500/10 to-blue-500/5 border border-violet-500/20 text-violet-300 font-display text-xs font-bold tracking-widest hover:bg-violet-500/20 hover:border-violet-400/50 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:shadow-[0_0_20px_rgba(245,158,11,0.12)] cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;