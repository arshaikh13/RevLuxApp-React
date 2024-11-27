import React from "react";

const ContactForm = ({header, hours, address, phone, email, option1, option2, option3}) => {
    return (
        <div class="contactForm mt-6 bg-gray-200 rounded-lg">
            <div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                <div class="contact-container">
                    <ul class="contact-list">
                        <li class="contact-item">
                            <a href="javascript:void(0)" class="contact-link">
                                <strong>Email: </strong>{email}
                            </a>
                        </li>
                        <li class="contact-item">
                            <a href="javascript:void(0)" class="contact-link">
                                <strong>Phone: </strong>{phone}
                            </a>
                        </li>
                        <li class="contact-item">
                            <a href="javascript:void(0)" class="contact-link">
                                <strong>Hours: </strong>{hours}
                            </a>
                        </li>
                        <li class="contact-item">
                            <a href="javascript:void(0)" class="contact-link">
                                <strong>Address: </strong>{address}
                            </a>
                        </li>
                    </ul>
                </div>


                <div class="bg-gray-100 p-6 rounded-lg">
                    <div class="space-y-4 max-lg:mt-4">
                        <button type="button" class="px-4 py-2 rounded-lg bg-[#cc0000] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4">{option1}</button>
                        <button type="button" class="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4">{option2}</button>
                        <button type="button" class="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300">{option3}</button>
                    </div>

                    <form class="mt-8 space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <input type='email' placeholder='Email'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <input type='text' placeholder='Subject'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <textarea placeholder='Message' rows="6"
                            class="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"></textarea>
                        <button
                            type="button"
                            class="text-white bg-[#cc0000] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                height="16px"
                                fill="#fff"
                                class="mr-2 flex-shrink-0"
                                viewBox="0 0 548.244 548.244">
                                <path
                                    fill-rule="evenodd"
                                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                    clip-rule="evenodd"
                                    data-original="#000000"
                                />
                            </svg>
                            <span class="flex-grow text-center">Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;