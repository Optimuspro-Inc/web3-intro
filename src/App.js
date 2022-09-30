import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';





function App() {


  //const responsiveMobile = useMediaQuery('(max-width: 770px)');



  return (

    <div className="appcontainer" >

       <Header  />


       <Routes>
          <Route path="/" element={<Home />} />
       </Routes>
       

       <Footer />

    </div>
  );
}

export default App;
