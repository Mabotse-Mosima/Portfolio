import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !animated) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, ease: "easeOut" }
      });
      setAnimated(true);
    }
  }, [isInView, controls, percentage, animated]);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary dark:bg-primary-500 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
}
