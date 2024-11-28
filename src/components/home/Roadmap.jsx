import React from "react";
import { LayoutDashboard, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export function Roadmap() {
  return (
    <section className='py-20 bg-gray-900'>
      <div className='container mx-auto px-6'>
        <motion.h2
          className='text-4xl font-bold text-center mb-16 text-white'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Future Roadmap
        </motion.h2>
        <div className='space-y-12'>
          <motion.div
            className='flex items-center gap-8 max-w-3xl mx-auto'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LayoutDashboard className='w-12 h-12 text-purple-500 flex-shrink-0' />
            <div>
              <h3 className='text-xl font-semibold mb-2 text-white'>
                Advanced Analytics Dashboard
              </h3>
              <p className='text-gray-400'>
                Comprehensive insights into candidate performance and hiring
                metrics
              </p>
            </div>
          </motion.div>
          <motion.div
            className='flex items-center gap-8 max-w-3xl mx-auto'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <LineChart className='w-12 h-12 text-purple-500 flex-shrink-0' />
            <div>
              <h3 className='text-xl font-semibold mb-2 text-white'>
                Predictive Hiring Insights
              </h3>
              <p className='text-gray-400'>
                AI-powered predictions for candidate success and team fit
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
