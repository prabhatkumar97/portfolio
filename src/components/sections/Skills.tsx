import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassMorphicCard from '../ui/GlassMorphicCard';
import { skills } from '../../data';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getSkillColor = (skill: string) => {
    const colors: Record<string, string> = {
      'C++': 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
      'Java': 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800',
      'HTML': 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
      'CSS': 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800',
      'React JS': 'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800',
      'Node JS': 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
      'Git': 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
      'GitHub': 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-800',
      'PHP': 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800',
      'C': 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
    };
    
    return colors[skill] || 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-800';
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="My technical expertise"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <GlassMorphicCard key={index} delay={index * 0.1} className="h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                {skillCategory.category}
              </h3>
              
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skillCategory.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={item}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getSkillColor(skill)}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </GlassMorphicCard>
          ))}
        </div>
        
        <div className="mt-12">
          <GlassMorphicCard>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Coding Profiles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/50 dark:bg-black/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-md">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">LC</span>
                  </div>
                  <h4 className="ml-3 text-lg font-semibold text-gray-800 dark:text-white">LeetCode</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Solved 500+ problems
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                  Rating: 1796
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/50 dark:bg-black/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-md">
                    <span className="text-green-600 dark:text-green-400 font-bold">GFG</span>
                  </div>
                  <h4 className="ml-3 text-lg font-semibold text-gray-800 dark:text-white">GeeksforGeeks</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Solved 300+ problems
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                  Rating: 1830
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/50 dark:bg-black/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-md">
                    <span className="text-red-600 dark:text-red-400 font-bold">CC</span>
                  </div>
                  <h4 className="ml-3 text-lg font-semibold text-gray-800 dark:text-white">CodeChef</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Regular participant in contests
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                  Rating: 1300+
                </p>
              </motion.div>
            </div>
          </GlassMorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;