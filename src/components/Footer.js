import React from 'react';

const Footer = () => {
  return (
    <footer id = "footer" className="bg-sky-200 pt-8 pb-8">
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
          <p className="text-center text-gray-500 text-xs mt-8">&copy; 2023 Your Company Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
