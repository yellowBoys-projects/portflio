import React from "react";

/**
 * Enhanced article card with modern design and interactions
 * Replace image URLs and text as needed.
 */

const ArticleCard = ({ tag, date, title, excerpt, img, readTime }) => (
  <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
    {/* Image Container */}
    <div className="relative overflow-hidden">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Tag Badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-block text-xs font-semibold text-white bg-blue-600 rounded-full px-3 py-2 shadow-lg">
          {tag}
        </span>
      </div>
      
      {/* Read Time */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-xs font-medium text-gray-700 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {readTime}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Date */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {date}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {excerpt}
      </p>

      {/* Read More Link */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
          Read Article
          <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        
        {/* Share Button */}
        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </div>
    </div>
  </article>
);

export default function Articles() {
  const posts = [
    {
      tag: "Design Trends",
      date: "Apr 30, 2025",
      title: "5 Design Trends That Will Define 2024",
      excerpt: "Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve and create future-proof designs.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8d87d8e39e0f33c4b7a1f8b3be3c6b2f",
      readTime: "5 min read"
    },
    {
      tag: "Workflow",
      date: "Apr 27, 2025",
      title: "How to Streamline Your Design Workflow",
      excerpt: "Discover practical strategies to improve your design process, save time, and deliver quality work more efficiently while maintaining creative excellence.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=bbd8f3a9d7b6d4a4e1a3b2c6f0d5e6b7",
      readTime: "7 min read"
    },
    {
      tag: "UI/UX",
      date: "Apr 25, 2025",
      title: "The Psychology of User Experience Design",
      excerpt: "Learn how psychological principles can enhance your UX designs and create more engaging, intuitive digital experiences for your users.",
      img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7b6c8c8c8c8c8c8c8c8c8c8c8c8c8c8c",
      readTime: "6 min read"
    },
    {
      tag: "Branding",
      date: "Apr 22, 2025",
      title: "Building Consistent Brand Identities",
      excerpt: "A comprehensive guide to creating cohesive brand systems that resonate with your audience and stand the test of time.",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c",
      readTime: "8 min read"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-4 h-0.5 bg-blue-600"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Blog & Insights</span>
            <div className="w-4 h-0.5 bg-blue-600"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
            Design <span className="text-blue-600">Insights</span> & Ideas
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From design trends to creative processes, these articles offer insights to help you elevate your craft, 
            solve challenges, and spark new ideas for your projects.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
          {posts.map((post, index) => (
            <ArticleCard key={index} {...post} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Want more design insights?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter and get the latest design tips, trends, and resources delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>

        {/* View All Articles Link */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-300 group">
            View All Articles
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}