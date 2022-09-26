import React from "react";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,Slide } from "react-toastify";

const toastConfig = {
  autoClose: 2500,
  position: "top-center",
  transition: Slide,
  hideProgressBar: true,
};

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer {...toastConfig} />
    </div>
  );
}

export default App;
