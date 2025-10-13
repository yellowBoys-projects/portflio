import React from "react";

export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        {/* Content Section */}
        <div className="lg:col-span-7">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-4 h-0.5 bg-blue-600"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">About Me</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-tight">
              Creative <span className="text-blue-600">Digital</span> Designer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
              Hi, I'm <span className="font-semibold text-gray-900">Duncan</span> — a passionate digital designer and Framer developer dedicated to crafting meaningful and impactful digital experiences that drive results.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mb-14">
            <div className="text-center lg:text-left group">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">12+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center lg:text-left group">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">270+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Projects Done</div>
            </div>
            <div className="text-center lg:text-left group">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">50+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Happy Clients</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="group">
              <div className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Let's Talk</div>
              <div className="text-lg text-gray-600 group-hover:text-blue-600 transition-colors duration-200 font-medium">+1 (555) 123-4567</div>
            </div>
            <div className="group">
              <div className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Email Me</div>
              <div className="text-lg text-gray-600 group-hover:text-blue-600 transition-colors duration-200 font-medium">designer@example.com</div>
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex items-center gap-4">
              <button className="p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </button>
              <button className="p-4 bg-white border border-gray-200 rounded-xl hover:border-pink-600 hover:bg-pink-50 hover:scale-105 transition-all duration-200 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </button>
              <button className="p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </button>
            </div>
            
            <button className="px-10 py-5 bg-gray-900 text-white font-semibold text-sm tracking-widest uppercase rounded-xl hover:bg-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
              Explore My Work
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-100 to-gray-200 rounded-3xl -z-10"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://framerusercontent.com/images/IUYreEo8ON7qCLgK2tgDOW0xoI.jpg"
                alt="Duncan Robert - Digital Designer"
                className="w-full h-auto max-w-md object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Available</div>
                  <div className="text-sm text-gray-500">For new projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}