import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { AllRoutes } from "./routes/Routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
