import React, { useState } from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "5b1dfc9c-282d-4055-a5df-c94597fc83fd");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus({ type: "success", message: "✅ Message Sent Successfully!" });
        event.target.reset();
      } else {
        setSubmitStatus({ type: "error", message: "❌ Failed: " + res.message });
        console.error(res);
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "⚠ Error: " + error.message });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: mail_icon,
      label: "Email",
      value: "mayurborse7440@mail.com",
      href: "mailto:mayurborse7440@mail.com",
    },
    {
      icon: call_icon,
      label: "Phone",
      value: "+91 7028507985",
      href: "tel:+917028507985",
    },
    {
      icon: location_icon,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "https://www.google.com/maps?q=Pune,+Maharashtra,+India",
    },
  ];

  return (
    <div id="contact" className="bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto  mt-17">
        
        {/* Title Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Contact Info */}
          <div className="contact-left">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 h-full">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Let's Talk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                I'm always excited to discuss new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a question
                or just want to say hi, my inbox is always open!
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <img 
                        src={detail.icon} 
                        alt={detail.label} 
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{detail.label}</p>
                      <a 
                        href={detail.href}
                        target={detail.label === "Location" ? "_blank" : "_self"}
                        rel={detail.label === "Location" ? "noopener noreferrer" : ""}
                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200"
                      >
                        {detail.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-blue-800 text-sm">
                  💡 <strong>Quick Response:</strong> I typically reply within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-right">
            <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>

              {/* Status Message */}
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === "success" 
                    ? "bg-green-100 text-green-800 border border-green-200" 
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Enter your name" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Enter your email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-gray-500 text-sm text-center mt-4">
                  * Required fields
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
              Whether you're looking to start a new project or improve an existing one, 
              I'm here to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:mayurborse7440@mail.com" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Email Me Directly
              </a>
              <a href="tel:+917028507985" className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;