import React from 'react';
    import { motion } from 'framer-motion';

    const Dock = () => {
      const dockItems = [
        { id: 'finder', icon: '📁', name: 'Finder' },
        { id: 'launchpad', icon: '🚀', name: 'Launchpad' },
        { id: 'safari', icon: '🌐', name: 'Safari' },
        { id: 'mail', icon: '✉️', name: 'Mail' },
        { id: 'notes', icon: '📝', name: 'Notes' },
        { id: 'calendar', icon: '📅', name: 'Calendar' },
        { id: 'settings', icon: '⚙️', name: 'Settings' },
        { id: 'trash', icon: '🗑️', name: 'Trash' },
      ];

      return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 backdrop-blur-md rounded-xl shadow-lg p-2 flex space-x-4 z-50">
          {dockItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs text-gray-700 dark:text-gray-300 mt-1">{item.name}</span>
            </motion.div>
          ))}
        </div>
      );
    };

    export default Dock;
