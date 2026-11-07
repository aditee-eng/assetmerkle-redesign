import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, Twitter, Linkedin, Github, BarChart3 } from 'lucide-react';
import GridBackground from './GridBackground'; // Assuming you have this component

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <motion.div variants={itemVariants} className="relative w-full">
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-blue-400/50 pointer-events-none">
        <Icon size={20} />
      </div>
      <input
        {...props}
        className="w-full bg-black/30 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
      />
    </motion.div>
  );

  const SelectField = ({ icon: Icon, ...props }) => (
    <motion.div variants={itemVariants} className="relative w-full">
        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-blue-400/50 pointer-events-none">
            <Icon size={20} />
        </div>
        <select
            {...props}
            className="w-full bg-black/30 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 appearance-none"
        >
            <option value="" disabled>Web3 Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
        </select>
    </motion.div>
  );

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden p-4">
      <GridBackground />

      <motion.div
        className="relative z-10 w-full max-w-md bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-900/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-500">
              {isLoginView ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-400 mt-2">
              {isLoginView ? 'Sign in to continue' : 'Join the revolution today'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={isLoginView ? 'login' : 'signup'}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {!isLoginView && (
                <InputField icon={User} type="text" placeholder="Full Name" required />
              )}
              <InputField icon={Mail} type="email" placeholder="Email" required />
              <InputField icon={Lock} type="password" placeholder="Password" required />

              {!isLoginView && (
                <>
                  <SelectField icon={BarChart3} defaultValue="" required />
                  <InputField icon={Twitter} type="text" placeholder="Twitter Username (Optional)" />
                  <InputField icon={Linkedin} type="text" placeholder="LinkedIn Profile URL (Optional)" />
                  <InputField icon={Github} type="text" placeholder="GitHub Username (Optional)" />
                </>
              )}

              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-violet-600 rounded-lg font-semibold text-lg text-white hover:scale-105 active:scale-100 transition-transform duration-300 shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-400"
              >
                {isLoginView ? 'Login' : 'Sign Up'}
              </motion.button>
            </motion.form>
          </AnimatePresence>

          <div className="text-center mt-8">
            <button
              onClick={() => setIsLoginView(!isLoginView)}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              {isLoginView
                ? "Don't have an account? Sign Up"
                : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;