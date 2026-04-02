import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  // Items de navigation
  const navItems = [
    { to: "/", label: "Le gîte" },
    { to: "/la-region", label: "La région" },
    { to: "/venir", label: "Venir" }
  ];

  return (<>

    <header className="h-16 mx-auto bg-champaign/90 fixed top-0 left-0 right-0 z-50">
      <div className="h-full flex items-center justify-between">

        {/* Logo*/}
        <div className="ml-4 mt-1">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo gîte de séjour La Grange"
              className=" h-16 px-2 sm:px-4 w-auto max-w-[120px] sm:max-w-[180px] object-contain"
            />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center justify-center flex-1 sm:gap-8 md:gap-10 lg:gap-36 mx-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                ` font-outfit text-green text-lg md:text-xl tracking-wide  ${isActive ? "font-black scale-110 underline underline-offset-8 cursor-default" : " transition-all duration-500 hover:scale-105 "}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bouton Réserver */}
        <div className="bg-orange rounded-md px-4 py-1 mr-8 md:mr-14 text-white text-base sm:text-lg   ">
          <a href="">
            Réserver
          </a>
        </div>

        {/* Bouton burger */}
        {/* <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu de navigation"
          className="sm:hidden text-3xl p-2 m-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-green-700 rounded"
        >
          {isOpen ? "" : "☰"}
        </button> */}

        {/* menu burger */}
        {/* <div
          className={`
          fixed inset-0 transition-opacity duration-300 z-40  
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
          onClick={() => setIsOpen(false)}
        /> */}

      </div>
    </header>

   
  </>
  );
}