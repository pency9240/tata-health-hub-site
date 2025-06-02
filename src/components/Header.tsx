
import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">tata会员商店</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">首页</a>
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">功能特点</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">关于我们</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">联系我们</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
