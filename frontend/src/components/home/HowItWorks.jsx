import React from "react";
import { FileText, Target, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: <FileText className='w-10 h-10 text-purple-500' />,
      title: "Resume Analysis",
      description: "Upload your resume for AI analysis and ATS scoring",
    },
    {
      icon: <Target className='w-10 h-10 text-purple-500' />,
      title: "Job Matching",
      description: "Get matched with relevant positions based on your profile",
    },
    {
      icon: <MessageSquare className='w-10 h-10 text-purple-500' />,
      title: "Virtual Interview",
      description: "Complete AI-driven interview process",
    },
  ];

  return (
    <section className='py-20 bg-gray-800'>
      <div className='container mx-auto px-6'>
        <motion.h2
          className='text-4xl font-bold text-center mb-16 text-white'
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
              className='flex-1 text-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className='mb-6 flex justify-center'>{step.icon}</div>
              <h3 className='text-xl font-semibold mb-4 text-white'>
                {step.title}
              </h3>
              <p className='text-gray-400'>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
