
import React from 'react';
import { Shield, Truck, Award, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: '品质保障',
      description: '所有商品均经过严格质量检测，确保安全健康',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Truck,
      title: '快速配送',
      description: '全国范围内快速配送，新鲜直达您的家门口',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Award,
      title: '会员权益',
      description: '丰富的会员权益体系，越购买越优惠',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Smartphone,
      title: '移动优先',
      description: '专为移动设备优化的购物体验，随时随地轻松购买',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">功能特点</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们致力于为用户提供最优质的健康商品购物体验
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`${feature.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-10 w-10 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
