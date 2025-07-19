import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { socialLinks } from '../../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail className="h-5 w-5" />;
      case 'Linkedin': return <Linkedin className="h-5 w-5" />;
      case 'Github': return <Github className="h-5 w-5" />;
      case 'Phone': return <Phone className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Prabhat Kumar
            </h3>
            <p className="text-gray-300 mb-4">
              Software Developer building innovative web applications with a focus on user experience and performance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:prabhatkrm8@gmail.com" className="hover:text-primary-400 transition-colors">
                  prabhatkrm8@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+919771726891" className="hover:text-primary-400 transition-colors">
                  +91 9771726891
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Linkedin className="h-5 w-5 mr-2" />
                <a 
                  href="https://www.linkedin.com/in/prabhatkumar97" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Github className="h-5 w-5 mr-2" />
                <a 
                  href="https://github.com/prabhatkumar97" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Prabhat kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;