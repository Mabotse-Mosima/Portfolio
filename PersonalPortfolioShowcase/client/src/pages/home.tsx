import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Publications } from "@/components/sections/publications";
import { Contact } from "@/components/sections/contact";
import { Helmet } from 'react-helmet';
import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
  const { 
    education, 
    experience, 
    skills, 
    tools, 
    projects, 
    publications, 
    email, 
    phone, 
    location 
  } = portfolioData;

  return (
    <>
      <Helmet>
        <title>John Doe | AI Engineer & Researcher</title>
        <meta name="description" content="AI Engineer specializing in machine learning, natural language processing, and computer vision with 5+ years of experience." />
        <meta property="og:title" content="John Doe | AI Engineer & Researcher" />
        <meta property="og:description" content="AI Engineer specializing in machine learning, natural language processing, and computer vision with 5+ years of experience." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Doe | AI Engineer & Researcher" />
        <meta name="twitter:description" content="AI Engineer specializing in machine learning, natural language processing, and computer vision with 5+ years of experience." />
      </Helmet>
      
      <Header />
      
      <main>
        <Hero />
        <About data={{ education, experience }} />
        <Projects projects={projects} />
        <Skills skills={skills} tools={tools} />
        <Publications publications={publications} />
        <Contact contactInfo={{ email, phone, location }} />
      </main>
      
      <Footer />
    </>
  );
}
