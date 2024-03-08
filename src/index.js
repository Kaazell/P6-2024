import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Home } from "./pages/Home/Home";
import { Description } from "./components/Description/Description";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { About } from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/description/:id" element={<Description />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
