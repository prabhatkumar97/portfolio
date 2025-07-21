import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassMorphicCard from '../ui/GlassMorphicCard';

const experiences = [
  {
    title: "full Stack Python Developer Intern",
    company: "Novem Controls Pvt Ltd. mohali, chandigarh",
    period: "jan 2025 - jun 2025",
    location: "Remote",
    description: [
     "Developed Django full-stack web apps using MVT. Built dynamic front-ends with HTML, CSS, Bootstrap,",
     "and JavaScript. Implemented user authentication, forms, and CRUD. Deployed projects locally and practiced security."
    ]
  },
  {
    title: "Python Programming Intern",
    company: "ThinkNEXT Technologies Pvt Ltd. mohali, chandigarh",
    period: "July 2023 - August 2023",
    location: "Remote",
    description: [
"Gained hands-on experience with Python fundamentals, including data types, control structures, functions, and modules.",
"Completed mini-projects and assignments focused on problem-solving and logical thinking.",
"Developed basic command-line applications and scripts using Python."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey"
        />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassMorphicCard className="transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                        {exp.company}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 mt-2 mr-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassMorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;