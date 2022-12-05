import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTimelinePosts } from '../../Actions/postAction'
import { postData } from '../../Data/PostData'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {

  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.authReducer.authData);
  let {posts,loading} = useSelector((state)=>state.postReducer);
  const param = useParams();

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[]);

  if(!posts) return "no posts";
  if(param.id) posts = posts.filter((post) => post.userId === param.id)

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