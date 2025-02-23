import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeenWisePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden relative perspective-1000">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: `linear-gradient(${i * 45}deg, #8B5CF6, #A78BFA)`,
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${i * 20}%`,
              top: `${i * 15}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Section with Enhanced Animations */}
      <section className="relative container mx-auto px-6 pt-12 pb-20">
        {/* Animated Decorative Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className={`w-${Math.floor(Math.random() * 4 + 2)} h-${Math.floor(Math.random() * 4 + 2)} 
              ${Math.random() > 0.5 ? 'bg-purple-200' : 'border-2 border-purple-200'} 
              ${Math.random() > 0.5 ? 'rounded-full' : ''}`} 
            />
          </motion.div>
        ))}

        <div className="flex items-center justify-between">
          <motion.div 
            className="w-1/2 pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.h1 
                className="text-6xl font-bold mb-6 relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent inline-block"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity 
                  }}
                >
                  Discover Teen wise
                </motion.span>
                <motion.div
                  className="absolute -inset-2 bg-purple-100 rounded-lg -z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.h1>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {[
                "Navigating your teen years can be challenging, but you don't have to do it alone. At TeenWise, we're here to guide you every step of the way. Whether it's building confidence, finding support, or learning life skills, we've got you covered.",
                "Explore a world of possibilities, connect with like-minded teens, and unlock your potential with resources designed just for you. Let's grow, thrive, and conquer challenges together."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 text-lg relative"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {text}
                  <motion.div
                    className="absolute -inset-2 bg-purple-50 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.p>
              ))}
            </motion.div>

            <motion.p 
              className="text-2xl bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent font-medium italic mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.02 }}
              {...floatingAnimation}
            >
              Your journey starts here. Are you ready to take the first step?
            </motion.p>
          </motion.div>

          <motion.div 
            className="w-1/2 relative"
            initial={{ opacity: 0, rotateY: -30 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [-10, 10],
                rotate: [-1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <img 
                src="/src/assets/svg.png" 
                alt="Teen thinking and studying illustration" 
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Image Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section with Enhanced Cards */}
      <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-20">
        <motion.div
          className="absolute inset-0 bg-grid-pattern opacity-5"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              WHAT WE OFFER
            </motion.span>
          </motion.h2>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: "Lifes skills and personal growth",
                description: "Practical tools and advice to help teens navigate challenges and build confidence.",
                image: "/src/assets/remn.png"
              },
              {
                title: "Community and support",
                description: "A safe space to connect, share experiences, and access 24/7 guidance.",
                image: "/src/assets/rem.png"
              },
              {
                title: "Interactive learning experinces",
                description: "Engaging activities, quizzes, and events designed to inspire and empower."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="bg-white rounded-xl p-8 shadow-lg relative z-10 h-full"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.img 
                    src="/src/assets/remn.png"
                    alt={item.title}
                    className="mx-auto mb-6 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                   
                 
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-4 text-purple-600 text-center"
                    {...floatingAnimation}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 text-center"
                    animate={hoveredCard === index ? { scale: 1.02 } : { scale: 1 }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={hoveredCard === index ? { 
                      opacity: 0.5,
                      scale: 1.05,
                    } : { 
                      opacity: 0,
                      scale: 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeenWisePage;