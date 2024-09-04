import React from 'react';
import { FaGithub } from 'react-icons/fa';

const App: React.FC = () => {
  return (
    <div className="relative h-screen w-screen bg-black text-white flex flex-col justify-center items-start p-8 overflow-hidden">
      <div className="absolute right-4 top-4 md:right-8 md:top-8 transform transition-transform duration-300 ease-in-out hover:scale-150">
        <img src="/logo.png" alt="" className="w-48 md:w-72 lg:w-96 transition-transform duration-300 ease-in-out" />
      </div>

      <div className="relative z-10 space-y-8">
        <h1 className="text-6xl font-bold fade-in">
          👋 Hello, I'm <span className="text-blue-500">skrahs</span>.
        </h1>
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed fade-in">
          I am a web developer & web designer with over 1 year of experience. You can find all my projects on GitHub.
        </p>

        <div className="space-y-4 text-gray-400 text-lg fade-in">
          <p className="italic">
            <span className="border-b border-gray-500">I currently enjoy my life by</span>
          </p>
          <ul className="space-y-2">

            <li>
              <a href="https://www.obsmc.it" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-white hover:text-blue-500 transition-colors">
                <img src="minecraft-icon.png" alt=""/>
                <span>Working on <span className="text-blue-400">ObsMC</span> as a SrAdmin</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/Skrahs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-600 transition-colors">
                <FaGithub className="text-blue-400" />
                <span>Minecraft</span>
              </a>
            </li>

          </ul>
        </div>

        <div className="mt-auto mb-8">
          <a href="https://t.me/minecraftprotocol" target="_blank" rel="noopener noreferrer">
            <button className="relative inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-gray-600 text-white text-lg font-semibold rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-100 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <span className="absolute inset-0 rounded-full opacity-25 blur-xl bg-gradient-to-r from-blue-500 to-gray-600 animate-pulse"></span>
              <span className="relative z-10">GET IN <span className="text-blue-300">TOUCH!</span></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
