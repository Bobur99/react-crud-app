import React from "react";
import "./NotFound.css";
import notFoundGif from "../../assets/images/notFoundPage.gif";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const Navigate = useNavigate()

  const handlerGoBack = () =>  {
    Navigate(-1)
  }

  return (
    <div className="container-notfound dark:text-white">
      <div className="notfound-gif">
        <img src={notFoundGif} alt="notFoundPage" />
      </div>
        <h1>Not found page!</h1>
        <button onClick={handlerGoBack}>Go to back</button>
    </div>
  );
}

export default NotFound;
