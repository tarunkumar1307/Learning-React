import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import { ThemeDataContext } from './context/ThemeContext'

const App = () => {
  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} bg-black h-screen overflow-auto`}>
      <Navbar />
      <Button />
    </div>
  )
}

export default App