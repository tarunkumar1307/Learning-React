import React, { useState } from 'react'

const Comp = () => {
    const [user, setUser] = useState({name:"Aadi", age:21})

    const changeName = () => {
        setUser(prev => ({...prev, name:"Tarun"}))
        // or we can do like
    }

    const changeName1 = () => {
        let info = {...user}
        info.name = "Tarun"
        setUser(info)
    }

    const changeAge = () => {
        setUser(prev => ({...prev, age:20}))
    }

  return (
    <div className='p-10 w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center'>
        <h1 className='text-white text-2xl font-semibold px-10 py-3 rounded-[10px]'>{user.name}, {user.age}</h1>
        <h1></h1>
        <div className='flex gap-8'>
            <button className='bg-green-800 px-6 py-2 rounded-[8px] font-semibold text-2xl hover:bg-green-900 cursor-pointer' onClick={changeName}>Correct Name</button>
            <button className='bg-green-800 px-6 py-2 rounded-[5px] font-semibold text-2xl hover:bg-green-900 cursor-pointer' onClick={changeAge}>Correct Age</button>
        </div>
    </div>
  )
}

export default Comp