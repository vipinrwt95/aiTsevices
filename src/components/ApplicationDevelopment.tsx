import React from "react";
import { FaMobileAlt, FaCogs, FaCheckCircle, FaClipboardList, FaRocket, FaShieldAlt } from "react-icons/fa"; // Import necessary icons

const ApplicationDevelopment: React.FC = () => {
  return (
    <div className="wrapper bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Transforming Industries Through Agile Application Solutions
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Our approach goes beyond development—we become your partner in innovation. From concept to deployment, we align our expertise with your vision, delivering solutions that not only solve problems but create opportunities for growth and leadership in your industry.
        </p>
        <p className="text-gray-700 mb-6 text-center">
          In today's mobile-first world, staying ahead of the competition requires continuous innovation. Let us help you shape the future of your business with our industry-leading app development services. Ready to transform your industry? Let’s begin your journey!
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 text-center">Application Development Process</h2>
        <div className="flex flex-col items-center">
          {/* Start Step */}
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-lg">
              Start
            </div>
            <div className="w-20 h-1 bg-gray-700 mx-2"></div>
          </div>

          {/* Steps */}
          <div className="flex flex-col items-center">
            {[
              { title: "Step #1", description: "Define project goals, requirements, and scope.", icon: <FaClipboardList className="text-white text-4xl mb-2" /> },
              { title: "Step #2", description: "Create wireframes and design user interfaces.", icon: <FaMobileAlt className="text-white text-4xl mb-2" /> },
              { title: "Step #3", description: "Build the application based on designs.", icon: <FaCogs className="text-white text-4xl mb-2" /> },
              { title: "Step #4", description: "Conduct thorough testing to ensure quality.", icon: <FaCheckCircle className="text-white text-4xl mb-2" /> },
              { title: "Step #5", description: "Launch the application to the target environment.", icon: <FaRocket className="text-white text-4xl mb-2" /> },
              { title: "Step #6", description: "Provide ongoing support and updates.", icon: <FaShieldAlt className="text-white text-4xl mb-2" /> },
            ].map((step, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg w-24 h-20 flex flex-col items-center justify-center shadow-lg">
                  {step.icon}
                  <div className="font-bold text-sm text-center">{step.title}</div>
                  <div className="text-xs text-center">{step.description}</div>
                </div>
                {index < 5 && <div className="w-20 h-1 bg-gray-700 mx-2"></div>} {/* Line between steps */}
              </div>
            ))}
          </div>

          {/* End Step */}
          <div className="flex items-center mt-4">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-lg">
              End
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 text-center">What We Offer in App Development</h2>
        <p className="text-gray-700 mb-6 text-center">
          Our app development services include cross-platform solutions, native app development, and integration with existing systems. We leverage the latest technologies to deliver high-performance applications that meet your business goals.
        </p>
      </div>
    </div>
  );
};

export default ApplicationDevelopment;