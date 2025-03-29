import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import React from "react";
import Layout from "./components/layout/Layout.tsx";
import Demo from "./pages/Demo.tsx";
import Documentation from "./pages/Documentation.tsx";
import Footer from "./components/footer/Footer.tsx";


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="demo" element={<Demo/>}/>
          <Route path="documentation" element={<Documentation />}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;