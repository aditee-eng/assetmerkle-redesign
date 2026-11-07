
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import EventsCaraousel from '../components/EventsCaraousel';
import Contact from '../components/Contact';
import GroupImg from '../components/GroupImg';
import JoinSteps from '../components/JoinSteps';
import Benefits from '../components/Benefits';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from '../components/PreLoader';

function Home() {
  // Show the preloader only on the first visit of a session, not on every
  // navigation back to the home page (e.g. clicking "About").
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem('am-preloader-seen');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!loading) return;
    try {
      sessionStorage.setItem('am-preloader-seen', '1');
    } catch {
      /* storage unavailable: the preloader just plays once per page load */
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        // Framer Motion can be used here for a smooth fade-in of the main content
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero/>
          <JoinSteps/>
          <Benefits/>
          <Sponsors/>
          <EventsCaraousel/>
          <Contact/>
          <GroupImg/>

        </motion.div>
      )}
    </>
  );
}

export default Home;