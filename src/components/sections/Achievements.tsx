import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import GlassMorphicCard from "../ui/GlassMorphicCard";
import SectionHeading from "../ui/SectionHeading";
import { achievements } from "../../data";
import codingAnimation from "../../assets/coding-animation.json";

const Achievements: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certification & Achievements"
          subtitle="Milestones and recognitions"
        />

        {/* Competitive Programming Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Competitive Programming & Hackathons
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              My journey in tech has been marked by active participation in
              competitive programming and hackathons. I've honed my
              problem-solving skills through platforms like LeetCode, CodeChef,
              and GeeksforGeeks, while building innovative solutions in team
              hackathons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-full md:w-4/5 max-w-sm">
              <Lottie animationData={codingAnimation} loop />
            </div>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <GlassMorphicCard
              key={achievement.id}
              delay={index * 0.1}
              className="h-full relative overflow-hidden group"
            >
              <div className="h-full flex flex-col">
                <div className="mb-4 h-12 flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      {achievement.id}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">
                  {achievement.description}
                </p>

                {/* Certificate Preview */}
                {achievement.image && (
                  <a
                    href={achievement.link} // Use the link property
                    target="_blank" // Open the link in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="relative w-full h-40 mt-auto rounded-md overflow-hidden cursor-pointer"
                  >
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105 rounded-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-sm font-medium">
                        View More
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </GlassMorphicCard>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full px-4">
            <img
              src={selectedImage}
              alt="Enlarged certificate"
              className="rounded-lg shadow-xl border border-white"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
