import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-800 text-white p-4 px-16 z-10 sticky top-0 fixed'>
        <a href='/'><h1 className='font-semibold text-lg'>My Blog</h1></a>
        <div>
            <ul className='flex space-x-4 text-gray-300'>
                <li className='hover:text-white cursor-pointer'>Home</li>
                <li className='hover:text-white cursor-pointer'>Posts</li>
                <li className='hover:text-white cursor-pointer'>About</li>
                <li className='hover:text-white cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar