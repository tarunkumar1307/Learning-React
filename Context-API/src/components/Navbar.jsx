import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = () => {
  return (
    <div className='bg-emerald-950 flex justify-between p-6'>
        <h1 className='text-white text-2xl font-semibold'>Demo Webiste </h1>
        <Navbar2 />
    </div>
  )
}

export default Navbar