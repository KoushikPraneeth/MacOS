"use client";
    import React, { useState } from 'react';
    import MenuBar from '../components/MenuBar';
    import Dock from '../components/Dock';
    import Window from '../components/Window';
    import { AnimatePresence } from 'framer-motion';

    export default function Home() {
      const [windows, setWindows] = useState([]);

      const openWindow = (content) => {
        setWindows((prevWindows) => [...prevWindows, { id: Date.now(), content }]);
      };

      const closeWindow = (id) => {
        setWindows((prevWindows) => prevWindows.filter((window) => window.id !== id));
      };

      return (
        <div className="relative h-screen w-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
          <MenuBar />
          <div className="absolute top-8 left-0 w-full h-[calc(100vh-8px)] p-4">
            <AnimatePresence>
              {windows.map((window) => (
                <Window key={window.id} title="Test Window" onClose={() => closeWindow(window.id)}>
                  {window.content}
                </Window>
              ))}
            </AnimatePresence>
          </div>
          <Dock />
          <button
            className="fixed top-1/2 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => openWindow(
              <p>
                This is a test window. You can drag it around, resize it, minimize, maximize, and close it.
              </p>
            )}
          >
            Open Test Window
          </button>
        </div>
      );
    }
