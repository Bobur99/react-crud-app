import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Img from './assets/images/react_img.jpg'
// import Banner from './components/Banner/Banner'
// import Navbar from "./components/Navbar/Navbar";
// import Main from './components/Main/Main'
// import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import { Fragment, lazy, useContext, useEffect, useState} from "react";
import Basket from "./pages/Basket/Basket";
import StateContext from "./context/context";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Product = lazy(() => import("./pages/Product/Product"));
const Login = lazy(() => import("./pages/Login/Login"));
const Registr = lazy(() => import("./pages/Registr/Registr"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const MovieDetail = lazy(() => import("./pages/MovieDetail/MovieDetail"));
const UserDetail = lazy(() => import("./pages/UserDetail"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

function App() {
  const { userState } =
    useContext(StateContext);
    const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userState.users));
  }, [userState.users]);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(userState.token));
  }, [userState.token]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(userState.currentUser));
  }, [userState.currentUser]);

  // console.table(users)
  // console.table(currentUser);
  // console.log(token)
  // console.table(userState.users);
  

  return (
    <div className={`${darkMode ? 'dark' : ''} route-wrapper dark:bg-slate-800 h-full!`}>
      <Routes>
        <Route element={<ProtectedRoute darkMode={darkMode} setDarkMode={setDarkMode} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/detail/:id" element={<MovieDetail />} />
          <Route path="/about/userDetail/:id" element={<UserDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        theme={"colored"}
        limit={1}
        hideProgressBar
        autoClose={1000}
      />
    </div>
  );
}

export default App;

{
  /* <h1>Salom</h1>
<img src={Img} alt="" />
<Banner/>
<Main/> */
}
