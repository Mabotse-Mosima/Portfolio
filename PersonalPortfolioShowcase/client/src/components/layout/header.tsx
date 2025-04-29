import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { downloadResume } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickNav = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.slice(1));
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-200 ${
      scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800' 
        : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-bold text-primary dark:text-primary">
            John Doe
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClickNav(link.href);
                }}
                className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button onClick={downloadResume}>
              Resume
            </Button>
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-md p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button 
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-md p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClickNav(link.href);
                }}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <Button onClick={downloadResume} className="w-full justify-center mt-2">
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
