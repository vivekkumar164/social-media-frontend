import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ProfileCard = ({location}) => {

    const { user } = useSelector((state) => state.authReducer.authData);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
   
    const posts = useSelector((state)=>state.postReducer.posts)
    
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={user?.coverPicture ? serverPublic + user.coverPicture : serverPublic + "deafultCover.jpg" } alt="" />
                <img src={user?.profilePicture ? serverPublic + user.profilePicture : serverPublic + "deafultProfile.jpg"} alt="" />
            </div>

            <div className="ProfileName">
                <span>{user.firstName} {user.lastName}</span>
                <span>{user.worksAt ? user.worksAt :'Write bout yourself'}</span>
            </div>

            <div className="FollowStatus">
                <hr />
                <div>
                    <div className="Follow">
                        <span>{user.following.length}</span>
                        <span>Following</span>
                    </div>

                    <div className="VerticalLine">

                    </div>

                    <div className="Follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>

                    {location == 'profilePage' && (
                        <>
                            <div className="VerticalLine">

                            </div>

                            <div className="follow">
                                <span>{posts.filter((post)=> post.userId === user._id).length}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>

            
            {location ?  <span>
                <Link style={{textDecoration:"none", color:'inherit'}} to = {`/profile/${user._id}` } >My Profile</Link>
                </span> : " "}

        </div>
    )
}

export default ProfileCard