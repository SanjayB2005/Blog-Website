import React, { useState, useEffect } from 'react'
import PostCard from '../cards/PostCard'
import axios from 'axios'

const PostList = () => {

    const [Posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await axios.get("http://localhost:8000/api/posts")
        setPosts(response.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

  return (
    <>
    <h1 className='font-semibold text-4xl mt-4 mb-4 px-4 sm:px-8 md:px-16'>Latest Posts</h1>
    <div className='flex flex-col md:flex-row bg-gray-100 min-h-screen px-4 sm:px-8 md:px-16 justify-between'>
        
        {/* Main Content Section */}
    <div className='flex flex-col gap-4 mt-4 w-full'>

        {/* Post Cards */}

        {Posts.length === 0 ? (
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className='text-2xl font-semibold'>No Posts Available</h1>
                <p className='text-gray-600'>Please check back later.</p>
            </div>
        ) : 
        Posts.map((Post) => {
           return <PostCard key={Post._id} Post={Post} />
        })
    
        }
        
    </div>

        {/* Sidebar Section */}
        <div className='flex flex-col gap-4 mb-6 w-full md:w-1/3 md:ml-10 mt-6 md:mt-4'>
            <div className='flex flex-col border-2 border-gray-300 rounded-lg shadow-lg p-4'>
                    <h1 className='font-semibold font-lg'>About Me</h1>
                    <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat ac ligula facilisis commodo. Sed ut dui a odio aliquet faucibus.</p>
            </div>
            <div className='flex flex-col border-2 border-gray-300 mt-6 rounded-lg shadow-lg p-4'>
                <h1 className='font-semibold font-lg'>Categories</h1>
                <ul className='space-y-[-1px] mt-4'>
                    <a href='#'><li className='border-2 border-gray-300 p-1'>Category 1</li></a>
                    <a href='#'><li className='border-2 border-gray-300 p-1'>Category 2</li></a>
                    <a href='#'><li className='border-2 border-gray-300 p-1'>Category 3</li></a>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default PostList