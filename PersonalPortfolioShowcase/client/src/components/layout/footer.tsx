import { Link } from "wouter";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { scrollToSection } from "@/lib/utils";

interface QuickLink {
  name: string;
  href: string;
}

interface ResourceLink {
  name: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

const resourceLinks: ResourceLink[] = [
  { name: "Download Resume", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Research Papers", href: "#" },
  { name: "Open Source", href: "#" },
];

export function Footer() {
  const handleClickNav = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.slice(1));
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold text-white mb-4">John Doe</h4>
            <p className="text-slate-400 mb-4 max-w-md">
              AI Engineer & Researcher specializing in machine learning, natural language processing, and computer vision.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickNav(link.href);
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
