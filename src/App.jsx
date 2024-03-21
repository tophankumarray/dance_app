import React from 'react';
import "./app.css";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import Format from './Components/Format/Format';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Gallery/>
      <Format/>
      <Contact/>
    </>
  );
}

export default App