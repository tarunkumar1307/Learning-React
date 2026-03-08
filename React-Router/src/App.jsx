import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black text-white h-screen w-auto'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </ Route>
        <Route path='/course' element={<Course />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>

        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App