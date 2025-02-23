import React, { useState } from 'react';
import { ChevronDown, Heart, MessageCircle, Shield, Users } from 'lucide-react';
import { Alert } from 'antd';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Teenwise ensure privacy and confidentiality?",
      answer: "Your privacy is our top priority. All conversations are completely anonymous and encrypted. We never collect personal information, and our platform is designed to provide a safe space for open discussions.",
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      question: "What kind of support can I expect from Teenwise?",
      answer: "We provide evidence-based information about reproductive health, emotional support, and guidance on various topics. Our responses are non-judgmental and aimed at helping you make informed decisions about your health and well-being.",
      icon: <Heart className="w-6 h-6 text-purple-500" />
    },
    {
      question: "How can I access Teenwise's services?",
      answer: "You can reach us through our WhatsApp bot, web app, or SMS service. These platforms are available 24/7, ensuring you can get support whenever you need it.",
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />
    },
    {
      question: "Who provides the guidance and information?",
      answer: "Our content is developed by reproductive health experts, counselors, and medical professionals. All information is regularly reviewed and updated to ensure accuracy and relevance.",
      icon: <Users className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <Alert className="mb-8 bg-purple-50 border-purple-200">
          <p className="text-purple-800 text-sm">
            Your questions matter. We're here to provide support and guidance, completely anonymously.
          </p>
        </Alert>

        <h1 className="text-4xl font-bold text-purple-900 mb-8 animate-fade-in">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-purple-100 rounded-lg overflow-hidden transform transition-all duration-300 ${
                openIndex === index ? 'shadow-lg' : 'hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between bg-white"
              >
                <div className="flex items-center gap-4">
                  {faq.icon}
                  <span className="text-lg font-medium text-purple-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-purple-500 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default FAQSection;