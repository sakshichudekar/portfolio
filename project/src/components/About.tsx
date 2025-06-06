import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      degree: "Bachelor of Engineering (Computer Engineering)",
      institution: "Trinity College of Engineering",
      year: "2025",
      status: "Final Year"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "JSPM's College",
      year: "2023",
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "CBT Sadhana Kanya Vidyalay",
      year: "2020",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know more about my journey, education, and passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Bio */}
            <div className="space-y-6">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center">
                <div className="text-8xl">🚀</div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hello! I'm Sakshi
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a passionate final-year Computer Engineering student with a strong foundation in 
                  full-stack development, mobile app creation, and cloud technologies. My journey in 
                  tech started with curiosity and has evolved into a deep love for creating innovative 
                  solutions that make a difference.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I enjoy tackling complex problems, learning new technologies, and contributing to 
                  projects that have real-world impact. When I'm not coding, you'll find me organizing 
                  tech events, participating in coding competitions, or exploring the latest trends in 
                  software development.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center lg:text-left text-gray-900 dark:text-white mb-8">
                Educational Journey
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-purple-200 dark:border-purple-800 last:border-l-0 last:pb-0">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-3 w-3 text-white" />
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                          {edu.year} • {edu.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;