import React from "react";
import { FileText, Target, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: <FileText className='w-12 h-12 text-purple-500' />,
      title: "Resume Parsing & ATS Score",
      description:
        "AI-powered resume analysis with comprehensive ATS compatibility scoring",
    },
    {
      icon: <Target className='w-12 h-12 text-purple-500' />,
      title: "Job Description Matching",
      description:
        "Smart matching algorithm to align candidate profiles with job requirements",
    },
    {
      icon: <MessageSquare className='w-12 h-12 text-purple-500' />,
      title: "Virtual Interview",
      description:
        "Advanced AI-driven interviews to assess technical and soft skills",
    },
  ];

  return (
    <section className='py-20 bg-gray-900'>
      <div className='container mx-auto px-6'>
        <motion.h2
          className='text-4xl font-bold text-center mb-16 text-white'
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
              className='bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className='mb-6'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-4 text-white'>
                {feature.title}
              </h3>
              <p className='text-gray-400'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
