import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import StateContext from "../../context/context";
import { logoutAction } from "../../reducer/userReducer/userAction";

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const { userDispatch, basketState } = useContext(StateContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const gotoLogin = () => {
    userDispatch(logoutAction());
    navigate("/login");
  };

  useEffect(() => {
  if (menuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  // На всякий случай очищаем при размонтировании
  return () => document.body.classList.remove("overflow-hidden");
}, [menuOpen]);

  return (
    <nav className="bg-blue-500 dark:bg-slate-900 text-white px-4 py-3">
      <div className="mx-[30px] flex items-center justify-between z-50 relative">

        {/* Бургер-кнопка */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden relative w-8 h-8 flex flex-col justify-center items-center z-[60]"
        >
          <span
            className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>

        {/* Меню для больших экранов */}
        <ul className="hidden sm:flex gap-6 font-medium items-center">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/basket">Basket <sup>{basketState.basketItems.length}</sup></NavLink></li>
        </ul>

        {/* Кнопки справа */}
        <div className="flex items-center gap-4 z-[60]">
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? (
              <MdDarkMode className="size-7" />
            ) : (
              <MdOutlineDarkMode className="size-7" />
            )}
          </button>
          <button
            onClick={gotoLogin}
            className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded-xl flex items-center gap-2 dark:bg-slate-700 dark:hover:bg-slate-800"
          >
            <span>Logout</span>
            <FaSignInAlt />
          </button>
        </div>
      </div>

      {/* Мобильное меню (на весь экран) */}
      {menuOpen && (
        <div className="fixed inset-0 min-w-screen min-h-screen bg-blue-600 dark:bg-slate-800 flex flex-col items-center justify-center text-2xl gap-8 z-40 sm:hidden transition-all duration-300">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/product" onClick={() => setMenuOpen(false)}>Product</NavLink>
          <NavLink to="/movies" onClick={() => setMenuOpen(false)}>Movies</NavLink>
          <NavLink to="/basket" onClick={() => setMenuOpen(false)}>
            Basket <sup>{basketState.basketItems.length}</sup>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Header;
