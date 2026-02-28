import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')

  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by: ", name);
    
    // as we have seen generally that on submitting the form the input sections become empty, and as we have use preventDefault() so it will block to do it, that why we are seting name as empty so that on submitting, input box will be empty
    setName('');
  }

  return (
    // form handling
    // two way binding

    // to submit form we need onSubmit()
    <form onSubmit={(e) => {formHandler(e)}}> 
      <input type="text" placeholder="Enter Your Name" value={name}
      onChange={(e)=>{
        setName(e.target.value);
      }}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App