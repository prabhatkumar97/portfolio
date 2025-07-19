import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Calendar, User } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassMorphicCard from '../ui/GlassMorphicCard';

const Blog: React.FC = () => {
    const blogPosts = [
      {
        id: 1,
        title: "Tech Education Platform",
        description: "A comprehensive platform providing study resources, career guidance, and technical content for students.",
        link: "https://Geeksforcampus.in",
        date: "2024",
        author: "Prabhat Kumar",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 2,
        title: "Understanding React Hooks",
        description: "An in-depth article explaining the usage of React Hooks for cleaner and functional component architecture.",
        link: "https://yourblog.com/react-hooks",
        date: "2023",
        author: "Prabhat Kumar",
        image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
      },
      {
        id: 3,
        title: "Demystifying AWS for Beginners",
        description: "A beginner-friendly guide to understanding the core services of AWS and how to deploy cloud applications.",
        link: "https://yourblog.com/aws-beginners",
        date: "2023",
        author: "Prabhat Kumar",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ];
    

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-dark-300 to-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Blog & Technical Writing" 
          subtitle="Sharing knowledge and experiences"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassMorphicCard className="h-full group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </GlassMorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;