import { ExternalLink, Github } from 'lucide-react';
import ecommerceImg from '../assets/project-ecommerce.jpg';
import weatherImg from '../assets/project-weather.jpg';
import dashboardImg from '../assets/project-dashboard.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, full-featured e-commerce platform built with React and TypeScript. Features include product catalog, shopping cart, payment integration, and admin dashboard.',
      image: ecommerceImg,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Node.js'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/abdolrahman/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with real-time data, forecasts, and location-based services. Responsive design with smooth animations and interactive charts.',
      image: weatherImg,
      technologies: ['Vue.js', 'JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/abdolrahman/weather-dashboard',
      featured: true
    },
    {
      id: 3,
      title: 'Project Management Tool',
      description: 'Comprehensive project management dashboard with task tracking, team collaboration, and analytics. Built for productivity and ease of use.',
      image: dashboardImg,
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example-dashboard.com',
      githubUrl: 'https://github.com/abdolrahman/project-management',
      featured: true
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique 
            challenge and showcases different aspects of my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card-glow group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProjectClick(project.liveUrl)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-primary font-medium flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted/20 rounded-full text-xs font-medium text-muted-foreground border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.liveUrl);
                    }}
                    className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-300"
                    aria-label={`View ${project.title} live site`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Site</span>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.githubUrl);
                    }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => handleProjectClick('https://github.com/abdolrahman')}
            className="btn-neon-outline"
          >
            View More on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;