import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassMorphicCard from '../ui/GlassMorphicCard';
import { education } from '../../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Education" 
          subtitle="Academic background"
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <GlassMorphicCard className="h-full">
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                          {item.period}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.institution}
                      </h3>
                      
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-2 text-sm">
                        <GraduationCap className="h-4 w-4" />
                        <span>{item.degree}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </GlassMorphicCard>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-primary-500 z-10"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;