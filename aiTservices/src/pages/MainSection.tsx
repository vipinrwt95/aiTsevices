import React from "react";

const MainSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-28">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div data-aos="fade-right" className="lg:pr-16">
          <h3 className="text-md text-orange-500 font-semibold mb-4 uppercase tracking-widest">
            Innovate with Confidence
          </h3>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-8 leading-snug">
            Empowering Businesses to <br className="hidden lg:block" /> Build and Thrive
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            At <strong className="text-orange-500">a-iTservice</strong>, we combine innovation and quality to deliver
            tailored IT solutions that enhance your business efficiency and growth.
            Join us in transforming the way you innovate and succeed.
          </p>
          <button className="bg-orange-500 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" className="space-y-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to <strong className="text-orange-500">a-iTservice</strong>, where innovation meets excellence.
            We specialize in crafting bespoke IT solutions that empower businesses to unlock their full potential.
            Our commitment to excellence drives success for businesses of all sizes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <span className="text-yellow-500 text-3xl">★★★★★</span>
              <span className="text-xl text-gray-800 font-bold mt-2">4.9/5</span>
              <span className="text-sm text-gray-500 mt-1">Based on 100+ reviews</span>
            </div>
            <div className="border-l border-gray-300 h-12 hidden sm:block mx-auto"></div>
            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-3xl font-bold">500+</span>
              <span className="text-sm text-gray-500 mt-1">Projects Delivered</span>
            </div>
            <div className="border-l border-gray-300 h-12 hidden sm:block mx-auto"></div>
            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-3xl font-bold">10+ Years</span>
              <span className="text-sm text-gray-500 mt-1">In Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
