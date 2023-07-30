import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import ErrorPage from "./LoginPage/ErrorPage";
import GoogleMaps from "./Components/GoogleMaps";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/errorpage" element={<ErrorPage />}></Route>
        <Route path="/test" element={<div>testtesttesefsdb</div>}></Route>
        <Route path="/maps" element={<GoogleMaps />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
reportWebVitals();
