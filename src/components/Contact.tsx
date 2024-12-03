import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonText("Sending...");

    const serviceID = "default_service";
    const templateID = "template_k0b528b";

    emailjs
      .sendForm(
        serviceID,
        templateID,
        event.target as HTMLFormElement,
        "ArJufMTsRpLvi9kQ8" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setButtonText("Send Message");
          alert("Message Sent Successfully!");
          (event.target as HTMLFormElement).reset(); // Reset the form after success
        },
        (err) => {
          setButtonText("Send Message");
          alert(`Failed to send message. Error: ${JSON.stringify(err)}`);
        }
      );
  };

  return (
    <section id="contact" className="pt-20 mt-8 py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-[#463f3f] dark:text-white mb-8">
          Feel free to message</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} id="form" className="space-y-5">
            {/* Email Field */}
           

            {/* To Name Field */}
           

            {/* From Name Field */}
            <div className="field">
              <label
                htmlFor="from_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                placeholder="Your Full Name"
                className="w-full dark:bg-gray-900 bg-gray-200 text-gray-800 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="field">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Write your message here..."
                className="w-full dark:bg-gray-900 bg-gray-200 text-gray-800 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Reply-To Field */}
            <div className="field">
              <label
                htmlFor="reply_to"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Reply-To Email
              </label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                required
                placeholder="Reply-To Email Address"
                className="w-full dark:bg-gray-900 bg-gray-200 text-gray-800 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              id="button"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
