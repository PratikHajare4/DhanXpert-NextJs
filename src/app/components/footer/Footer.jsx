import React from 'react';

export default function Footer () {
    return (
        <footer className="text-white" style={{ backgroundColor: '#343F5A' }}>
            <div className="container mx-auto px-6 pt-10 pb-6">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 text-white mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold">DhanXperts</h2>
                        <p className="mt-5 font-semibold">DhanXpert is a cutting-edge online platform that revolutionizes <br />the way individuals and businesses connect with trusted financial DhanXperts.</p>
                    </div>
                    <div className="w-1/2 md:w-1/4 mb-6 md:mb-0 link-column">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/about" className="hover:text-black font-semibold">About Us</a></li>
                            <li><a href="/xperts" className="hover:text-black font-semibold">Find Xperts</a></li>
                            <li><a href="/careers" className="hover:text-black font-semibold">Careers</a></li>
                            <li><a href="/contact" className="hover:text-black font-semibold">Contact Us</a></li>
                            <li><a href="/blog" className="hover:text-black font-semibold">Blog</a></li>
                            <li><a href="/terms" className="hover:text-black font-semibold">Terms & Conditions</a></li>
                            <li><a href="/privacy" className="hover:text-black font-semibold">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 mb-6 md:mb-0 link-column">
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul>
                            <li><a href="/top-rated" className="hover:text-black font-semibold">Top Rated DhanXperts</a></li>
                            <li><a href="/mutual-fund" className="hover:text-black font-semibold">Mutual Fund</a></li>
                            <li><a href="/insurance" className="hover:text-black font-semibold">Insurance</a></li>
                            <li><a href="/tax-consultancy" className="hover:text-black font-semibold ">Tax Consultancy</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4 flex justify-center ">Connect With Us</h3>
                        <div className="flex justify-center md:justify-end -mx-1">
                            <a href="#" className="mx-2.5 flex items-center justify-center text-blue-600 hover:text-blue-700 text-xl w-12 h-12 rounded-full bg-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="mx-2.5 flex items-center justify-center text-pink-600 hover:text-pink-700 text-xl w-12 h-12 rounded-full bg-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="mx-2.5 flex items-center justify-center text-blue-400 hover:text-blue-500 text-xl w-12 h-12 rounded-full bg-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="mx-2.5 flex items-center justify-center text-red-600 hover:text-red-700 text-xl w-12 h-12 rounded-full bg-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-bar py-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Powered by DhanXpert.
            </div>
        </footer>
    );
}

