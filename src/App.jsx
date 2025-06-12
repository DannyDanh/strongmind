import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './components/Home'

const App =() => {
  return (
   
    <div className="App">
      <h1 className="title">💪 Strong Mind 🧠</h1> 
      <h2>Welcome to StrongMind — your personal wellness companion! </h2>
      <h3>Whether you are looking to build strength, find balance, or simply clear your mind, StrongMind combines powerful workouts with mindful meditation to help you achieve both mental and physical well-being. Start your journey now !</h3>
      <h1>🏋️🧘☀️</h1>
  
      <Home/>
            
    </div>
    
  )
}
export default App

