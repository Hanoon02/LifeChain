export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-white">
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
    <li className="hover:underline">
      <a href="#" className="text-white hover:text-blue-200 transition-colors">
        {text}
      </a>
    </li>
  );
};
