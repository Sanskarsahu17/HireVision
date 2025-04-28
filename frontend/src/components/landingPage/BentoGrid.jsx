import React from "react";
import { motion } from "framer-motion";
import { Cpu, Bot, BarChart3, ShieldCheck, Code2 } from "lucide-react";

const bentoItems = [
  {
    icon: <Cpu className="w-10 h-10 text-cyan-400" />,
    title: "AI Resume Parsing",
    desc: "Advanced NLP models analyze and score resumes for ATS compatibility.",
    className: "row-span-2 bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    icon: <Bot className="w-10 h-10 text-pink-500" />,
    title: "Virtual Interview Bot",
    desc: "Real-time, AI-powered interviews with dynamic question generation.",
    className: "bg-gradient-to-br from-gray-900 to-purple-900",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-purple-400" />,
    title: "Analytics Dashboard",
    desc: "Deep hiring analytics with interactive, animated charts.",
    className: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
    title: "Secure Data",
    desc: "End-to-end encryption and GDPR-compliant data handling.",
    className: "bg-gradient-to-br from-gray-900 to-gray-800",
  },
  {
    icon: <Code2 className="w-10 h-10 text-yellow-400" />,
    title: "Open API",
    desc: "Integrate with your stack using our robust RESTful API.",
    className: "col-span-2 bg-gradient-to-br from-gray-900 to-cyan-900",
  },
];

export function BentoGrid() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Platform Technology Highlights
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6 bento-grid">
          {bentoItems.map((item, i) => (
            <motion.div
              key={i}
              className={`rounded-xl p-8 shadow-xl border border-gray-800 flex flex-col justify-between ${item.className}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}