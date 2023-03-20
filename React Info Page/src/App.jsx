import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Header.jsx'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
