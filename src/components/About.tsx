
import React from 'react';
import { Target, Eye, Users2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            tata会员商店致力于为用户提供优质健康商品，通过会员制服务模式，让健康生活更加便捷和实惠
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">我们的使命</h3>
            <p className="text-gray-600 leading-relaxed">
              让每个人都能轻松获取优质健康商品，推动健康生活方式的普及，成为用户信赖的健康购物伙伴
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">我们的愿景</h3>
            <p className="text-gray-600 leading-relaxed">
              成为中国领先的健康商品会员制购物平台，为用户创造更健康、更美好的生活体验
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">我们的服务</h3>
            <p className="text-gray-600 leading-relaxed">
              通过移动应用提供便捷的购物体验，精选健康商品，会员专享优惠，全程贴心服务
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">应用信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">应用名称</h4>
              <p className="text-green-100">tata会员商店</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">应用类型</h4>
              <p className="text-green-100">健康商品会员制购物平台</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">主要功能</h4>
              <p className="text-green-100">健康商品购买、会员服务、订单管理</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">服务对象</h4>
              <p className="text-green-100">注重健康生活的消费者</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
