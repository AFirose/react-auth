import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Features</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover all the powerful features that make Shortly the best URL shortener on the web.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-primary-cyan w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Lightning Fast</h3>
            <p className="text-gray-600">
              Our URLs are generated in milliseconds, ensuring you never have to wait.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-primary-cyan w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Secure & Reliable</h3>
            <p className="text-gray-600">
              Your links are safe with us. We use enterprise-grade security measures.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-primary-cyan w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Detailed Analytics</h3>
            <p className="text-gray-600">
              Track clicks, locations, and devices for every shortened URL.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-primary-cyan w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Free Forever</h3>
            <p className="text-gray-600">
              No hidden fees. Our basic plan is completely free, forever.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-primary-cyan w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Links</h3>
            <p className="text-gray-600">
              Create branded, custom short links that represent your business.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-primary-cyan w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is always available to help you with any issues.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/register"
            className="bg-primary-cyan text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark-cyan transition text-lg"
          >
            Get Started For Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;