
import React from 'react';
import { ShoppingBag, Users, Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-slate-50/50"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-100/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-emerald-500 mr-3" />
            <span className="text-emerald-600 font-semibold text-lg tracking-wide">精选健康生活</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent">
              獭獭会员商店
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 mb-6 font-light tracking-wide">
            健康生活，精选好物
          </p>
          <p className="text-lg text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            专注健康商品的会员制购物平台，为您精心挑选优质健康产品，享受会员专属优惠与服务
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100/50">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">健康优选</h3>
              <p className="text-slate-600 leading-relaxed">严格筛选每一款健康商品，只为您提供最优质的产品</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100/50">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">会员专享</h3>
              <p className="text-slate-600 leading-relaxed">会员制服务模式，享受专属价格和贴心服务</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100/50">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <ShoppingBag className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">便捷购物</h3>
              <p className="text-slate-600 leading-relaxed">简单易用的购物体验，随时随地享受健康生活</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
