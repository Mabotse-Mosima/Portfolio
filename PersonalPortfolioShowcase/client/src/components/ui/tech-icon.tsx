import { FaStar } from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiNumpy, 
  SiPandas,
  SiPython,
  SiAmazon,
  SiDocker
} from "react-icons/si";

interface TechIconProps {
  name: string;
}

export function TechIcon({ name }: TechIconProps) {
  // Map of tech names to their SVG logos
  const techIcons: Record<string, JSX.Element> = {
    "TensorFlow": <SiTensorflow className="h-8" />,
    "PyTorch": <SiPytorch className="h-8" />,
    "Scikit-learn": <SiScikitlearn className="h-8" />,
    "NumPy": <SiNumpy className="h-8" />,
    "Pandas": <SiPandas className="h-8" />,
    "Python": <SiPython className="h-8" />,
    "AWS": <SiAmazon className="h-8" />,
    "Docker": <SiDocker className="h-8" />,
    "Default": <FaStar className="h-8" />
  };

  // Return the icon if it exists, otherwise return a default icon
  return (
    <div className="transition-transform hover:scale-105">
      {techIcons[name] || techIcons["Default"]}
    </div>
  );
}
