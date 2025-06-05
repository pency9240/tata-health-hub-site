
import React from 'react';
import { Target, Eye, Users2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 tracking-tight">关于我们</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            獭獭会员商店致力于为用户提供优质健康商品，通过会员制服务模式，让健康生活更加便捷和实惠
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">我们的使命</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              让每个人都能轻松获取优质健康商品，推动健康生活方式的普及，成为用户信赖的健康购物伙伴
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">我们的愿景</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              成为中国领先的健康商品会员制购物平台，为用户创造更健康、更美好的生活体验
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Users2 className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">我们的服务</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              通过移动应用提供便捷的购物体验，精选健康商品，会员专享优惠，全程贴心服务
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-8">应用信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h4 className="text-2xl font-semibold mb-4">应用名称</h4>
              <p className="text-slate-200 text-lg">獭獭会员商店</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">应用类型</h4>
              <p className="text-slate-200 text-lg">健康商品会员制购物平台</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">主要功能</h4>
              <p className="text-slate-200 text-lg">健康商品购买、会员服务、订单管理</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">服务对象</h4>
              <p className="text-slate-200 text-lg">注重健康生活的消费者</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
