import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";
import StateContext from "../../context/context";
import {
  loginAction,
  setCurrentUserAction,
} from "../../reducer/userReducer/userAction";

function Login() {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(StateContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userState.token) {
      navigate("/"); // переход после обновления token
    }
  }, [userState.token, navigate]);

  const hasUserInDB = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    const currentUser = userState.users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(currentUser);

    if (currentUser) {
      userDispatch(setCurrentUserAction(currentUser));
      userDispatch(loginAction());
      toast.success("You have successfully logged in!");
      return;
    } else {
      toast.error("A user with this email does not exist");
      setLoading(false);
    }
  };

  return (
    <div className="auth-container login-container bg-[url(/src/assets/images/Bg.png)] bg-no-repeat bg-cover">
      <form onSubmit={hasUserInDB} action="" className="form-login  text-white mx-6">
        <h1 className="text-center mt-0 mb-[20px] text-3xl">Login</h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          type="password"
          placeholder="Password"
        />
        <button type="submit" disabled={loading}>
          Sign in
        </button>
        <p className="mt-[10px] text-center">
          Need an account?{" "}
          <Link to={"/registr"} className="text-blue-300">
            SIGN UP
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
