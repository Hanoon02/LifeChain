import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-3xl font-semibold text-white">
          HealthHub
        </a>
        <ul className="flex space-x-6">
          <NavItem text="Home" />
          <NavItem text="About" />
          <NavItem text="Services" />
          <NavItem text="Contact" />
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ text }) => {
  return (
    <li>
      <a href="#" className="text-white hover:text-blue-300">
        {text}
      </a>
    </li>
  );
};
