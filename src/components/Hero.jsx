import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4">
            DUNCAN ROBERT
          </h1>
          <div className="h-1 w-20 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-light text-gray-600 tracking-wide">
            DIGITAL DESIGNER
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I'm a US-based digital designer and<br />
            Framer developer
          </p>
        </div>

        {/* Optional CTA Button */}
        <div className="mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-none text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 uppercase">
            View Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;