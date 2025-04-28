import React from "react";
import { FileText, Target, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: <FileText className='w-12 h-12 text-cyan-400 neon-glow' />,
      title: "AI Resume Parsing & ATS Score",
      description:
        "Leverage advanced NLP and transformer models to extract, score, and normalize candidate data for optimal ATS compatibility.",
    },
    {
      icon: <Target className='w-12 h-12 text-fuchsia-400 neon-glow' />,
      title: "Semantic Job Matching",
      description:
        "Utilize vector embeddings and semantic search to align candidate profiles with job requirements at scale.",
    },
    {
      icon: <MessageSquare className='w-12 h-12 text-lime-400 neon-glow' />,
      title: "AI-Powered Virtual Interview",
      description:
        "Conduct adaptive, real-time interviews with AI-driven question generation and skill assessment.",
    },
  ];

  return (
    <section className='py-20 bg-black'>
      <div className='container mx-auto px-6'>
        <motion.h2
          className='text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-transparent drop-shadow-neon'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>
        <div className='grid md:grid-cols-3 gap-12'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-xl border-2 border-cyan-400/30 hover:border-fuchsia-500/60 neon-glow transition-all shadow-xl hover:scale-105'
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.18 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className='mb-6 flex justify-center'>{feature.icon}</div>
              <h3 className='text-xl font-bold mb-4 text-white drop-shadow-neon'>
                {feature.title}
              </h3>
              <p className='text-cyan-200 text-base'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}