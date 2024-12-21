import React from 'react';

    const MenuBar = () => {
      return (
        <div className="fixed top-0 left-0 w-full h-8 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 flex items-center px-4 z-50">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Apple
          </span>
          <div className="flex-grow"></div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Date & Time
            </span>
          </div>
        </div>
      );
    };

    export default MenuBar;
