import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-white text-lg font-bold mb-4">Company Name</h5>
            <p>
              © 2024 Company Name. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-white text-lg font-bold mb-4">Contact Us</h5>
            <ul>
              <li>Email: contact@company.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Company St, City, Country</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-white text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-white">
                Twitter
              </a>
              <a href="https://facebook.com" className="hover:text-white">
                Facebook
              </a>
              <a href="https://linkedin.com" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
