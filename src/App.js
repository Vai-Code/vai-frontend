import React from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import QuienesSomos from './components/quienes_somos/QuienesSomos';
import Footer from './components/footer/Footer';
import BASS from "./components/baas/BASS"
import Chat from './components/chat/Chat';
import Beneficios from './components/beneficios/Beneficios';
import Testimonios from './components/testimonios/Testimonios';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <QuienesSomos/>
      <Beneficios/>
      <BASS/>
      <Testimonios/>
      <Footer/>
      <Chat/>
    </div>
  );
}

export default App;
