import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex justify-center items-center gap-6 py-4'>
        <Link to='/products/men' className='text-3xl font-semibold'> Men </ Link>
        <Link to='/products/women' className='text-3xl font-semibold'> Women </Link>

        <Outlet />
    </div>

  )
}

export default Product