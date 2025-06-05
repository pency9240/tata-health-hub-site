
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold">獭獭会员商店</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md text-lg leading-relaxed">
              专注健康商品的会员制购物平台，致力于为用户提供优质健康产品和贴心服务。
            </p>
            <p className="text-slate-400">
              © 2025 城市工场（广东）供应链管理有限公司. 保留所有权利.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">快捷链接</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">首页</a></li>
              <li><a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">功能特点</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">关于我们</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">联系信息</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="text-lg">客服热线: 86-186 6654 1235</li>
              <li className="text-lg">邮箱: panyansen@ilovetata.com</li>
              <li className="text-lg">地址: 广东省佛山市南海区牛梯路19号</li>
              <li className="text-lg">服务时间: 9:00-21:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
