import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={ref} className={`text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-6xl">👩‍💻</div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Sakshi Chudekar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Passionate about <span className="text-purple-600 dark:text-purple-400 font-semibold">Full-Stack Development</span>, 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> Android Apps</span>, and 
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> Cloud Tech</span>
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Final-year Computer Engineering student with hands-on experience in modern web technologies, 
            mobile app development, and cloud platforms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
            <div className="flex gap-4 justify-center">
              <a
                href="https://linkedin.com/in/sakshi-chudekar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/sakshichudekar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-4 border-2 border-gray-600 text-gray-600 dark:text-gray-400 font-semibold rounded-lg hover:bg-gray-600 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce mx-auto block text-gray-400 hover:text-purple-600 transition-colors duration-200"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;