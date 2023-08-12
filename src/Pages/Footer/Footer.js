import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="list-none">
              <li className="py-1 hover:underline">
                <a href="#">About Us</a>
              </li>
              <li className="py-1 hover:underline">
                <a href="#">Careers</a>
              </li>
              <li className="py-1 hover:underline">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="list-none">
              <li className="py-1 hover:underline">
                <a href="#">Blog</a>
              </li>
              <li className="py-1 hover:underline">
                <a href="#">Help Center</a>
              </li>
              <li className="py-1 hover:underline">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
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
      </div>
    </footer>
  );
}
