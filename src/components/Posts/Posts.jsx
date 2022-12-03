import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../Actions/postAction'
import { postData } from '../../Data/PostData'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {

  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.authReducer.authData);
  const {posts,loading} = useSelector((state)=>state.postReducer);

  useEffect(()=>{
   // console.log('user-------------->',user.data.user._id);
    console.log('user-------------->',user);
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