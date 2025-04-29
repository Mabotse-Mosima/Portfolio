import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { TechIcon } from "@/components/ui/tech-icon";
import { FaCircle } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 mb-6">
              <FaCircle className="mr-2 h-2 w-2 text-primary-500" />
              Available for hire
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Hi, I'm <span className="text-primary dark:text-primary-400">John Doe</span>
              <br />AI Engineer & Researcher
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              Passionate about building intelligent systems that solve complex problems. Specializing in machine learning, natural language processing, and computer vision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Get in touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                View projects
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative flex justify-center ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=320&h=320&fit=crop" 
                alt="John Doe portrait" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -z-10 bg-secondary-500/10 dark:bg-secondary-500/20 w-full h-full rounded-full blur-3xl"></div>
          </motion.div>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-70">
          <TechIcon name="TensorFlow" />
          <TechIcon name="PyTorch" />
          <TechIcon name="Scikit-learn" />
          <TechIcon name="NumPy" />
          <TechIcon name="Pandas" />
        </div>
      </div>
    </section>
  );
}
