import { motion } from "framer-motion";
import { Publication } from "@shared/types";

interface PublicationsProps {
  publications: Publication[];
}

export function Publications({ publications }: PublicationsProps) {
  return (
    <section id="publications" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Publications & Research
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My academic contributions to the field of artificial intelligence.
          </motion.p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <motion.div 
              key={publication.id}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                "{publication.title}"
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {publication.journal}, {publication.year}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {publication.description}
              </p>
              <div className="flex items-center space-x-4">
                <a href={publication.paperUrl} className="text-primary dark:text-primary-400 hover:underline text-sm font-medium">
                  Read Paper
                </a>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <a href={publication.codeUrl} className="text-primary dark:text-primary-400 hover:underline text-sm font-medium">
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
