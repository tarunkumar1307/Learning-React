import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar2 = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)

  return (
    <div className='flex justify-center items-center gap-5 text-white text-lg font-semibold'>
        <h2>Home</h2>
        <h2>Products</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2 className='capitalize'> {theme} </h2>
    </div>
  )
}

export default Navbar2