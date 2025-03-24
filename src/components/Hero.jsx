import React, { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Chatbot from '../components/Chatbot';
import Faq from '../components/Faq';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -30, opacity: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navItems = [ "Home", "About Us", "Chat with your Sidekick"];

  return (
    <AnimatePresence>
      <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className={`absolute -top-1/2 -right-1/2 w-full h-full rounded-full 
              ${darkMode ? 'bg-pink-900/20' : 'bg-pink-200/40'} 
              blur-3xl`}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className={`absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full 
              ${darkMode ? 'bg-purple-900/20' : 'bg-purple-200/40'} 
              blur-3xl`}
          />
        </div>

        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative container mx-auto px-6 py-4"
        >
          <div className="flex justify-between items-center">
          <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center space-x-2"
>
  {/* Image */}
  <img 
    src="/src/assets/teen.png" // Replace with the actual path to your image
    alt="Teenwise Logo" 
    className="w-40 h-10" // Adjust the width and height as needed
  />

  {/* Text */}
  
</motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex items-center space-x-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1 }}
                  className={`relative overflow-hidden group ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {item}
                  <motion.span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 
                      ${darkMode ? 'bg-pink-400' : 'bg-pink-600'} transform origin-left`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600' 
                    : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700'
                } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Get Support
              </motion.button>

              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
                } transition-colors duration-300`}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </motion.button>
            </motion.div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main className="relative container mx-auto px-6 py-20">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-1/2 pr-12"
            >
              <motion.h1 
                className="text-6xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Confidential
                <br />
                <motion.span 
                  className={`inline-block ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}
                  whileHover={{ scale: 1.1 }}
                >
                  motherly
                </motion.span>
                {" "}guidance
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl mb-12 leading-relaxed opacity-90"
              >
                Access caring, judgment-free reproductive health education and support through our 
                private WhatsApp bot, web app, or SMS. We're here to help you make informed decisions 
                about your health and future.
              </motion.p>

              <motion.div 
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`group px-8 py-4 rounded-xl flex items-center space-x-2 
                    ${darkMode 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600' 
                      : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700'
                    } text-white shadow-lg transition-all duration-300`}
                >
                  <MessageCircle size={20} />
                  <span>Chat Now</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-8 py-4 rounded-xl border-2 
                    ${darkMode ? 'border-pink-400 text-pink-400' : 'border-pink-600 text-pink-600'}
                    hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors duration-300`}
                >
                  <Heart className="mr-2" />
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-1/2 relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 2, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10"
              >
                
                <div className="  ">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="w-full h-full"
                  >
                    <img
                      src="/src/assets/image.png"
                      alt="Supportive Community"
                      className="w-full h-full object-cover opacity-1000"
                    />
                  </motion.div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={`absolute -z-10 w-64 h-64 rounded-full 
                    ${darkMode ? 'bg-pink-500/10' : 'bg-pink-200/50'} 
                    blur-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                />
                
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
      <section>
        <div>
          <Footer />
        </div>
      </section>
      <section>
        <div>
          <Testimonials />
        </div>
      </section>
      <section>
        <div>
          <Chatbot />
        </div>
      </section>
      <section>
        <div>
          <Faq />
        </div>
      </section>
       
    </AnimatePresence>
    
    
    
  );
};


export default LandingPage;
