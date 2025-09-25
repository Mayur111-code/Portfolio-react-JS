// import React, { useRef, useState } from "react";
// import logomayur from "../../assets/logomayur.svg";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import menu_open from "../../assets/menu_open.svg";
// import menu_close from "../../assets/menu_close.svg";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const menuRef = useRef();

//   const openMenu = () => {
//     menuRef.current.classList.remove("translate-x-full");
//     menuRef.current.classList.add("translate-x-0");
//     setIsMobileMenuOpen(true);
//   };

//   const closeMenu = () => {
//     menuRef.current.classList.remove("translate-x-0");
//     menuRef.current.classList.add("translate-x-full");
//     setIsMobileMenuOpen(false);
//   };

//   const handleMenuClick = (menuItem) => {
//     setMenu(menuItem);
//     closeMenu();
//   };

//   return (
//     <nav className="navbar fixed top-0 left-0 w-full bg-black shadow-md z-50 py-4 px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
//         {/* Logo */}
//         <img
//           src={logomayur}
//           className="w-20 h-20 object-contain"
//           alt="Mayur Borse Logo"
//         />

//         {/* Desktop Navigation Menu */}
//         <ul className="hidden lg:flex items-center gap-8">
//           {[
//             { id: "home", label: "Home", href: "#home" },
//             { id: "about", label: "About Me", href: "#about", offset: 50 },
//             { id: "services", label: "Services", href: "#services", offset: 50 },
//             { id: "work", label: "Portfolio", href: "#work", offset: 50 },
//             { id: "contact", label: "Contact", href: "#contact", offset: 50 },
//           ].map((item) => (
//             <li key={item.id} className="relative">
//               <AnchorLink
//                 className={`block py-2 px-4 rounded-lg transition-all duration-200 ${
//                   menu === item.id
//                     ? "bg-blue-700 text-white font-bold"
//                     : "text-white font-bold hover:bg-gray-800 hover:text-blue-300"
//                 }`}
//                 offset={item.offset || 0}
//                 href={item.href}
//               >
//                 <p
//                   onClick={() => setMenu(item.id)}
//                   className="cursor-pointer text-lg"
//                 >
//                   {item.label}
//                 </p>
//               </AnchorLink>
//               {menu === item.id && (
//                 <span className="absolute -bottom-1 left-4 w-12 h-0.5 bg-blue-400"></span>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Connect Button */}
//         <div className="hidden lg:flex items-center ml-6">
//           <AnchorLink
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             offset={50}
//             href="#contact"
//           >
//             <p onClick={() => setMenu("contact")} className="cursor-pointer">
//               Connect With Me
//             </p>
//           </AnchorLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <img
//           src={menu_open}
//           onClick={openMenu}
//           alt="Open menu"
//           className="lg:hidden w-6 h-6 cursor-pointer transition-transform hover:scale-110"
//         />
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         ref={menuRef}
//         className="lg:hidden fixed top-0 right-0 h-full w-80 bg-black shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-full border-l border-gray-800 z-50"
//       >
//         {/* Mobile Menu Header */}
//         <div className="flex justify-between items-center p-6 border-b border-gray-800">
//           <img
//             src={logomayur}
//             className="w-16 h-16 object-contain"
//             alt="Mayur Borse Logo"
//           />
//           <img
//             src={menu_close}
//             onClick={closeMenu}
//             alt="Close menu"
//             className="w-6 h-6 cursor-pointer transition-transform hover:scale-110"
//           />
//         </div>

//         {/* Mobile Menu Items */}
//         <ul className="flex flex-col p-6 space-y-6">
//           {[
//             { id: "home", label: "Home", href: "#home" },
//             { id: "about", label: "About Me", href: "#about", offset: 50 },
//             { id: "services", label: "Services", href: "#services", offset: 50 },
//             { id: "work", label: "Portfolio", href: "#work", offset: 50 },
//             { id: "contact", label: "Contact", href: "#contact", offset: 50 },
//           ].map((item) => (
//             <li key={item.id} className="relative">
//               <AnchorLink
//                 className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
//                   menu === item.id
//                     ? "bg-blue-700 text-white font-bold"
//                     : "text-white font-bold hover:bg-gray-800 hover:text-blue-400"
//                 }`}
//                 offset={item.offset || 0}
//                 href={item.href}
//               >
//                 <p
//                   onClick={() => handleMenuClick(item.id)}
//                   className="cursor-pointer text-lg"
//                 >
//                   {item.label}
//                 </p>
//               </AnchorLink>
//               {menu === item.id && (
//                 <span className="absolute -bottom-1 left-4 w-12 h-0.5 bg-blue-400"></span>
//               )}
//             </li>
//           ))}

//           {/* Mobile Connect Button */}
//           <li className="pt-4 border-t border-gray-800">
//             <AnchorLink
//               className="block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
//               offset={50}
//               href="#contact"
//             >
//               <p
//                 onClick={() => handleMenuClick("contact")}
//                 className="cursor-pointer text-lg"
//               >
//                 Connect With Me
//               </p>
//             </AnchorLink>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black/60"
//           onClick={closeMenu}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logomayur from "../../assets/logomayur.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.classList.remove("translate-x-full");
    menuRef.current.classList.add("translate-x-0");
    setIsMobileMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.classList.remove("translate-x-0");
    menuRef.current.classList.add("translate-x-full");
    setIsMobileMenuOpen(false);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu();
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-black shadow-md z-50 py-4 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <NavLink to="/" onClick={() => setMenu("home")}>
          <img
            src={logomayur}
            className="w-20 h-20 object-contain"
            alt="Mayur Borse Logo"
          />
        </NavLink>

        {/* Desktop Navigation Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {[
            { id: "home", label: "Home", path: "/" },
            { id: "about", label: "About Me", path: "/about" },
            { id: "services", label: "Services", path: "/services" },
            { id: "work", label: "Work", path: "/work" },
            { id: "contact", label: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.id} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg transition-all duration-200 ${
                    isActive || menu === item.id
                      ? "bg-blue-700 text-white font-bold"
                      : "text-white font-bold hover:bg-gray-800 hover:text-blue-300"
                  }`
                }
                onClick={() => setMenu(item.id)}
              >
                <p className="cursor-pointer text-lg">{item.label}</p>
              </NavLink>
              {menu === item.id && (
                <span className="absolute -bottom-1 left-4 w-12 h-0.5 bg-blue-400"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Connect Button */}
        <div className="hidden lg:flex items-center ml-6">
          <NavLink
            to="/contact"
            onClick={() => setMenu("contact")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Connect With Me
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <img
          src={menu_open}
          onClick={openMenu}
          alt="Open menu"
          className="lg:hidden w-6 h-6 cursor-pointer transition-transform hover:scale-110"
        />
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className="lg:hidden fixed top-0 right-0 h-full w-80 bg-black shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-full border-l border-gray-800 z-50"
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <NavLink to="/" onClick={() => handleMenuClick("home")}>
            <img
              src={logomayur}
              className="w-16 h-16 object-contain"
              alt="Mayur Borse Logo"
            />
          </NavLink>
          <img
            src={menu_close}
            onClick={closeMenu}
            alt="Close menu"
            className="w-6 h-6 cursor-pointer transition-transform hover:scale-110"
          />
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col p-6 space-y-6">
          {[
            { id: "home", label: "Home", path: "/" },
            { id: "about", label: "About Me", path: "/about" },
            { id: "services", label: "Services", path: "/services" },
            { id: "work", label: "Work", path: "/work" },
            { id: "contact", label: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.id} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg transition-all duration-200 ${
                    isActive || menu === item.id
                      ? "bg-blue-700 text-white font-bold"
                      : "text-white font-bold hover:bg-gray-800 hover:text-blue-400"
                  }`
                }
                onClick={() => handleMenuClick(item.id)}
              >
                <p className="cursor-pointer text-lg">{item.label}</p>
              </NavLink>
              {menu === item.id && (
                <span className="absolute -bottom-1 left-4 w-12 h-0.5 bg-blue-400"></span>
              )}
            </li>
          ))}

          {/* Mobile Connect Button */}
          <li className="pt-4 border-t border-gray-800">
            <NavLink
              to="/contact"
              onClick={() => handleMenuClick("contact")}
              className="block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
            >
              Connect With Me
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
