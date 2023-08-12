// export default function NavBar() {
//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-purple-600 py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="#" className="text-3xl font-bold text-white">
//           LifeChain
//         </a>
//         <ul className="flex gap-5">
//           <NavItem text="Home" />
//           <NavItem text="About" />
//         </ul>
//       </div>
//     </nav>
//   );
// }

// const NavItem = ({ text }) => {
//   return (
//     <li className="hover:underline">
//       <a href="/#" className="text-white hover:text-blue-200 transition-colors">
//         {text}
//       </a>
//     </li>
//   );
// };

// export default function NavBar() {
//   return (
//     <nav className="bg-gradient-to-r from-deep-cerulean to-soft-peach py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="#" className="text-3xl font-bold text-white">
//           LifeChain
//         </a>
//         <ul className="flex gap-5">
//           <NavItem text="Home" />
//           <NavItem text="About" />
//         </ul>
//       </div>
//     </nav>
//   );
// }

// const NavItem = ({ text }) => {
//   return (
//     <li className="hover:underline">
//       <a
//         href="/#"
//         className="text-white hover:text-sunset-orange transition-colors"
//       >
//         {text}
//       </a>
//     </li>
//   );
// };

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-deep-cerulean to-deep-cerulean-lighter py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-white">
          LifeChain
        </a>
        <ul className="flex gap-5">
          <NavItem text="Home" />
          <NavItem text="About" />
          <NavItem text="Testimony" />
          <NavItem text="Features" />
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ text }) => {
  return (
    <li className="hover:underline">
      <a
        href="/#"
        className="text-white hover:text-sunset-orange transition-colors"
      >
        {text}
      </a>
    </li>
  );
};
