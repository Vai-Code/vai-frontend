import React from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import QuienesSomos from './components/quienes_somos/QuienesSomos';
import Footer from './components/footer/Footer';
import BASS from "./components/baas/BASS"
import Chat from './components/chat/Chat';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <QuienesSomos/>
      <BASS/>
      <Footer/>
      <Chat/>
    </div>
  );
}

export default App;
