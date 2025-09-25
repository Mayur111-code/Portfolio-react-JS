import React from "react";
import profile_img2 from "../../assets/profile_img2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-17">
        
        {/* Image - Top on mobile, Left on desktop */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-30"></div>
            <img 
              src={profile_img2} 
              alt="Mayur Borse - Frontend Developer"
              className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug">
            <span className="block">I'm Mayur Borse,</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I am a passionate <strong className="text-blue-300">Frontend Developer</strong> specializing in
            creating responsive, user-friendly web applications using modern technologies.
          </p>
          
          <div className="hero-action flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
            <AnchorLink 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base text-center"
              offset={50} 
              href="#contact"
            >
              Connect With Me
            </AnchorLink>

            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

