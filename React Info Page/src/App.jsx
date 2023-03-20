import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main.jsx'
import Pic from './components/Pic.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Pic/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
