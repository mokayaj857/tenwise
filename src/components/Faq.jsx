import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { ChevronDown, MessageCircle, Shield, Book, Heart, Users, HelpCircle, Calendar, Mail, Info } from 'lucide-react';

const TeenwiseFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovering, setIsHovering] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const containerRef = useRef(null);
  
  // Theme customization - allows for easy integration with different websites
  const theme = {
    primary: '#8A2BE2',       // Primary purple
    primaryLight: '#BF97E8',  // Light purple
    primaryDark: '#5D1A9E',   // Dark purple
    accent: '#FF6B6B',        // Accent color for highlights
    light: '#F8F5FF',         // Light background
    dark: '#333333',          // Dark text
    success: '#4CAF50',       // Success color
    info: '#2196F3',          // Info color
    radius: '16px',           // Border radius
    fontFamily: '"Inter", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
  };

  const faqData = [
    {
      question: "What is Teenwise and how does it work?",
      answer: "Teenwise is a platform that provides accessible reproductive health education and motherly guidance to young people through WhatsApp, web app, and SMS. We offer confidential support and accurate information on topics that are often avoided in many homes. Our conversations are open and no personal details are required, ensuring a safe space for young people to get the information they need.",
      icon: <MessageCircle />,
      color: theme.primary
    },
    {
      question: "Is my conversation with Teenwise private?",
      answer: "Absolutely! All conversations with Teenwise are completely confidential. We do not require any personal details, and your privacy is our top priority. You can ask questions and receive guidance without fear of judgment or your information being shared.",
      icon: <Shield />,
      color: theme.info
    },
    {
      question: "How can I access Teenwise services?",
      answer: "Teenwise is available through multiple platforms to ensure accessibility. You can reach us via our WhatsApp bot, web application, or SMS service. Choose the method that works best for you based on your available technology and comfort level.",
      icon: <Book />,
      color: theme.accent
    },
    {
      question: "What kind of topics does Teenwise cover?",
      answer: "Teenwise covers a wide range of reproductive health topics including but not limited to: menstruation, contraception methods, pregnancy prevention, healthy relationships, consent, body changes during puberty, and general sexual health education. Our goal is to provide accurate, age-appropriate information that helps young people make informed decisions.",
      icon: <Heart />,
      color: '#FF84E8'
    },
    {
      question: "Who creates the content for Teenwise?",
      answer: "Teenwise content is developed by a team of reproductive health experts, educators, and healthcare professionals. All information is medically accurate, culturally sensitive, and age-appropriate. We regularly update our content based on the latest research and best practices in reproductive health education.",
      icon: <Users />,
      color: theme.success
    },
    {
      question: "Is Teenwise only for teenagers?",
      answer: "While our primary audience is adolescents and young adults, Teenwise is available to anyone seeking information about reproductive health. Parents, educators, and other adults can also use our resources to better support the young people in their lives.",
      icon: <HelpCircle />,
      color: '#8A5CF5'
    },
  ];

  // Animation configuration
  const animations = {
    fadeInUp: 'animate-fadeInUp',
    fadeInDown: 'animate-fadeInDown',
    fadeInLeft: 'animate-fadeInLeft',
    fadeInRight: 'animate-fadeInRight',
    popIn: 'animate-popIn',
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
  };

  // Generate floating elements for background animation
  const generateFloatingElements = () => {
    return Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      size: Math.random() * 60 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.05 + 0.05,
      shape: Math.random() > 0.7 ? 'polygon' : 'circle',
    }));
  };

  const [floatingElements] = useState(generateFloatingElements());

  // Handle window resize to make component responsive
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Scroll animation detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            if (!animatedItems.includes(index)) {
              setAnimatedItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => observer.observe(item));

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [animatedItems]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Dynamic sizing based on viewport
  const getResponsiveSize = (mobile, tablet, desktop) => {
    if (windowWidth < 640) return mobile;
    if (windowWidth < 1024) return tablet;
    return desktop;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden font-sans"
      style={{ 
        fontFamily: theme.fontFamily,
        backgroundImage: 'radial-gradient(circle at top right, rgba(138, 43, 226, 0.15), transparent 70%), radial-gradient(circle at bottom left, rgba(255, 107, 107, 0.1), transparent 70%)',
        backgroundColor: theme.light,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${element.shape === 'polygon' ? 'clip-path-polygon' : 'rounded-full'}`}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              backgroundColor: element.id % 3 === 0 ? theme.primary : 
                               element.id % 3 === 1 ? theme.accent : 
                               theme.info,
              opacity: element.opacity,
              animation: `float ${element.duration}s infinite ease-in-out ${element.delay}s`,
              filter: 'blur(2px)',
              transform: element.shape === 'polygon' ? 'rotate(45deg)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Main Content Container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Header Section with animations */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 relative">
          {/* Animated backdrop */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full animate-pulse-slow" 
            style={{background: `radial-gradient(circle, ${theme.primaryLight} 0%, transparent 70%)`}}
          />
          
          <div className="relative inline-block animate-float-slow mb-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
              <Info className="w-8 h-8 sm:w-10 sm:h-10" style={{color: theme.primary}} />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight relative inline-block animate-fadeInUp"
            style={{color: theme.primaryDark}}
          >
            Frequently Asked Questions
            <span className="absolute -bottom-2 left-0 w-full h-1 animate-expand" 
              style={{backgroundImage: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)`}}
            />
          </h1>
          
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            Providing accessible reproductive health education and motherly guidance to over 
            <span className="font-bold relative mx-1 px-1" style={{color: theme.primary}}>
              1.3 billion
              <span className="absolute bottom-0 left-0 w-full h-1" style={{backgroundColor: theme.primaryLight}} />
            </span> 
            people facing barriers to reproductive health services worldwide.
          </p>
        </header>

        {/* Stats section - new creative element */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16 animate-fadeInUp animation-delay-300">
          {[
            { value: '21M', label: 'Young girls become pregnant annually', icon: <Calendar /> },
            { value: '70%', label: 'Lack access to proper sex education', icon: <Book /> },
            { value: '24/7', label: 'Support available through our platform', icon: <Mail /> }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              style={{borderRadius: theme.radius}}
            >
              <div 
                className="absolute top-0 right-0 w-24 h-24 rounded-full transform translate-x-8 -translate-y-8 transition-opacity duration-500 opacity-10 group-hover:opacity-20"
                style={{backgroundColor: theme.primary}}
              />
              <div className="flex items-center mb-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110"
                  style={{backgroundColor: `${theme.primaryLight}30`}}
                >
                  {React.cloneElement(stat.icon, { className: "w-5 h-5", style: {color: theme.primary} })}
                </div>
                <h3 className="text-3xl font-bold" style={{color: theme.primary}}>{stat.value}</h3>
              </div>
              <p className="text-gray-700">{stat.label}</p>
              
              <div 
                className="absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full w-0"
                style={{backgroundColor: theme.primary}}
              />
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section with scroll animations */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
          {faqData.map((faq, index) => (
            <div
              key={index}
              data-index={index}
              className={`faq-item mb-4 sm:mb-6 bg-white rounded-xl overflow-hidden transition-all duration-500 transform ${
                animatedItems.includes(index) ? animations.fadeInUp : 'opacity-0'
              } ${activeIndex === index ? 'shadow-lg scale-101' : 'shadow hover:shadow-md'}
              ${isHovering === index ? 'translate-y-1' : ''} animation-delay-${index * 100}`}
              style={{
                borderRadius: theme.radius,
                transitionDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <div 
                className={`flex items-center justify-between p-4 sm:p-5 cursor-pointer relative overflow-hidden group`}
                onClick={() => toggleAccordion(index)}
              >
                {/* Left highlight bar with unique color per item */}
                <div 
                  className={`absolute left-0 top-0 w-1 h-full transform origin-top transition-transform duration-500 ${
                    activeIndex === index || isHovering === index ? 'scale-y-100' : 'scale-y-0'
                  }`} 
                  style={{backgroundColor: faq.color}}
                />
                
                {/* Background pulse effect on hover */}
                <div 
                  className={`absolute inset-0 transform scale-0 origin-center transition-transform duration-500 ${
                    activeIndex === index ? 'scale-100 opacity-10' : ''
                  }`}
                  style={{backgroundColor: faq.color}}
                />
                
                <div className="flex items-center gap-3 sm:gap-4 z-10">
                  <div 
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index ? 'animate-bounce-small' : 'group-hover:scale-110'
                    }`}
                    style={{
                      backgroundColor: `${faq.color}20`,
                      color: faq.color
                    }}
                  >
                    {React.cloneElement(faq.icon, { className: "w-5 h-5" })}
                  </div>
                  <h3 className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
                    activeIndex === index ? '' : 'text-gray-800'
                  }`}
                  style={{color: activeIndex === index ? faq.color : ''}}
                  >
                    {faq.question}
                  </h3>
                </div>
                
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-500 flex-shrink-0 ml-2`}
                  style={{
                    color: faq.color,
                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </div>
              
              {/* Answer section with fade-in animation */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 sm:p-5 sm:pt-2 text-gray-700 leading-relaxed">
                  <p className="transform transition-all duration-500 delay-100 ease-out">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section with enhanced animations */}
        <div className="relative mt-16 sm:mt-20 overflow-hidden rounded-2xl mx-auto max-w-4xl" style={{borderRadius: theme.radius}}>
          <div className="absolute inset-0" style={{background: `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary})`}} />
          
          {/* Enhanced bubble animations */}
          <div className="absolute inset-0 overflow-hidden opacity-60">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="absolute rounded-full bg-white opacity-20"
                style={{
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
                  left: `${Math.random() * 100}%`,
                  bottom: `-${Math.random() * 20 + 10}px`,
                  animation: `rise ${Math.random() * 10 + 15}s infinite ease-in ${Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          {/* Animated wave overlay */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-12 sm:h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#ffffff" 
                fillOpacity="0.1"
                className="animate-wave-slow" />
            </svg>
          </div>
          
          <div className="relative z-10 py-10 sm:py-12 px-6 sm:px-8 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-fadeInUp">Have a Question Not Listed Here?</h2>
            <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg animate-fadeInUp animation-delay-100">
              Each year, 21 million girls aged 15–19 in developing regions become pregnant, 
              often due to limited access to sex education. Teenwise is here to help bridge 
              this gap. Start a conversation with us today - no personal details required.
            </p>
            <button 
              className="inline-block bg-white font-bold py-3 px-6 sm:px-8 rounded-full hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fadeInUp animation-delay-200"
              style={{color: theme.primary}}
            >
              <span className="relative z-10 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Contact Teenwise Now</span>
              </span>
              
              {/* Button animation effects */}
              <span className="absolute inset-0 scale-0 rounded-full group-hover:scale-100 transition-transform duration-500 ease-out"
                style={{background: `linear-gradient(90deg, ${theme.primaryLight}30, transparent)`}} />
              
              <span className="absolute -inset-px rounded-full scale-0 bg-white opacity-30 group-hover:scale-105 group-hover:animate-pulse-fast" />
            </button>
          </div>
        </div>
        
        {/* Responsive footer tag with signature look */}
        <div className="text-center mt-16 text-sm text-gray-500 animate-fadeInUp animation-delay-300">
          <div className="inline-block py-2 px-4 rounded-full bg-white bg-opacity-50 backdrop-blur-sm shadow-sm">
            Teenwise © {new Date().getFullYear()} | Reproductive Health Education
          </div>
        </div>
      </div>

      {/* Global CSS for animations and responsive adjustments */}
      <style jsx global>{`
        /* Float animations with different patterns */
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-15px, 15px); }
          50% { transform: translate(15px, -15px); }
          75% { transform: translate(15px, 15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        /* Rising bubble animations */
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-150px) scale(1.5); opacity: 0.1; }
          100% { transform: translateY(-300px) scale(2); opacity: 0; }
        }
        
        /* Wave animation for CTA section */
        @keyframes wave-slow {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-25%) scaleY(0.8); }
          100% { transform: translateX(-50%) scaleY(1); }
        }
        
        /* Expanding line animation */
        @keyframes expand {
          0% { transform: scaleX(0); opacity: 0; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0; left: 100%; }
        }
        
        /* Subtle bounce animation */
        @keyframes bounce-small {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        /* Pulse animations at different speeds */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.5; }
        }
        
        /* Fade in animations from different directions */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        /* Pop in animation */
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          70% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        /* Add animation classes */
        .animate-fadeInUp { animation: fadeInUp 0.8s forwards; }
        .animate-fadeInDown { animation: fadeInDown 0.8s forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.8s forwards; }
        .animate-popIn { animation: popIn 0.8s forwards; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-bounce-small { animation: bounce-small 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-fast { animation: pulse-fast 1.5s ease-in-out infinite; }
        .animate-wave-slow { animation: wave-slow 15s ease-in-out infinite linear; }
        .animate-expand { animation: expand 3s infinite; }
        
        /* Animation delays */
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        
        /* Custom scaling for hover effects */
        .scale-101 { transform: scale(1.01); }
        
        /* Clip path for polygon shapes */
        .clip-path-polygon {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        /* Responsive typography adjustments */
        @media (max-width: 640px) {
          .text-base { font-size: 0.9375rem; }
        }
      `}</style>
    </div>
  );
};

export default TeenwiseFAQ;