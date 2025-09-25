import React from "react";
import logomayur from '../../assets/logomayur.svg';
import user_icon from'../../assets/user_icon.svg';

// Import social icons (you'll need to add these to your assets)
// Alternatively, you can use react-icons package: npm install react-icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id="contact" className="footer bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="footer-top max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8">
                    {/* Left Section */}
                    <div className="footer-top-left flex flex-col items-center lg:items-start text-center lg:text-left max-w-md">
                        <img 
                            src={logomayur} 
                            className="w-24 h-24 mb-4 object-contain" 
                            alt="Mayur Borse Logo" 
                        />
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                            Crafting modern and responsive web experiences with passion and precision.
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                                <FaGithub size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Section - Email Subscription */}
                    <div className="footer-top-right flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
                        <p className="text-gray-300 text-sm font-medium">Stay updated with my latest projects</p>
                        <div className="footer-email-input relative w-full max-w-md lg:max-w-xs">
                            <img 
                                src={user_icon} 
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                                alt="Email icon" 
                            />
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                        <button className="footer-subscribe bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 w-full max-w-md lg:max-w-xs text-center shadow-lg hover:shadow-xl">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Divider */}
            <hr className="border-gray-700 my-6 max-w-7xl mx-auto" />
            
            {/* Bottom Section */}
            <div className="footer-bottom max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="footer-bottom-left text-gray-400 text-sm text-center sm:text-left">
                        &#169; 2025 Mayur Borse. All rights reserved.
                    </p>
                    
                    <div className="footer-bottom-right flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline">
                            Terms of Services
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline">
                            Connect with me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;