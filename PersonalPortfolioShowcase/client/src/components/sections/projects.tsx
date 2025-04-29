import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@shared/types";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of my recent work in AI and machine learning.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="#"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-primary dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-64"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => {
            const colorClasses = [
              "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
              "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
              "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
              "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
              "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300",
              "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
              "bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
              "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
            ];
            
            const colorClass = colorClasses[index % colorClasses.length];
            
            return (
              <Badge key={index} variant="outline" className={colorClass}>
                {tag}
              </Badge>
            );
          })}
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <a href={project.projectUrl} className="text-primary dark:text-primary-400 hover:underline font-medium">
            View Project
          </a>
          <a href={project.githubUrl} className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
