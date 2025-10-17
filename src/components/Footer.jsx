import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">

        {/* Brand Section */}
        <div className="flex flex-col gap-6 lg:w-1/4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white text-lg">
              DS
            </div>
            <span className="text-2xl font-bold">Duncan Shen</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Digital designer and freelancer crafting unique websites and impactful designs.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Available for new projects</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6 lg:w-1/6">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {['About', 'Work', 'Services', 'Testimonials', 'Blog'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6 lg:w-1/6">
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-3">
            {['UI/UX Design', 'Web Design', 'Branding', 'Framer Development', 'Design Systems'].map((service) => (
              <li key={service}>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 lg:w-1/4">
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-400">Email</div>
              <div className="font-medium hover:text-blue-400 transition-colors duration-200">designer@example.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-400">Call Today</div>
              <div className="font-medium hover:text-green-400 transition-colors duration-200">+1 (555) 123-4567</div>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-400">Location</div>
              <div className="font-medium hover:text-purple-400 transition-colors duration-200">San Francisco, CA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">© {currentYear} Duncan Shen. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          {/* Example Social Icons */}
          {['Twitter','LinkedIn','Dribbble'].map((social) => (
            <a key={social} href="#" className="w-10 h-10 px-2 mx-3 w-fit  flex items-center justify-center rounded-xl bg-gray-800 hover:bg-blue-600 hover:scale-110 transition-transform duration-300">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
