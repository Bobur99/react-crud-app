import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import StateContext from "./context/context";

function ProtectedRoute({darkMode, setDarkMode}) {
  const {userState} = useContext(StateContext)

  if (userState.token) {
    return (
      <>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Outlet />
      </>
    );
  }

  return <Navigate to={"/login"} />;
}

export default ProtectedRoute;
