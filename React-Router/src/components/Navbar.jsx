import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-5 items-center bg-cyan-800'>
        <h1 className='text-3xl'> Demo Website </h1>
        <div className='flex gap-8 text-xl'>
          <Link to='/'> Home </ Link>
          <Link to='/products'> Products </ Link>
          <Link to='/course'> Course </Link>
          <Link to='/about'> About </ Link>
          <Link to='/contact'> Contact </ Link>
        </div>
    </div>
  )
}

export default Navbar