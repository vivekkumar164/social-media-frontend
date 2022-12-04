import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../Actions/postAction'
import { postData } from '../../Data/PostData'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {

  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.authReducer.authData.data);
  const {posts,loading} = useSelector((state)=>state.postReducer);

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])
  return (
    <div className='Posts'>
        {
        loading ? "Fetching posts..." : 
        posts.map((post,id)=>{
            return <Post data={post} id={id} />
        })}
    </div>
  )
}

export default Posts