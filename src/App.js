import React from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import QuienesSomos from './components/quienes_somos/QuienesSomos';
import Footer from './components/footer/Footer';
import BASS from "./components/baas/BASS"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <QuienesSomos/>
      <BASS/>
      <Footer/>
    </div>
  );
}

export default App;
