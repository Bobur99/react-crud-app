import React, { useContext } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import StateContext from "../../context/context";
import { logoutAction } from "../../reducer/userReducer/userAction";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const { userDispatch, basketState } = useContext(StateContext);

  const gotoLogin = () => {
    userDispatch(logoutAction());
    navigate("/login");
  };

  // console.log(currentUser);

  return (
    <nav className="bg-blue-500 dark:bg-slate-900 text-white dark:text-white">
      <ul className="nav__list text-white !w-[400px]">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/movies"}>Movies</NavLink>
        </li>
        <li>
          <NavLink to={"/basket"}>
            Basket <sup>{basketState.basketItems.length}</sup>
          </NavLink>
        </li>
      </ul>
      <div className="wrapper flex justify-between">
        <button onClick={()=>setDarkMode(prev=>!prev)} className="cursor-pointer !mx-5">
          {darkMode ? (
            <MdDarkMode className="size-7" />
          ) : (
            <MdOutlineDarkMode className="size-7" />
          )}
        </button>
        <button
          onClick={gotoLogin}
          className="login-btn bg-blue-700 hover:bg-blue-800 rounded-xl cursor-pointer dark:bg-slate-700 dark:hover:bg-slate-800"
        >
          {" "}
          <span>Logout</span> <FaSignInAlt />
        </button>
      </div>
    </nav>
  );
}

export default Header;
