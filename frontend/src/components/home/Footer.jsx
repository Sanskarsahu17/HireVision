import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12 border-t border-gray-800'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className='text-xl font-semibold mb-4'>HireVision</h3>
            <p className='text-gray-400'>
              Revolutionizing hiring with AI-driven precision
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className='font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  Support
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className='font-semibold mb-4'>Company</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className='font-semibold mb-4'>Connect</h4>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors'
              >
                <Github className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors'
              >
                <Twitter className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors'
              >
                <Linkedin className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors'
              >
                <Mail className='w-6 h-6' />
              </a>
            </div>
          </motion.div>
        </div>
        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} HireVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
