import React from 'react';
import { motion } from 'framer-motion';

const TeenWisePage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-100 rounded-full opacity-30 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-12 pb-20">
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-40 w-8 h-8 border-4 border-purple-200"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-6 h-6 bg-purple-200 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-1/2 pr-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-6xl font-bold mb-6 relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Discover Teen wise
                </span>
                <motion.span
                  className="absolute -z-10 inset-0 bg-purple-100 rounded-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <p className="text-gray-700 mb-6 leading-relaxed text-lg relative z-10">
                Navigating your teen years can be challenging, but you don't have to do it alone. 
                At TeenWise, we're here to guide you every step of the way. Whether it's building 
                confidence, finding support, or learning life skills, we've got you covered.
              </p>
              <motion.div
                className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-50 to-transparent rounded-lg"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <motion.p 
              className="text-gray-700 mb-6 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Explore a world of possibilities, connect with like-minded teens, and unlock your 
              potential with resources designed just for you. Let's grow, thrive, and conquer 
              challenges together.
            </motion.p>

            <motion.p 
              className="text-2xl bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent font-medium italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Your journey starts here. Are you ready to take the first step?
            </motion.p>
          </motion.div>

          <motion.div 
            className="w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative z-10"
            >
              <img 
                src="/src/assets/pj.jpg" 
                alt="Teen thinking and studying illustration" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            {/* Image Decorative Elements */}
            <motion.div
              className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-200 to-blue-100 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 relative inline-block w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              WHAT WE OFFER
            </span>
            <motion.div
              className="absolute -z-10 inset-0 bg-purple-100 rounded-lg opacity-60"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.h2>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: "Lifes skills and personal growth",
                description: "Practical tools and advice to help teens navigate challenges and build confidence."
              },
              {
                title: "Community and support",
                description: "A safe space to connect, share experiences, and access 24/7 guidance."
              },
              {
                title: "Interactive learning experinces",
                description: "Engaging activities, quizzes, and events designed to inspire and empower."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/src/assets/svg.png"
                      alt={item.title}
                      className="mx-auto mb-6 rounded-lg"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-600 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
                
                {/* Card Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <motion.div
          className="absolute top-40 right-20 w-20 h-20 border-2 border-purple-200 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-16 h-16 bg-blue-100 rounded-full opacity-40"
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </section>
    </div>
  );
};

export default TeenWisePage;