import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "/amhacks1.jpeg";
import img2 from "/amhacks2.jpeg";
import img3 from "/amhacks3.jpeg";
import img4 from "/amhacks4.jpg";
import img5 from "/amhacks5.jpg";
import heroBg from "/amhacks.jpeg";

const AMHacks = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Update this date if you have a new AM VibeAthon event date
    const targetDate = new Date("2026-02-06T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(
            difference / (1000 * 60 * 60 * 24)
          ),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) /
              (1000 * 60)
          ),
          seconds: Math.floor(
            (difference % (1000 * 60)) / 1000
          ),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const staggerChildren = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const galleryImages = [
    img1,
    img2,
    img3,
    heroBg,
    img4,
    img5,
  ];

  return (
    <>
      {/* ================================
          HERO SECTION
      ================================= */}

      <section
        className="relative min-h-screen text-white font-sans overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-[1]" />

        {/* Hero Content */}
        <div className="relative z-[2] min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 sm:py-24 relative">
            <motion.div
              className="text-center max-w-6xl mx-auto"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {/* ================================
                  TITLE
              ================================= */}

              <motion.div variants={childVariants}>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 mt-12">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-300 via-violet-400 to-orange-500">
                    AM VibeAthon
                  </span>
                </h1>

                {/* Decorative Line */}
                <div className="h-2 w-32 bg-gradient-to-r from-blue-400 to-violet-500 mx-auto rounded-full mb-8" />
              </motion.div>

              {/* ================================
                  DESCRIPTION
              ================================= */}

              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                variants={childVariants}
              >
                After 1,000+ registrations and 80+
                groundbreaking projects in our first
                edition, AM VibeAthon is back with its 2nd
                edition ready to raise the bar once again.
              </motion.p>

              {/* ================================
                  EVENT STATS
              ================================= */}

              {/*
              <motion.div
                className="flex flex-wrap justify-center gap-6 mb-12"
                variants={childVariants}
              >
                <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
                  <Calendar
                    className="text-blue-400"
                    size={20}
                  />
                  <span className="text-slate-300">
                    6-8 Feb 2026
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
                  <Clock
                    className="text-blue-400"
                    size={20}
                  />
                  <span className="text-slate-300">
                    24 Hours
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
                  <MapPin
                    className="text-blue-400"
                    size={20}
                  />
                  <span className="text-slate-300">
                    Delhi (Venue TBA)
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
                  <Users
                    className="text-blue-400"
                    size={20}
                  />
                  <span className="text-slate-300">
                    2.5k+ Participants
                  </span>
                </div>
              </motion.div>
              */}

              {/* ================================
                  COUNTDOWN
              ================================= */}

              {/*
              <motion.div
                className="mb-12"
                variants={childVariants}
              >
                <h3 className="text-2xl font-bold text-slate-300 mb-6">
                  Event Starts In
                </h3>

                <div className="flex justify-center gap-4 flex-wrap">
                  {Object.entries(timeLeft).map(
                    ([unit, value]) => (
                      <div
                        key={unit}
                        className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-4 min-w-[80px]"
                      >
                        <div className="text-3xl font-bold text-blue-400">
                          {value
                            .toString()
                            .padStart(2, "0")}
                        </div>

                        <div className="text-sm text-slate-400 uppercase tracking-wider">
                          {unit}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
              */}

              {/* ================================
                  ACTION BUTTONS
              ================================= */}

              <motion.div
                className="flex flex-wrap justify-center items-center gap-4 mb-16"
                variants={childVariants}
              >
                {/* Register Now */}
                <Link to="/register">
                  <motion.span
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-400 to-violet-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-300 hover:to-violet-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    Register Now
                  </motion.span>
                </Link>

                {/* Submit Project */}
                <Link to="/submit">
                  <motion.span
                    className="inline-flex items-center justify-center border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    Submit Project
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================
          EVENTS GALLERY
      ================================= */}

      {/*
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          EVENTS GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/40 backdrop-blur-sm"
            >
              <img
                src={src}
                alt={`AM VibeAthon event ${index + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
      */}
    </>
  );
};

export default AMHacks;