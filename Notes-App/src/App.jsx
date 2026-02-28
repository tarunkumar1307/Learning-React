import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notes, setNotes] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    setNotes(prev => [...prev, { title, desc }])

    setTitle('')
    setDesc('')
  }

  const deleteNote = (idx) => {
    const copyNote = [...notes]
    copyNote.splice(idx, 1)
    setNotes(copyNote)
  }

  return (
    <div className='lg:flex bg-black min-h-screen text-white'>
      <form onSubmit={submitHandler} action="" className='flex flex-col gap-4 p-10 lg:w-1/2'>
        <h2 className='text-4xl font-bold mb-2'>Add Notes</h2>

        <input
          type="text"
          placeholder='Title' className='border-2 rounded px-3 py-2 outline-none'

          value={title}

          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          placeholder='Description...' className='border-2 rounded px-3 py-2 h-48'

          value={desc}

          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />

        <button
          type="submit"
          className='bg-white px-3 py-2 rounded font-bold text-black'>
          Add Note
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <div>
          <h1 className='text-4xl font-bold'>Your Notes</h1>
          <div className='flex flex-wrap items-start gap-5 overflow-auto mt-7'>
            {notes.map((ele, idx) => {
              return <div key={idx} className='flex justify-between items-start flex-col bg-white w-48 h-60 rounded-xl p-4'>
                <div>
                  <h3 
                className='text-xl text-black font-bold uppercase'>
                  {ele.title}
                </h3>
                <p className='mt-1 text-gray-500'>
                  {ele.desc}
                </p>
                </div>
                <button 
                className='px-6 py-2 bg-black rounded-lg text-white mt-4 w-full'
                
                onClick={()=>{
                  deleteNote(idx )
                }}
                >
                  Delete Note
                </button>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App