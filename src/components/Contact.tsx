
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            如有任何问题或建议，欢迎随时与我们联系
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">邮箱地址</h3>
            <p className="text-gray-600">panyansen@ilovetata.com</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">客服电话</h3>
            <p className="text-gray-600">86-186 6654 1235</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">公司地址</h3>
            <p className="text-gray-600">广东省佛山市南海区牛梯路19号</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">服务时间</h3>
            <p className="text-gray-600">周一至周日 9:00-21:00</p>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">企业信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">公司名称</h4>
              <p className="text-gray-600 mb-4">城市工场（广东）供应链管理有限公司</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">业务范围</h4>
              <p className="text-gray-600 mb-4">健康商品销售、会员服务、移动电商平台运营</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">成立时间</h4>
              <p className="text-gray-600 mb-4">2024年</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">服务理念</h4>
              <p className="text-gray-600 mb-4">以用户健康为中心，提供优质商品和贴心服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
