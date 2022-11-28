import React from 'react'
import { postData } from '../../Data/PostData'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {
  return (
    <div className='Posts'>
        {postData.map((post,id)=>{
            return <Post data={post} id={id} />
        })}
    </div>
  )
}

export default Posts