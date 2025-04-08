import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import React from "react";
import Layout from "./components/layout/Layout.tsx";
import TalkToMe from "./pages/TalkToMe.tsx";
import Footer from "./components/footer/Footer.tsx";
import ListenToMe from "./pages/ListenToMe.tsx";


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="talk-to-me" element={<TalkToMe/>}/>
          <Route path="listen-to-me" element={<ListenToMe/>}/>
          <Route path="*" element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;