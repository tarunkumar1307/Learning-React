import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/features/counterSlice'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div className='flex flex-col gap-3 justify-center items-center bg-black h-screen text-white'>
      <h1 className='text-6xl bg-gray-300 px-3 py-3 rounded mb-4 text-black'> {count} </h1>
      <div className='flex gap-4'>
        <button onClick={() => {
          dispatch(increment())
        }}
        className='bg-gray-600 px-4 py-2 rounded active:scale-95'
        >
          Increment
        </button>
        <button onClick={() => {
          dispatch(decrement())
        }}
        className='bg-gray-600 px-4 py-2 rounded active:scale-95'>
          Decrement
        </button>
        <button onClick={() => {
          dispatch(incrementByAmount(5))
        }}
        className='bg-gray-600 px-4 py-2 rounded active:scale-95'>
          Increase by Amount
        </button>
      </div>
    </div>
  )
}

export default App