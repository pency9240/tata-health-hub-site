
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 tracking-tight">联系我们</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            如有任何问题或建议，欢迎随时与我们联系
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">邮箱地址</h3>
            <p className="text-slate-600 text-lg">panyansen@ilovetata.com</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Phone className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">客服电话</h3>
            <p className="text-slate-600 text-lg">86-186 6654 1235</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">公司地址</h3>
            <p className="text-slate-600 text-lg">广东省佛山市南海区牛梯路19号</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">服务时间</h3>
            <p className="text-slate-600 text-lg">周一至周日 9:00-21:00</p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-5xl mx-auto border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">企业信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">公司名称</h4>
              <p className="text-slate-600 mb-6 text-lg">城市工场（广东）供应链管理有限公司</p>
              
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">业务范围</h4>
              <p className="text-slate-600 mb-6 text-lg">健康商品销售、会员服务、移动电商平台运营</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">成立时间</h4>
              <p className="text-slate-600 mb-6 text-lg">2024年</p>
              
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">服务理念</h4>
              <p className="text-slate-600 mb-6 text-lg">以用户健康为中心，提供优质商品和贴心服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
