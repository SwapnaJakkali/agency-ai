import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [theme,setTheme]=useState(localStorage.getItem('theme') || 'light')
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
