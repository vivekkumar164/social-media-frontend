import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './Postside.css'

const Postside = () => {
  return (
    <div className='Postside'>
        <PostShare />
        <Posts />
    </div>
  )
}

export default Postside