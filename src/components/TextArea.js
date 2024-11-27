import React from "react";

const TextBox = ({ companyLine, textContent }) => {
    return (
        <div className="text-container w-full md:w-1/2 mt-4 md:mt-0 md:pl-8">
            <h2 className="carouselTextHead text-3xl font-bold mb-4">{companyLine}</h2>
            <p className="carouselText text-gray-700 text-lg">{textContent}</p>
        </div>
    );
}

export default TextBox;