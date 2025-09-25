import React from "react";
import profile_img1 from "../../assets/profile_img1.png";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React JS", level: 80 },
    { name: "Next JS", level: 70 },
  ];

  const achievements = [
    { number: "10+", label: "Years Experience" },
    { number: "90+", label: "Projects Done" },
    { number: "50+", label: "Happy Clients" },
  ];

  return (
    <div id="about" className="about bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto  mt-17">
        
        {/* Title Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            About Me
          </h1>
          
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-20">
          
          {/* Image */}
          <div className="w-full lg:w-2/5 max-w-xs lg:max-w-md">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-20"></div>
              <img 
                src={profile_img1} 
                alt="Mayur Borse"
                className="relative w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5">
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 text-center lg:text-left">
              I'm <strong className="text-blue-600">Mayur Borse</strong>, a passionate Frontend Developer 
              dedicated to creating clean, responsive, and user-friendly websites. 
              I transform ideas into visually appealing digital experiences using 
              modern web technologies.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 font-medium text-sm lg:text-base">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 font-semibold text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;