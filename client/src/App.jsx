import React from 'react'
import Navbar from './layouts/Navbar'
import PostList from './components/PostList'

const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <PostList />
    </div>
  )
}

export default App