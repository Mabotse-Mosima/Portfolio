import { motion } from "framer-motion";
import { PortfolioData } from "@shared/types";

interface AboutProps {
  data: Pick<PortfolioData, 'education' | 'experience'>;
}

export function About({ data }: AboutProps) {
  const { education, experience } = data;

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="prose prose-slate dark:prose-invert max-w-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I'm an AI Engineer and Researcher with 5+ years of experience building intelligent systems. I specialize in developing machine learning models that solve real-world problems across various domains including healthcare, finance, and e-commerce.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400">
              My journey in AI began during my Master's program at Stanford University, where I focused on deep learning and natural language processing. Since then, I've had the opportunity to work with innovative companies like TechCorp and AI Solutions, developing cutting-edge AI applications that push the boundaries of what's possible.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400">
              When I'm not coding or training models, you can find me contributing to open-source AI projects, writing technical articles on my blog, or mentoring aspiring data scientists and ML engineers.
            </p>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Education</h3>
                <ul className="space-y-4">
                  {education.map((edu, index) => (
                    <li key={index}>
                      <p className="font-medium text-slate-900 dark:text-white">{edu.institution}</p>
                      <p className="text-slate-600 dark:text-slate-400">{edu.degree}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{edu.years}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Experience</h3>
                <ul className="space-y-4">
                  {experience.map((exp, index) => (
                    <li key={index}>
                      <p className="font-medium text-slate-900 dark:text-white">{exp.position}</p>
                      <p className="text-slate-600 dark:text-slate-400">{exp.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{exp.years}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
