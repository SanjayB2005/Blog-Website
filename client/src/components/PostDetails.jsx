import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {

const [Post, setPost] = useState(null);
const {id} = useParams();

const fetchPost = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/api/posts/${id}`)
        setPost(response.data);
    } catch (error) {
        console.error("Error fetching post:", error);
    }

}

useEffect(() => {
    fetchPost();
}, [])

if(!Post) {
    return <div>Loading...</div>;
}

const formatDate = Intl.DateTimeFormat('en-US', {
    month:'long',
    day: 'numeric',
    year: 'numeric'

}).format(new Date(Post.createdAt))



  return (
    <div className='flex flex-col px-16 mt-10 '>
        <h1 className='font-semibold text-4xl'>{Post.title}</h1>
        <p className='mt-4 mb-3'>{formatDate} by <span className='text-blue-600 underline cursor-pointer'>{Post.author}</span></p>
        <img src={Post.image} alt="Blog Post" className='w-[200px]' />
        <p className="mt-4 max-w-[700px] leading-8">{Post.content}</p>
    </div>
  )
}

export default PostDetails