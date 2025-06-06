import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      role: "Web Developer Intern",
      company: "EY GDS AICTE",
      duration: "December 2024 - April 2025",
      location: "Remote",
      type: "Internship",
      description: "Developing a comprehensive note-sharing application using Django framework. Responsible for backend database handling, user authentication, and implementing responsive frontend designs.",
      highlights: [
        "Built scalable web applications using Django and Python",
        "Implemented secure user authentication and authorization",
        "Designed and optimized database schemas for performance",
        "Collaborated with cross-functional teams in agile environment"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "Android Developer Intern",
      company: "Pro Azure",
      duration: "June 2022 - August 2022",
      location: "Hybrid",
      type: "Internship",
      description: "Focused on native Android app development using modern architecture patterns. Gained hands-on experience with MVVM architecture and Firebase integration for real-time data synchronization.",
      highlights: [
        "Developed native Android applications using Java and Kotlin",
        "Implemented MVVM architecture for maintainable code",
        "Integrated Firebase for real-time database and authentication",
        "Collaborated on UI/UX design improvements and performance optimization"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey through internships and professional development in the tech industry
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color}`} />

                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-lg mr-4`}>
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;