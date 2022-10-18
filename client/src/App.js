import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./../src/styles.css";
import Header from "./../src/views/header/headerComponent";
import RouteComponent from "./../src/helper/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <div className="container">
        <Header />
        <RouteComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
