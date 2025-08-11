import { ArrowDown, Mail } from 'lucide-react';
import { IconContext } from "react-icons";
import { SiGithub, SiLinkedin, SiUpwork, SiTiktok } from "react-icons/si";
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex  adjusted-gap items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:mt-20">
        {/* Main Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 ultrawide-text">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient-primary block sm:inline">AbdolRahman Asem</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
            Front-End Engineer & 
            <span className="text-gradient-secondary ml-2">Web Developer</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Increase your profits by building your website and reach a wider range of customers.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-neon w-full sm:w-auto"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-neon-outline w-full sm:w-auto"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="https://github.com/abdo1rahman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-green-500 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <IconContext.Provider value={{ className: "w-8 h-8" }}>
                <SiGithub />
              </IconContext.Provider>
            </a>
            <a 
              href="https://linkedin.com/in/abdo1rahman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-blue-700 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <IconContext.Provider value={{ className: "w-8 h-8" }}>
                <SiLinkedin className='group-hover:bg-white rounded-[3px]' />
              </IconContext.Provider>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01a2f19b5d077a7bf8?mp_source=share"
              target='_blank'
              rel='noopener noreferrer'
              className="text-muted-foreground hover:text-green-500 transition-all duration-300 hover:scale-110"
              aria-label="Upwork Profile"
            >
              <IconContext.Provider value={{ className: "w-8 h-8" }}>
                <SiUpwork />
              </IconContext.Provider>
            </a>
            <a
              href="https://tiktok.com/@abdo1rahman_asem"
              target='_blank'
              rel='noopener noreferrer'
              className="text-muted-foreground transition-all duration-300 hover:scale-110 group relative"
              aria-label="TikTok Profile"
            >
              <IconContext.Provider value={{ className: "w-8 h-8" }}>
                <SiTiktok className='group-hover:text-white' />
                <SiTiktok className="absolute group-hover:text-primary right-[2px] bottom-0 hidden group-hover:block -z-10" />
                <SiTiktok className="absolute left-[2px] bottom-0 hidden group-hover:block group-hover:text-pink-600 transition-all duration-300 -z-10" />
              </IconContext.Provider>
            </a>
            <a 
              href="mailto:abdoasem2055@gmail.com"
              className="text-muted-foreground hover:text-indigo-500 transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute left-[48%] transform -translate-x-1/2 text-primary hover:text-primary-glow transition-all duration-600 hover:scale-110 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-8 h-8 hover:scale-110 transition-all duration-200" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;