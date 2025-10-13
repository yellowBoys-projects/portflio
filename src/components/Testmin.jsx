import React from "react";

const TestimonialCard = ({ children, author, title, avatar, variant }) => {
  const base = "rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl";
  
  if (variant === "dark") {
    return (
      <div className={`${base} bg-gradient-to-br from-gray-900 to-black text-white shadow-xl`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-300">Client Satisfaction</div>
          </div>
        </div>
        <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">98%</div>
        <div className="text-lg text-gray-300">Based on 50+ happy clients worldwide</div>
      </div>
    );
  }
  
  if (variant === "purple") {
    return (
      <div className={`${base} bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-xl`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-purple-100">Revenue Growth</div>
          </div>
        </div>
        <div className="text-6xl font-bold mb-2">200%</div>
        <div className="text-lg text-purple-100">Average client revenue increase</div>
      </div>
    );
  }
  
  return (
    <div className={`${base} bg-white border border-gray-100 shadow-lg hover:border-gray-200`}>
      <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .587l3.668 7.431L23 9.748l-5.5 5.356L18.335 24 12 19.897 5.665 24 7.5 15.104 2 9.748l7.332-1.73L12 .587z"/>
            </svg>
          ))}
        </div>
      </div>
      
      <p className="text-lg text-gray-700 mb-8 leading-relaxed italic">"{children}"</p>
      
      <div className="flex items-center gap-4">
        <img 
          src={avatar} 
          alt={author} 
          className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md" 
        />
        <div>
          <div className="font-bold text-gray-900 text-lg">{author}</div>
          <div className="text-sm text-gray-500 font-medium">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-4 h-0.5 bg-blue-600"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Testimonials</span>
            <div className="w-4 h-0.5 bg-blue-600"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
            Client <span className="text-blue-600">Success</span> Stories
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here's what my clients have shared about their experiences working with me. Their trust and satisfaction 
            motivate me to continue delivering designs that make an impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            author="John Harris"
            title="Marketing Director"
            avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=c2e6d0f7e6b2d7b7a9f3a6fcd2a8aa4b"
          >
            Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!
          </TestimonialCard>

          <TestimonialCard
            author="Michael Lee"
            title="Product Manager"
            avatar="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a8ed1b2f2e6bfa0a9f0d6b3b1d1b6b3"
          >
            He took the time to understand our goals and delivered a design that resonated perfectly with our audience.
          </TestimonialCard>

          <TestimonialCard variant="dark" />

          <TestimonialCard variant="purple" />

          <TestimonialCard
            author="Sarah Johnson"
            title="CEO, TechStart Inc"
            avatar="https://images.unsplash.com/photo-1531123414780-fc9fb1ce5b8a?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7f0dfc049d4e3b3b7a6f6d9e0f3b8a6e"
          >
            His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.
          </TestimonialCard>

          <TestimonialCard
            author="Laura Bennett"
            title="Small Business Owner"
            avatar="https://images.unsplash.com/photo-1545996124-1b6c9e3b5f37?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b4a3a7ea7d3f3e2c4d4a7b3a8c6d5f1"
          >
            As a small business owner, I appreciated how stress-free Duncan made the process. The results speak for themselves!
          </TestimonialCard>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-lg">Ready to start your project?</div>
              <div className="text-gray-600">Let's create something amazing together</div>
            </div>
            <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}