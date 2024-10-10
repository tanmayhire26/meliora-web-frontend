import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.5 }, // Staggered animation
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Meliora</h1>
        <h3 className="text-xl">Revolutionizing software development - one PR at a time</h3>
      </div>
      
      {/* Container for all items */}
      <div className="flex flex-col items-center">
        {/* Item 1 */}
        <div className="flex items-center mb-4">
          <motion.img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" // GitHub icon URL
            alt="GitHub Logo"
            className="w-24 h-24 rounded-full shadow-lg transition-transform transform hover:scale-105"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={0}
          />
          <motion.h1
            className="text-4xl font-bold ml-4 text-gray-800 shadow-md p-2 rounded-lg bg-white"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={1}
          >
            Smart GitHub
          </motion.h1>
        </div>

        {/* Item 2 */}
        <div className="flex items-center mb-4">
          <motion.img
            src="https://digitiz.fr/wp-content/uploads/2023/08/Google-Gemini.png" // GeminiAI logo URL
            alt="GeminiAI Logo"
            className="w-24 h-24 rounded-full shadow-lg transition-transform transform hover:scale-105"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={2}
          />
          <motion.h2
            className="text-2xl ml-4 text-gray-800 shadow-md p-2 rounded-lg bg-white"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={3}
          >
            LLM Analysis
          </motion.h2>
        </div>

        {/* Item 3 */}
        <div className="flex items-center mb-4">
          <motion.img
            src="https://static-00.iconduck.com/assets.00/web-developer-illustration-1004x1024-wcqgbag3.png" // Developer coding image URL
            alt="Developer Icon"
            className="w-24 h-24 rounded-full shadow-lg transition-transform transform hover:scale-105"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={4}
          />
          <motion.h2
            className="text-2xl ml-4 text-gray-800 shadow-md p-2 rounded-lg bg-white"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={5}
          >
            Smart Developer
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
