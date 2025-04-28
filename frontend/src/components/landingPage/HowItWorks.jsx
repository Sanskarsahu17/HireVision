import React from "react";
import { FileText, Target, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: <FileText className='w-10 h-10 text-cyan-400 neon-glow' />,
      title: "Upload Resume",
      description: "Upload your resume in PDF or DOCX. Our AI parses, extracts, and normalizes your data instantly.",
    },
    {
      icon: <Target className='w-10 h-10 text-fuchsia-400 neon-glow' />,
      title: "Semantic Matching",
      description: "Our ML models compute vector similarities to match your profile with the best-fit jobs.",
    },
    {
      icon: <MessageSquare className='w-10 h-10 text-lime-400 neon-glow' />,
      title: "Virtual Interview",
      description: "Participate in an adaptive, AI-driven interview. Get instant feedback and skill analytics.",
    },
    {
      icon: <Zap className='w-10 h-10 text-yellow-400 neon-glow' />,
      title: "Get Hired",
      description: "Track your progress in real-time and receive personalized recommendations for next steps.",
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-black via-gray-900 to-gray-950'>
      <div className='container mx-auto px-6'>
        <motion.h2
          className='text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-transparent drop-shadow-neon'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className='flex-1 text-center bg-black/60 backdrop-blur-lg border-2 border-cyan-400/20 neon-glow rounded-xl p-8 mx-2 shadow-2xl hover:border-fuchsia-400/50 transition-all'
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.18 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className='mb-6 flex justify-center'>{step.icon}</div>
              <h3 className='text-xl font-bold mb-4 text-white drop-shadow-neon'>
                {step.title}
              </h3>
              <p className='text-cyan-200 text-base'>{step.description}</p>
              {/* Connector for all but last step */}
              {index < steps.length  && (
                <div className="hidden md:block mx-auto mt-8 h-2 w-16 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 rounded-full animate-pulse" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}