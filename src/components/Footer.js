import React from "react";
import footerNavs from "./FooterData";

const Footer = ({ logoSrc, copyText, link }) => {
    return (
        <footer className="pt-10 bg-gray-900 text-gray-300">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="sm:flex sm:justify-between sm:text-left text-center">
                    <div className="space-y-6 sm:space-y-0 sm:text-left">
                        <img src={logoSrc} className="footLogo w-32 mx-auto sm:mx-0" alt="Logo" />
                        <ul className="flex justify-start flex-wrap items-center gap-4 text-sm sm:text-base">
                            {footerNavs.map((item, idx) => (
                                <li key={idx} className="text-gray-400 hover:text-gray-100 duration-150">
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="appLinks mt-6 sm:mt-0">
                        <p className="text-white-700 font-semibold">Get the app</p>
                        <div className="flex justify-center sm:justify-start gap-3 mt-3">
                            <a href={link}>
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    className="w-32 h-10 object-contain"
                                />
                            </a>
                            <a href={link}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Play Store"
                                    className="w-32 h-10 object-contain"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 text-center">
                    <p>{copyText}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;