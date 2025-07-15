import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "./Home.css";
import Task from "../../components/Task/Task";
import Task_1 from "../../components/Task_1/Task_1";
import {
  countReducer,
  initialState,
} from "../../reducer/countReducer/countReducer";
import StateContext from "../../context/context";
import fetchReducer, {
  initialFetchState,
} from "../../reducer/fetchReducer/fetchReducer";
import { toast } from "react-toastify";
import axios from "axios";
import {
  errorAction,
  loadingAction,
  successAction,
} from "../../reducer/fetchReducer/fetchAction";
import Loading from "../../components/Loading/Loading";

function Home() {
  const { userState } = useContext(StateContext);
  const [state, dispatch] = useReducer(countReducer, initialState);
  const [count, setCount] = useState(0);
  const [temperature, setTemperature] = useState(null);
  const countryRefName = useRef();
  const numRef = useRef();
  // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
  const API_KEY = "75ced55da7174c4764fbb1897da6af5b";
  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  );

  const { loading, success, error } = fetchState;

  const act = (type, payload) => {
    dispatch({ type, payload });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const country = countryRefName.current.value;

    if (!country.trim()) {
      toast.warning("Enter a country name!");
      return;
    }
    fetchDispatch(loadingAction());
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}`
      );
      console.log(res.data);

      setTemperature(res.data);
      fetchDispatch(successAction());
    } catch (error) {
      console.log(error);
      fetchDispatch(errorAction("Please enter a valid country!"));
    }
  };

  return (
    <div className="container dark:text-white min-h-screen">
      <h1 className="dark:text-white">Home page</h1>
      <div className="wrapper mx-5">
        <div className="left-block mb-10">
          <h3 className="!mb-5">Weather Forecast using Weather API:</h3>
          <form className="flex" onSubmit={handleSubmit}>
            <input
              ref={countryRefName}
              type="text"
              className="border !m-0 !mr-2 rounded-[6px]"
              placeholder="Enter country..."
            />
            <button className="!px-7 btn-default btn-darkMode">send</button>
          </form>
          {loading && <h1>Loading...</h1>}
          {error && <h1 className="dark:text-red-500">{error}</h1>}
          {success && temperature && (
            <div className="weather-card !mt-8 !p-6 rounded-xl shadow-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white max-w-sm w-full">
              <h2 className="text-2xl font-semibold !mb-2.5">
                {temperature.name}
              </h2>
              <p>{`🌡 Temp: ${(temperature?.main.temp - 273).toFixed(2)}°C`}</p>
            </div>
          )}
        </div>
        <div className="right-block hidden">
          {/* <h2 className="text-2xl">
            Hello, {userState.currentUser.name} {userState.currentUser.surname}
          </h2> */}

          <div className="reducer__block-test">
            <h3 className="text-xl !my-2">{state}</h3>
            <input
              ref={numRef}
              className="input-default "
              type="text"
              placeholder="Enter number..."
            />
            <button
              onClick={() => act("PLUS", +numRef.current.value)}
              className="reducerBtn btn-default btn-darkMode h-10 w-10"
            >
              +
            </button>
            <button
              onClick={() => act("MINUS", +numRef.current.value)}
              className="reducerBtn btn-default btn-darkMode h-10 w-10"
            >
              -
            </button>
            <button
              onClick={() => act("TIMES", +numRef.current.value)}
              className="reducerBtn btn-default btn-darkMode h-10 w-10"
            >
              *
            </button>
            <button
              onClick={() => act("DIVIDED_BY", +numRef.current.value)}
              className="reducerBtn btn-default btn-darkMode h-10 w-10"
            >
              /
            </button>
          </div>

          <div>
            <button
              className="btn-default btn-darkMode !p-2"
              onClick={(e) => setCount(+count + 1)}
            >
              add
            </button>{" "}
            {count}
          </div>
          <br />
          <Task />
          <Task_1 />
        </div>
      </div>
    </div>
  );
}

export default Home;
