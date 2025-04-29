import { 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiPython, 
  SiAmazon, 
  SiDocker, 
  SiReact, 
  SiJavascript 
} from "react-icons/si";

interface TechStackIconProps {
  name: string;
}

export function TechStackIcon({ name }: TechStackIconProps) {
  // Map of icon names to their React components
  const icons: Record<string, JSX.Element> = {
    "tensorflow": <SiTensorflow className="h-8 w-8" />,
    "pytorch": <SiPytorch className="h-8 w-8" />,
    "scikit-learn": <SiScikitlearn className="h-8 w-8" />,
    "python": <SiPython className="h-8 w-8" />,
    "aws": <SiAmazon className="h-8 w-8" />,
    "docker": <SiDocker className="h-8 w-8" />,
    "react": <SiReact className="h-8 w-8" />,
    "javascript": <SiJavascript className="h-8 w-8" />,
    "default": (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
      </svg>
    )
  };
  
  // Convert name to lowercase and replace spaces with dashes
  const normalizedName = name.toLowerCase().replace(/\s+/g, '-');
  
  // Return the icon if it exists, otherwise return the default
  return icons[normalizedName] || icons.default;
}
