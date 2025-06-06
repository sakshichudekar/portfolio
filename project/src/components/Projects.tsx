import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Cloud } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Skin Sage App",
      description: "A comprehensive skincare application built with modern full-stack technologies. Features user authentication, personalized skincare routines, and product recommendations.",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
      icon: Globe,
      github: "#",
      live: "#"
    },
    {
      title: "Recipe Sharing Platform",
      description: "A social platform for food enthusiasts to share and discover recipes. Includes advanced search functionality, user profiles, and real-time interactions.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Firebase", "Node.js", "CSS3"],
      category: "Web Development",
      icon: Database,
      github: "#",
      live: "#"
    },
    {
      title: "Weather App",
      description: "Native Android application providing real-time weather updates with beautiful UI/UX. Features location-based forecasts and weather alerts.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Kotlin", "Android Studio", "Retrofit", "Material Design"],
      category: "Mobile Development",
      icon: Smartphone,
      github: "#",
      live: "#"
    },
    {
      title: "College Automation System",
      description: "Salesforce-based automation system for college administration. Streamlines student records, course management, and administrative processes.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Salesforce", "Apex", "Visualforce", "Lightning"],
      category: "Enterprise Solution",
      icon: Cloud,
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my development projects across web, mobile, and enterprise solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                        <Icon className="h-3 w-3 mr-1" />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;