import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
    


  return (
    <div className='flex h-[85%] justify-center items-center '>
        <button className='text-white text-3xl font-semibold bg-gray-500 px-6 py-2 rounded-xl active:scale-95'
        onClick={() => {
            setTheme(prev => prev === 'light' ? 'dark' : 'light')
        }}
        >
            Change Theme
        </button>
    </div>
  )
}

export default Button