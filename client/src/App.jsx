import React from 'react'
import Navbar from './layouts/Navbar'
import PostList from './components/PostList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails';
 
const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/post/:id' element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App