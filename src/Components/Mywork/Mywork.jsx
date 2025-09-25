import React, { useState } from "react";
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedWorks = showAll ? mywork_data : mywork_data.slice(0, 6);

    return (
        <div id="work" className="bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto  mt-17">
                
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        My Portfolio
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A collection of my recent projects and creative work
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                    {displayedWorks.map((work, index) => (
                        <div key={index} className="group relative">
                            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img 
                                    src={work.w_img} 
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Project Info */}
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {work.w_name || `Project ${index + 1}`}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {work.w_desc || 'Web Development Project'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                {mywork_data.length > 6 && (
                    <div className="text-center">
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            {showAll ? 'Show Less' : 'Show More'}
                            <img 
                                src={arrow_icon} 
                                alt="Arrow icon" 
                                className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </div>
                )}

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{mywork_data.length}+</div>
                        <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                        <div className="text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                        <div className="text-gray-600">Years Experience</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mywork;