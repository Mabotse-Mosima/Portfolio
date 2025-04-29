import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";
import { Skill, Tool } from "@shared/types";
import { TechStackIcon } from "@/assets/icons";

interface SkillsProps {
  skills: Skill[];
  tools: Tool[];
}

export function Skills({ skills, tools }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My technical skills and areas of expertise in AI and machine learning.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Tools & Technologies</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={tool.name}
                  className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2 text-primary dark:text-primary-400">
                    <TechStackIcon name={tool.icon} />
                  </div>
                  <h4 className="font-medium text-slate-900 dark:text-white">{tool.name}</h4>
                  <span className="text-xs text-slate-500">{tool.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
