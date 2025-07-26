import { Code, Palette, Rocket, Users } from 'lucide-react';
import RotatingText from "./RotatingText.jsx";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with modern best practices.',
      gradient: 'text-gradient-primary'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.',
      gradient: 'text-gradient-secondary'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver outstanding performance.',
      gradient: 'text-gradient-primary'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver projects on time and exceed expectations.',
      gradient: 'text-gradient-secondary'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'JavaScript',
    'Tailwind CSS', 'SASS/SCSS', 'Node.js', 'REST APIs',
    'Git', 'Python', 'Vite', 'framer-motion'
  ];

  return (
    <section id="about" className="section-padding bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">About</span> Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I design and build websites for individuals, startups, or businesses who seek to establish their online presence.
            {/* It can range from a personal portfolio website to a fully fledged web app showcasing your company's services and values. */}
            I stand out for my keen care for details and simplicity, delivering your message without cluttering your clients' minds.

          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              My{" "}
              <RotatingText
                texts={["Journey", "Experience", "Passion"]}
                staggerDuration={.03}
                mainClassName="text-primary-glow"
                rotationalInterval={2500}
              />{" "}
              With Programming
            </h3>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                With 1+ years of experience in front-end development, I specialize in 
                creating modern, responsive web applications that not only look great but 
                also perform exceptionally well.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey in web development (and programming in general) started with a curiosity about how things work 
                on the internet. Today, I'm passionate about pushing the boundaries of what's 
                possible in web development, always staying up-to-date with the latest 
                technologies and best practices.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-muted/30 rounded-full text-sm font-medium text-muted-foreground border border-border/30 hover:border-primary/50 hover:text-primary transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-8 animate-slide-in-right">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="card-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 rounded-full bg-muted/20 border border-border/30">
                    <skill.icon className={`w-8 h-8 ${skill.gradient}`} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {skill.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;