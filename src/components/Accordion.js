import React, { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accor border border-gray-300 rounded-lg shadow-md max-w-7xl mx-auto my-2 overflow-hidden">
            <button
                className="w-full text-left py-4 px-6 text-lg font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none flex justify-between items-center transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="flex-grow text-left">{title}</span>
                <span className="flex-shrink-0 text-gray-500 ml-4">{isOpen ? "–" : "+"}</span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <div className="accorText px-6 py-4 text-gray-600 border-t border-gray-200">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
