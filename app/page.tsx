"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Sun, Moon, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";



export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative overflow-hidden min-h-screen transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 text-gray-800 dark:text-gray-100">

      {/* Background glow effect */}
      <div className="absolute -z-10 w-96 h-96 rounded-full bg-purple-400 blur-3xl opacity-30 top-0 left-0 animate-pulse" />
      <div className="absolute -z-10 w-96 h-96 rounded-full bg-pink-400 blur-2xl opacity-30 bottom-0 right-0 animate-ping" />

      {/* Toggle */}
      <div className="flex justify-end mb-4">
        {mounted && (
          <Button
          variant="outline"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-2 hover:shadow-md hover:bg-purple-200 dark:hover:bg-gray-700"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </Button>
        
        )}
      </div>

      {/* Hero */}
      <section className="text-center mb-16">
  <motion.img 
    src="/profile.jpeg" 
    alt="Abhinav Patel" 
    className="mx-auto w-40 h-40 rounded-full shadow-lg mb-4 object-cover border-4 border-white"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  />

  <motion.h1 
    className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 inline-block text-transparent bg-clip-text mb-2 drop-shadow"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    Abhinav Patel
  </motion.h1>

  {/* Contact Info */}
  <motion.div
    className="flex justify-center items-center gap-6 flex-wrap text-sm text-gray-700 dark:text-gray-300 mb-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    <span className="flex items-center gap-1">
      📞 <a href="tel:+17169861307" className="hover:underline">+1 (716) 986-1307</a>
    </span>
    <span className="flex items-center gap-1">
      📧 <a href="mailto:apatel58@buffalo.edu" className="hover:underline">apatel58@buffalo.edu</a>
    </span>
  </motion.div>

  <motion.p 
    className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    I'm a passionate Data Scientist with a strong background in machine learning, data visualization, and data-driven storytelling. With expertise in Python, SQL, Power BI, and NLP techniques, I love building end-to-end analytical solutions and AI models that solve real-world problems and deliver business value.
  </motion.p>

  {/* Buttons */}
  <motion.div 
    className="mt-5 flex justify-center gap-6 flex-wrap"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 }}
  >
    <a href="https://github.com/abhinavpatel202" target="_blank">
      <Button className="bg-gray-900 text-white hover:bg-purple-600 transition duration-300">
        <Github className="mr-2" /> GitHub
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/patel-abhinav-ms/" target="_blank">
      <Button className="bg-blue-700 text-white hover:bg-blue-600 transition duration-300">
        <Linkedin className="mr-2" /> LinkedIn
      </Button>
    </a>
    <a
  href="/AbhinavPatelResumeDA.pdf"
  download="AbhinavPatel_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-green-600 text-white hover:bg-green-500 transition duration-300">
    📄 Download Resume
  </Button>
</a>

  </motion.div>
</section>


      {/* Project Cards */}
      <section className="mb-16">
  <h2 className="text-3xl font-bold text-center mb-8 text-purple-600 dark:text-purple-300">🚀 Featured Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Project 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-md border border-gray-300 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold mb-2">Word Wrangling & Text Analytics Tool</h3>
      <p className="text-sm mb-2">
        A Python-based NLP tool for text preprocessing, noise reduction, and keyword extraction. Achieved 95% noise reduction and supported real-time term analysis over 3,000+ word inputs.
      </p>
      <a href="https://github.com/abhinavpatel202" target="_blank" className="text-blue-500 hover:underline">🔗 GitHub</a>
    </motion.div>

    {/* Project 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-md border border-gray-300 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold mb-2">Lung Disease Detection from X-Ray using GANs</h3>
      <p className="text-sm mb-2">
        Hybrid CNN + GAN model for thoracic disease classification using X-rays. Reached 97% classification accuracy using deep learning and classical models (SVM, Random Forest).
      </p>
      <a href="https://github.com/abhinavpatel202" target="_blank" className="text-blue-500 hover:underline">🔗 GitHub</a>
    </motion.div>

    {/* Project 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-md border border-gray-300 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold mb-2">Bookstore Insights in Tableau</h3>
      <p className="text-sm mb-2">
        Built interactive Tableau dashboards for sales, genre analytics, and regional insights tailored for multiple stakeholders. Leveraged parameters and calculated fields.
      </p>
      <a href="#" className="text-blue-500 hover:underline">📊 View Dashboard</a>
    </motion.div>

    {/* Project 4 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-md border border-gray-300 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold mb-2">CinemAround Database Project</h3>
      <p className="text-sm mb-2">
        Built a Netflix-style movie database using Oracle SQL with backend analytics and Power BI dashboards. Enabled real-time insight generation and user segmentation.
      </p>
      <a href="#" className="text-blue-500 hover:underline">🧠 Case Study</a>
    </motion.div>

  </div>
</section>


      {/* Skills Section */}
      <section className="mb-20 text-center">
  <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-6">🧰 Skills & Tools</h2>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm">
    {[
      'Python (Pandas, NumPy, Seaborn)',
      'SQL (CTEs, Window Functions)',
      'Power BI & Tableau',
      'Excel + Power Query',
      'Jupyter / Colab',
      'Data Cleaning & ETL',
      'A/B Testing & Hypothesis Testing',
      'APIs & Web Scraping',
      'Git & GitHub',
      'Data Storytelling',
      'Stakeholder Dashboards',
      'Azure ML Studio (Basics)',
    ].map((skill, i) => (
      <div
        key={i}
        className="bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-700 dark:to-gray-800 p-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      >
        {skill}
      </div>
    ))}
  </div>
</section>




      


      <section className="mb-16 text-center" id="contact">
  <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-6">📞 Contact Me</h2>

  <div className="flex flex-col items-center gap-4 text-gray-700 dark:text-gray-200 text-lg">
    
    <div className="flex items-center gap-2">
      <Mail className="text-purple-500" size={20} />
      <a href="mailto:apatel58@buffalo.edu" className="hover:underline text-blue-600">
        apatel58@buffalo.edu
      </a>
    </div>

    <div className="flex items-center gap-2">
      <Linkedin className="text-purple-500" size={20} />
      <a
        href="https://www.linkedin.com/in/patel-abhinav-ms/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-blue-600"
      >
        linkedin.com/in/patel-abhinav-ms
      </a>
    </div>

  </div>
</section>




      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-300 dark:border-gray-700">
        Made with 💻 by Abhinav Patel • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
