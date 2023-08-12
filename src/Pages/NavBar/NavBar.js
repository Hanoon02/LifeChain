import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="shadow-md p-4 bg-blue-500">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-semibold text-white">
            HealthHub
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
