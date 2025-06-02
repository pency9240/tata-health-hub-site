
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">tata会员商店</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              专注健康商品的会员制购物平台，致力于为用户提供优质健康产品和贴心服务。
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 tata健康科技有限公司. 保留所有权利.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快捷链接</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">首页</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-green-400 transition-colors">功能特点</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">关于我们</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系信息</h3>
            <ul className="space-y-2 text-gray-300">
              <li>客服热线: 400-888-9999</li>
              <li>邮箱: service@tatastore.com</li>
              <li>地址: 北京市朝阳区健康大厦</li>
              <li>服务时间: 9:00-21:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            本网站为tata会员商店官方网站，用于微信支付接口申请及用户了解应用信息
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
