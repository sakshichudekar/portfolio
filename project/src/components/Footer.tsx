import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sakshichudekar',
      label: 'GitHub',
      color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sakshi-chudekar',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:sakshichudekar1094@gmail.com',
      label: 'Email',
      color: 'hover:text-purple-600 dark:hover:text-purple-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Sakshi Chudekar
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-md">
                Passionate Computer Engineering student specializing in Full-Stack Development, 
                Android Apps, and Cloud Technologies. Always excited to work on innovative projects 
                and learn new technologies.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors duration-200`}
                      aria-label={social.label}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Email:</span><br />
                  <a 
                    href="mailto:sakshichudekar1094@gmail.com"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    sakshichudekar1094@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Phone:</span><br />
                  <a 
                    href="tel:+917397922308"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    +91 7397922308
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Location:</span><br />
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4 sm:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>by Sakshi Chudekar</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;