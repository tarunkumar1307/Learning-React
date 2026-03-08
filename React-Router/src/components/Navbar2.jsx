import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()

    return (
        <div className='flex justify-center gap-5 px-10 py-5 items-center bg-cyan-600'>
            <button className='bg-emerald-800 font-semibold active:scale-95 px-4 py-2 rounded'
            onClick={() => {
                navigate('/')
            }}
            >
                Return to Home
            </button>

            <button className='bg-emerald-800 font-semibold active:scale-95 px-4 py-2 rounded'
            onClick={() => {
                navigate(-1)
            }}
            >
                Back
            </button>

            <button className='bg-emerald-800 font-semibold active:scale-95 px-4 py-2 rounded'
            onClick={() => {
                navigate(+1)
            }}
            >
                Next
            </button>
        </div>
    )
}

export default Navbar2