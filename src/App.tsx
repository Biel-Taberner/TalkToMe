import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import React from "react";
import Layout from "./components/layout/Layout.tsx";


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;