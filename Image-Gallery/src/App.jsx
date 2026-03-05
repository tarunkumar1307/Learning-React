import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/card';
import Pagination from './components/pagination';

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const image = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data);
  }

  useEffect(() => {
    image();
  }, [index])

  let printUserData = <h1 className='text-xl font-semibold text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h1>
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <Card user={elem} key={idx}/>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white'>

      <div className='flex justify-center p-6 text-3xl'>
        <h1 className=''>Image Gallery</h1>
      </div>

      <div className='flex flex-wrap justify-center gap-8'>
        {printUserData}
      </div>

      <Pagination index={index} setUserData={setUserData} setIndex={setIndex}/>

    </div>
  )
}

export default App