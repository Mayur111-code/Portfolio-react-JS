import React from "react";
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

// You can replace these with actual icons from your assets
const ServiceIcons = {
    1: "💻", // Web Development
    2: "📱", // Mobile App
    3: "🎨", // UI/UX Design
    4: "⚡", // Performance
    5: "🔧", // Maintenance
    6: "🚀"  // Deployment
};

const Services = () => {
    return (
        <div id="services" className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto  mt-17">
                
                {/* Title Section */}
                <div className="text-center mb-16 lg:mb-20">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        My Services
                    </h1>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                    {Services_Data.map((service, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                        >
                            {/* Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative p-8">
                                {/* Icon and Number */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-4xl">
                                        {ServiceIcons[service.s_no] || "✨"}
                                    </div>
                                    <div className="text-6xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                                        {service.s_no}
                                    </div>
                                </div>

                                {/* Service Name */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {service.s_name}
                                </h3>

                                {/* Service Description */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.s_desc}
                                </p>

                                {/* Read More Button */}
                                <div className="flex items-center gap-3 text-blue-600 font-semibold cursor-pointer group/btn hover:text-blue-700 transition-colors">
                                    <span>Discover More</span>
                                    <img 
                                        src={arrow_icon} 
                                        alt="Arrow icon" 
                                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                                    />
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 lg:mt-20">
                    <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Let's Build Something Amazing
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Have a project in mind? I'd love to hear about it and discuss how we can work together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                Start a Project
                            </button>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;