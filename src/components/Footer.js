import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Facebook
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Instagram
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Twitter
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Terms of Service
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
