import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading/Loading.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </Suspense>
);
