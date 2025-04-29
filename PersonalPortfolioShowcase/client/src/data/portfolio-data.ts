import { PortfolioData } from "@shared/types";

export const portfolioData: PortfolioData = {
  name: "John Doe",
  title: "AI Engineer & Researcher",
  about: "AI professional with expertise in machine learning, natural language processing, and computer vision.",
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  resumeUrl: "/files/john-doe-resume.pdf",
  education: [
    {
      institution: "Stanford University",
      degree: "M.S. in Computer Science, AI Specialization",
      years: "2017 - 2019"
    },
    {
      institution: "University of California, Berkeley",
      degree: "B.S. in Computer Science",
      years: "2013 - 2017"
    }
  ],
  experience: [
    {
      position: "Senior AI Engineer",
      company: "AI Solutions Inc.",
      years: "2021 - Present"
    },
    {
      position: "Machine Learning Engineer",
      company: "TechCorp",
      years: "2019 - 2021"
    },
    {
      position: "AI Research Intern",
      company: "DeepMind",
      years: "Summer 2018"
    }
  ],
  skills: [
    {
      name: "Machine Learning",
      percentage: 95
    },
    {
      name: "Deep Learning",
      percentage: 90
    },
    {
      name: "Natural Language Processing",
      percentage: 85
    },
    {
      name: "Computer Vision",
      percentage: 80
    },
    {
      name: "Reinforcement Learning",
      percentage: 75
    },
    {
      name: "Data Engineering",
      percentage: 70
    }
  ],
  tools: [
    {
      name: "TensorFlow",
      level: "Expert",
      icon: "tensorflow"
    },
    {
      name: "PyTorch",
      level: "Expert",
      icon: "pytorch"
    },
    {
      name: "Scikit-learn",
      level: "Expert",
      icon: "scikit-learn"
    },
    {
      name: "Python",
      level: "Expert",
      icon: "python"
    },
    {
      name: "AWS",
      level: "Advanced",
      icon: "aws"
    },
    {
      name: "Docker",
      level: "Advanced",
      icon: "docker"
    },
    {
      name: "React",
      level: "Intermediate",
      icon: "react"
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: "javascript"
    }
  ],
  projects: [
    {
      id: 1,
      title: "NLP-powered Customer Support Bot",
      description: "Developed a transformer-based chatbot that reduced customer support response time by 75% and increased satisfaction ratings by 35%.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["NLP", "Transformers", "BERT", "Python", "Flask"],
      projectUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Computer Vision Retail Analytics",
      description: "Created a computer vision system for retail stores that tracks customer behavior and provides insights on product interactions and store layout efficiency.",
      image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["Computer Vision", "Object Detection", "PyTorch", "Python", "TensorFlow"],
      projectUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Reinforcement Learning for Portfolio Optimization",
      description: "Applied deep reinforcement learning techniques to optimize investment portfolios, outperforming traditional strategies by 18% during market volatility.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["Reinforcement Learning", "Finance", "Python", "TensorFlow", "Data Science"],
      projectUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      title: "Healthcare Diagnosis Assistant",
      description: "Built an AI system that helps doctors diagnose rare diseases by analyzing medical records, images, and latest research papers with 88% accuracy.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["Healthcare AI", "NLP", "Image Analysis", "Machine Learning", "Python"],
      projectUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "Predictive Maintenance System",
      description: "Designed an IoT-connected predictive maintenance system for manufacturing equipment that reduced downtime by 47% and maintenance costs by 32%.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["IoT", "Time Series", "Anomaly Detection", "Python", "TensorFlow"],
      projectUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "Autonomous Drone Navigation",
      description: "Implemented a reinforcement learning algorithm for autonomous drone navigation in complex environments with obstacle avoidance and optimal path planning.",
      image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["Reinforcement Learning", "Robotics", "Computer Vision", "PyTorch", "Python"],
      projectUrl: "#",
      githubUrl: "https://github.com"
    }
  ],
  publications: [
    {
      id: 1,
      title: "Advancements in Transformer Architectures for Low-Resource Languages",
      journal: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: 2022,
      description: "Proposed a novel transformer architecture that achieves state-of-the-art performance on translation tasks for languages with limited training data.",
      paperUrl: "#",
      codeUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Self-Supervised Learning Techniques for Medical Image Analysis",
      journal: "IEEE Transactions on Medical Imaging",
      year: 2021,
      description: "Introduced a self-supervised learning approach that improves diagnostic accuracy by 15% when applied to medical imaging with limited labeled data.",
      paperUrl: "#",
      codeUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Efficient Reinforcement Learning for Complex Decision-Making Tasks",
      journal: "International Conference on Machine Learning (ICML)",
      year: 2020,
      description: "Developed a computationally efficient reinforcement learning algorithm that reduces training time by 40% while maintaining performance on complex tasks.",
      paperUrl: "#",
      codeUrl: "https://github.com"
    }
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/johndoe",
      icon: "github"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: "twitter"
    },
    {
      name: "Scholar",
      url: "https://scholar.google.com/citations?user=johndoe",
      icon: "scholar"
    }
  ]
};