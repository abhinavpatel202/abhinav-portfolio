"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 text-gray-800 dark:text-gray-100">

      <style>{`
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* Toggle */}
      <div className="flex justify-end mb-4">
        {mounted && (
          <Button
            variant="outline"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 hover:shadow-md hover:bg-purple-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light" : "Dark"} Mode
          </Button>
        )}
      </div>

      {/* Hero */}
      <section className="text-center mb-12">
        <motion.img 
          src="/profile.jpeg" 
          alt="Abhinav Patel" 
          className="mx-auto w-40 h-40 rounded-full shadow-lg mb-4 object-cover border-4 border-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1 
          className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 inline-block text-transparent bg-clip-text mb-3 drop-shadow"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Abhinav Patel
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I'm a passionate Data Scientist with a strong background in machine learning, data visualization, and data-driven storytelling. With expertise in Python, SQL, Power BI, and NLP techniques, I love building end-to-end analytical solutions and AI models that solve real-world problems and deliver business value.
        </motion.p>
        <div className="mt-5 flex justify-center gap-6 flex-wrap">
          <a href="https://github.com/abhinavpatel202" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gray-900 text-white hover:bg-purple-600 transition duration-300"><Github className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/in/patel-abhinav-ms/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-700 text-white hover:bg-blue-600 transition duration-300"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a>
          <a href="/AbhinavPatelResumeDA.pdf" download="AbhinavPatel_Resume.pdf">
            <Button className="bg-green-600 text-white hover:bg-green-500 transition duration-300">📄 Download Resume</Button>
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-8">Skills</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {["Python", "SQL", "Power BI", "Tableau", "Excel", "EDA", "Feature Engineering", "NLP", "Scikit-learn", "Pandas", "Matplotlib", "Git", "Azure ML", "A/B Testing"].map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-700 text-center p-4 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Word Wrangling & Text Analytics Tool",
              desc: "Python NLP tool for extracting insights from unstructured data, reducing 95% noise and enabling real-time keyword clustering.",
              link: "https://github.com/abhinavpatel202/word-wrangling-nlp"
            },
            {
              title: "Lung Disease Detection from X-Ray using GANs",
              desc: "Deep learning pipeline using CNN and GANs, achieving 97% classification accuracy for X-ray lung disease detection.",
              link: "https://github.com/abhinavpatel202/lung-disease-detection"
            },
            {
              title: "Bookstore Insights in Tableau",
              desc: "Interactive Tableau dashboards showing stakeholder-specific insights into sales, engagement, and genre-based performance.",
              link: ""
            },
            {
              title: "CinemAround SQL + Power BI",
              desc: "SQL & Power BI-based movie database platform inspired by Netflix; included live querying and visual storytelling.",
              link: ""
            }
          ].map((proj, i) => (
            <motion.div key={i} className="project-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-2">{proj.title}</h3>
                <p className="mb-2">{proj.desc}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub</a>
                )}
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}