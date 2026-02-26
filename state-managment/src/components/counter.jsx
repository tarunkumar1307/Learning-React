import React, { useState } from 'react'

const Counter = () => {
  const [a, setA] = useState(0);
    const increment = () => {
      setA(a+1);
      setA(a+1);
      setA(a+1);
      // by doing this repetedly it doesn't mean we are incrementing it by 3, it will only increment by 1, to increment by 3 like this only we have to do like in function increment1
    }
  
    const increment1 = () => {
      setA(prev => (prev+1))
      setA(prev => (prev+1))
      setA(prev => (prev+1))
    }
  
    const decrement = () => {
      setA(a-1);
    }
    return (
      <div className='p-10 w-full h-[100vh] bg-gray-900 text-white flex flex-col items-center justify-evenly'>
        <h2 className='bg-gray-800 text-9xl font-semibold size-40  flex justify-center items-center rounded-[20px]'>{a}</h2>
        <div className='flex gap-8'>
          <button className='bg-slate-700 px-6 py-2 rounded-[5px] font-semibold text-2xl' onClick={increment}>Increment</button>
          <button className='bg-slate-700 px-6 py-2 rounded-[5px] font-semibold text-2xl' onClick={decrement}>Decrement</button>
          <button className='bg-slate-700 px-6 py-2 rounded-[5px] font-semibold text-2xl' onClick={increment1}>Increment by 3</button>
        </div>
      </div>
    )
}

export default Counter