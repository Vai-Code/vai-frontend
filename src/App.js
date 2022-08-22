import React from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import QuienesSomos from './components/quienes_somos/QuienesSomos';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <QuienesSomos/>
    </div>
  );
}

export default App;
