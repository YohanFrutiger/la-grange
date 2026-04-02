 {/* Layer burger */}
    <nav
      className={`
          fixed top-0 right-0 h-[350px] w-60 bg-gray-900 transform transition-transform duration-300 z-50 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
    >
      {/* X button */}
      <div className="flex justify-end mt-2 mr-4">
        <button
          onClick={() => setIsOpen(false)}
          className="text-5xl text-white hover:text-orange "
        >
          ✕
        </button>
      </div>

      {/* Navigation dans le menu burger */}
      <ul className="flex flex-col items-start gap-5 mt-2 p-4 pr-4 bg-gray-900">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-xl font-semibold font-rosario transition-colors ${isActive ? "text-orange" : "text-white"
                } hover:text-orange`}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>