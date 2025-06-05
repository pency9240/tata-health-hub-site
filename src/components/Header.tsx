
import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-lg">
              <Leaf className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">挞挞会员商店</span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium tracking-wide">首页</a>
            <a href="#features" className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium tracking-wide">功能特点</a>
            <a href="#about" className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium tracking-wide">关于我们</a>
            <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium tracking-wide">联系我们</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
