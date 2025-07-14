import React, { useContext, useState} from "react";
import StateContext from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Registr.css";
import { addUserAction } from "../../reducer/userReducer/userAction";

function Registr() {

  const { userState, userDispatch } = useContext(StateContext);
 
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handlerSubmit = (e) => {
    e.preventDefault()

    let hasUser = userState.users.some(item => item.email === email)
    if(hasUser) {
      toast.error('A user with this email already exists!')
      return
    }

    let newUser = {
      name,
      surname,
      email,
      password
    }

    userDispatch(addUserAction(newUser))

    console.table(newUser);
    console.log(userState.users)
    toast.success('Successfully registered!!')
    navigate('/login')
    
    console.table(userState.users);
  }

  

  return (
    <div className="auth-container registr-container bg-[url(/src/assets/images/Bg.png)] h-full w-full bg-no-repeat bg-cover">
      <form onSubmit={handlerSubmit} action="" className="form-login text-white">
      <h1 className="text-3xl">Registration</h1>
        <input onChange={(e) => setName(e.target.value)} required type="text" placeholder="Name" />
        <input onChange={(e) => setSurname(e.target.value)} required type="text" placeholder="Surname" />
        <input onChange={(e) => setEmail(e.target.value)}  type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password" />
        <button>Sign up</button>
        <p className="mt-[10px] text-center">
          Need an account?{" "}
          <Link to={"/Login"} className="text-blue-300">
            SIGN IN
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registr;
