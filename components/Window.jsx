import React, { useState } from 'react';
    import { Rnd } from 'react-rnd';
    import { motion } from 'framer-motion';

    const Window = ({ title, children, onClose }) => {
      const [isMinimized, setIsMinimized] = useState(false);
      const [isMaximized, setIsMaximized] = useState(false);
      const [windowSize, setWindowSize] = useState({
        width: 600,
        height: 400,
        x: 20,
        y: 20,
      });

      const handleMinimize = () => {
        setIsMinimized(true);
      };

      const handleMaximize = () => {
        setIsMaximized(!isMaximized);
        setWindowSize(prev => ({
          ...prev,
          width: isMaximized ? 600 : '100%',
          height: isMaximized ? 400 : '100%',
          x: isMaximized ? 20 : 0,
          y: isMaximized ? 20 : 0,
        }));
      };

      const handleClose = () => {
        onClose();
      };

      if (isMinimized) {
        return null;
      }

      return (
        <Rnd
          default={windowSize}
          bounds="parent"
          onResizeStop={(e, direction, ref, delta, position) => {
            setWindowSize({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position,
            });
          }}
          onDragStop={(e, d) => {
            setWindowSize(prev => ({ ...prev, x: d.x, y: d.y }));
          }}
          disableDragging={isMaximized}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 shadow-lg rounded-md flex flex-col overflow-hidden"
            style={{
              width: windowSize.width,
              height: windowSize.height,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
              <div className="flex items-center space-x-2">
                <button
                  className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200"
                  onClick={handleMinimize}
                />
                <button
                  className={`w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 ${isMaximized ? 'opacity-50' : ''}`}
                  onClick={handleMaximize}
                  disabled={isMaximized}
                />
                <button
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200"
                  onClick={handleClose}
                />
              </div>
            </div>
            <div className="p-4 overflow-auto">
              {children}
            </div>
          </motion.div>
        </Rnd>
      );
    };

    export default Window;
