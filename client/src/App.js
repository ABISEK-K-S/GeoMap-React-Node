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
        <div className="row">
          <div className="col col-9">
            <Header />
            <RouteComponent />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
