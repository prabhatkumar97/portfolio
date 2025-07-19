import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Mail, Github, Linkedin, Download } from "lucide-react";
import { Link } from "react-scroll";
import { personalInfo, socialLinks } from "../../data";

const Hero: React.FC = () => {
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Mail":
        return <Mail className="h-5 w-5" />;
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "Github":
        return <Github className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 overflow-hidden py-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-sm bg-white/30 dark:bg-dark-200/30 rounded-full p-1 px-4 mb-4 border border-white/20 dark:border-white/10"
          >
            <span className="text-gray-800 dark:text-gray-200">
              Hello, I'm a Software Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-14"
          >
            <span className="text-primary-600 dark:text-primary-400">
              I'm a{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Problem Solver",
                2000,
                "Code Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary-600 dark:text-secondary-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex space-x-4 mb-8"
          >
            {socialLinks
              .filter((link) =>
                ["Mail", "Linkedin", "Github"].includes(link.icon)
              )
              .map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/20 dark:bg-dark-200/20 backdrop-blur-sm border border-white/10 hover:bg-primary-500 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-200 transform hover:scale-110"
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              Contact Me
            </Link>

            <a
              href={personalInfo.resumeLink}
              className="btn bg-white dark:bg-dark-200 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-200 dark:border-dark-100 transform hover:scale-105"
              download
            >
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="group cursor-pointer relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <ArrowDown className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-bounce relative" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
