import React from 'react'

const PostCard = ({Post}) => {
  return (
    <div className='flex flex-col gap-4 mt-4 mb-2 w-full'>
            
            <div className='flex flex-col sm:flex-row border-2 border-gray-300 rounded-lg shadow-lg p-4'>
                <div className='w-full sm:w-auto'>
                    <img src={Post.image} alt="Post Thumbnail" className="w-full h-48 object-cover" />
                </div>
                
                <div className='flex flex-col leading-10 mt-4 sm:mt-0 sm:ml-10'>
                    <h2>{Post.title}</h2>
                    <p>{Post.content.substr(0,80)}...</p>
                    <button className="bg-blue-500 text-white mt-4 rounded cursor-pointer w-32">Read More</button>
                </div>
            </div>
        </div>
  )
}

export default PostCard