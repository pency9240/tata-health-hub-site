
import React from 'react';
import { Shield, Truck, Award, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: '品质保障',
      description: '所有商品均经过严格质量检测，确保安全健康',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Truck,
      title: '快速配送',
      description: '全国范围内快速配送，新鲜直达您的家门口',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Award,
      title: '会员权益',
      description: '丰富的会员权益体系，越购买越优惠',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Smartphone,
      title: '移动优先',
      description: '专为移动设备优化的购物体验，随时随地轻松购买',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 tracking-tight">功能特点</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            我们致力于为用户提供最优质的健康商品购物体验
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className={`bg-gradient-to-br ${feature.gradient} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                <feature.icon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
