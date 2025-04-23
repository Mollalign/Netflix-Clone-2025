import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqs from './data'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="w-[92%] md:w-[80%] mx-auto text-white">
      <h2 className="text-2xl font-bold my-5 text-center">Frequently Asked Questions</h2>
      <div className="space-y-2.5">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-neutral-800 rounded-md overflow-hidden border border-white/20">
            <button
              className="w-full flex justify-between items-center px-4 py-4.5 md:py-5 text-left focus:outline-none cursor-pointer"
              onClick={() => toggle(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold cursor-pointer">
          Finish Sign-Up <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}

export default FAQ