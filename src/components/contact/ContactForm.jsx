import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
    return (
        <section className="py-10 lg:py-16 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left: Form */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
                    <p className="text-gray-500 mb-6">
                        We'd love to hear from you. Fill out the form below.
                    </p>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows={6}
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                        <button
                            type="submit"
                            className="bg-secondary text-white font-medium px-6 py-2 w-full md:py-3 md:w-40
                            rounded-lg hover:bg-[#1B527D] transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right: Contact Info */}
                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-primary mb-2">Contact Info</h2>
                    <p className="text-gray-500 mb-4">
                        You can contact or visit us in our office from Monday to Saturday from 10:00 - 17:00
                    </p>

                    {/* Contact Cards */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm">
                            <div className="bg-secondary text-white p-3 rounded-full">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Registered Office</h3>
                                <p className="text-gray-500 text-sm">
                                    Vougavent Technologies LLP,<br />
                                    1489, 5th Cross, 29th Main Rd,<br />
                                    Stage 2, BTM Layout,<br />
                                    Bengaluru, Karnataka 560076
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm">
                            <div className="bg-secondary text-white p-3 rounded-full">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Phone</h3>
                                <p className="text-gray-500 text-sm">+91 80 56 637 776</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm">
                            <div className="bg-secondary text-white p-3 rounded-full">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Email</h3>
                                <p className="text-gray-500 text-sm">info@vougavent.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
