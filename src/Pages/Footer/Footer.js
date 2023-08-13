import React from "react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Terms of Service"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Contact Us"],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-deep-cerulean to-deep-cerulean-lighter text-black pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <ul className="list-none">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="py-1 hover:underline">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className=" mb-4 ">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">
                © {new Date().getFullYear()} LifeChain. All Rights
                Reserved.
              </p>
            </div>
            <div>
              <form className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter your email..."
                  className="p-2 rounded-md text-black"
                />
                <button className="text-white bg-deep-cerulean-dark py-2 px-4 rounded-md hover:bg-deep-cerulean-light">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
