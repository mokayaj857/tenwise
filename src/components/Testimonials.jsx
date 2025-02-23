import React, { useEffect, useState } from "react";
import { Heart, UserCircle, Plus, X, MessageCircle, Stars, Sparkles, Shield, Flower2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function TeenwiseTestimonials() {
  // Previous state declarations remain the same
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newTestimonial, setNewTestimonial] = useState({ quote: "", age: "", location: "", impact: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [floatingHearts, setFloatingHearts] = useState([]);

  const testimonials = [
    {
      quote: "The WhatsApp bot was like having a wise big sister – always there to listen and guide without judgment. It helped me understand my body and rights better.",
      age: "Age 17",
      location: "Student",
      impact: "Empowered Decision Making",
      icon: "💕"
    },
    {
      quote: "As someone who helps other teens, Teenwise's resources have been invaluable. The information is clear, respectful, and culturally aware.",
      age: "Age 19",
      location: "Peer Mentor",
      impact: "Community Support",
      icon: "🌟"
    },
    {
      quote: "I felt lost and scared until I found Teenwise. The anonymous chat helped me ask questions I was afraid to ask anywhere else.",
      age: "Age 16",
      location: "High School Student",
      impact: "Safe Space Found",
      icon: "🦋"
    },
    {
      quote: "This platform gave me confidence to discuss reproductive health with my family. Now I'm helping other girls in my community stay informed.",
      age: "Age 18",
      location: "Youth Advocate",
      impact: "Knowledge Shared",
      icon: "🌸"
    }
  ];

  // Floating hearts animation
  const addFloatingHeart = (event) => {
    const heart = {
      id: Date.now(),
      x: event.clientX,
      y: event.clientY,
    };
    setFloatingHearts(prev => [...prev, heart]);
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== heart.id));
    }, 2000);
  };

  // Support message animations
  const supportMessages = [
    "You're not alone 💗",
    "We're here for you 🌟",
    "Your voice matters ✨",
    "Safe space always 🦋",
    "Ask anything 💌"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % supportMessages.length);
    }, 3000);
    return () => clearInterval(messageInterval);
  }, []);

  return (
    <section className="relative overflow-hidden px-6 py-24 bg-white min-h-screen">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-wave absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100"></div>
        </div>
        <div className="animate-wave-slow absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100"></div>
        </div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              {["✨", "💗", "🦋", "🌟"][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Hearts Animation */}
      <AnimatePresence>
        {floatingHearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ scale: 0, x: heart.x, y: heart.y }}
            animate={{ scale: 1, y: heart.y - 100, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed z-50 pointer-events-none"
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative mx-auto max-w-4xl">
        {/* Animated Header */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <Heart className="w-16 h-16 text-pink-600 animate-pulse" />
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Your Safe Space for Growth
          </h2>
          <motion.div
            className="text-lg text-pink-600 font-medium"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {supportMessages[currentMessage]}
          </motion.div>
        </motion.div>

        {/* Interactive Support Pillars */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { icon: Shield, title: "Safe Space", desc: "24/7 Confidential Support" },
            { icon: Heart, title: "Caring Guide", desc: "Judgment-Free Zone" },
            { icon: MessageCircle, title: "Open Chat", desc: "Anonymous & Secure" }
          ].map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white/80 p-6 rounded-xl border border-pink-200 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={addFloatingHeart}
            >
              <motion.div
                className="mx-auto mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <pillar.icon className="w-8 h-8 text-pink-600 mx-auto" />
              </motion.div>
              <div className="text-xl font-bold text-gray-800 mb-2">{pillar.title}</div>
              <div className="text-gray-600 text-sm">{pillar.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Testimonials Section */}
        <div className="bg-white/80 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 overflow-hidden">
          <div className="testimonials-container h-[600px] relative">
            <div className="testimonials-scroll space-y-6 p-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/90 rounded-lg p-6 backdrop-blur-lg border border-gray-200 hover:border-pink-300 transition-all duration-300 shadow-md relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="text-3xl"
                    >
                      {testimonial.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-800">{testimonial.age}</span>
                        <span className="text-pink-600">·</span>
                        <span className="text-pink-600">{testimonial.location}</span>
                      </div>
                      <motion.p 
                        className="text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {testimonial.quote}
                      </motion.p>
                      <motion.div
                        className="mt-4 inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Flower2 className="w-4 h-4" />
                        {testimonial.impact}
                      </motion.div>
                    </div>
                  </div>
                  {hoveredCard === index && (
                    <motion.div
                      className="absolute -right-2 -top-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Stars className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Share Button */}
        <div className="mt-8 flex justify-center">
          {!isFormVisible && (
            <motion.button
              onClick={() => setIsFormVisible(true)}
              className="group relative px-8 py-4 bg-pink-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Share Your Journey
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1 }}
              />
            </motion.button>
          )}
        </div>
      </div>

      {/* Rest of the component (form modal, notifications) remains similar but with enhanced animations */}
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .testimonials-scroll {
            animation: scrollVertical 40s linear infinite;
          }

          .testimonials-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes scrollVertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(calc(-50% - 1rem)); }
          }

          @keyframes wave {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }

          .animate-wave {
            animation: wave 15s infinite linear;
          }

          .animate-wave-slow {
            animation: wave 20s infinite linear reverse;
          }

          .shine {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 200% 100%;
            animation: shine 2s infinite linear;
          }

          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </section>
  );
}