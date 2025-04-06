import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex justify-between items-center bg-gray-800 text-white p-4 px-16 z-10 sticky top-0 fixed w-full'>
        <a href='/'><h1 className='font-semibold text-lg'>My Blog</h1></a>
        
        {/* Desktop Menu */}
        <div className='hidden md:block'>
            <ul className='flex space-x-4 text-gray-300'>
                <li className='hover:text-white cursor-pointer'>Home</li>
                <li className='hover:text-white cursor-pointer'>Posts</li>
                <li className='hover:text-white cursor-pointer'>About</li>
                <li className='hover:text-white cursor-pointer'>Contact</li>
            </ul>
        </div>
        
        {/* Hamburger Icon */}
        <div className='md:hidden'>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='focus:outline-none'
            >
                {isMenuOpen ? (
                    // X icon when menu is open
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger icon when menu is closed
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className='absolute top-16 left-0 right-0 bg-gray-800 md:hidden'>
                <ul className='flex flex-col text-gray-300 px-16 py-4'>
                    <li className='hover:text-white cursor-pointer py-2'>Home</li>
                    <li className='hover:text-white cursor-pointer py-2'>Posts</li>
                    <li className='hover:text-white cursor-pointer py-2'>About</li>
                    <li className='hover:text-white cursor-pointer py-2'>Contact</li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Navbar