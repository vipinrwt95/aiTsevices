import React from "react";

const MainSection: React.FC = () => {
    return (
        <section className="bg-white py-7 px-4 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div data-aos="fade-right" className="lg:pr-10">
                    <h3 className="text-lg text-blue-500 font-semibold mb-3 tracking-wide">
                        Empowering Business Futures
                    </h3>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-8 leading-tight">
                        Driving Digital Solutions to <br className="hidden lg:block" /> Elevate Your Business Future
                    </h1>
                    <button className="bg-orange-500 text-white text-lg font-medium py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300">
                        Get Started
                    </button>
                </div>

                {/* Right Content */}
                <div data-aos="fade-left" className="text-gray-700">
                    <p className="mb-8 text-lg leading-relaxed">
                        Welcome to <strong>SUPRIX SOLUTION</strong>, an information technology hub where innovation and quality
                        collide. Our specialty is creating unique IT solutions that boost your company's productivity.
                    </p>
                    <div className="flex items-center space-x-6">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
                                <span className="text-gray-800 text-xl font-bold">4.9/5</span>
                            </div>
                            <span className="text-sm text-gray-500">Based on 100+ reviews</span>
                        </div>
                        <div className="border-l border-gray-300 h-16"></div>
                        <div>
                            <span className="text-gray-900 text-2xl font-bold block">500+</span>
                            <span className="text-sm text-gray-500">Projects Delivered</span>
                        </div>
                        <div>
                            <span className="text-gray-900 text-2xl font-bold block">10+ Years</span>
                            <span className="text-sm text-gray-500">In Business</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
