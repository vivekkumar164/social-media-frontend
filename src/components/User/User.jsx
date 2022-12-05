import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../Actions/userAction';

const User = ({ person }) => {

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following,setFollowing] = useState(person.followers.includes(user._id))

    const handleFollow = () =>{
        console.log('following',person.followers);
        console.log('user._id',user._id);
        console.log('following',following);
        following ?   
        dispatch(unFollowUser(person._id,user)) : dispatch(followUser(person._id,user));
        setFollowing((prev) => !prev)
    }
    return (
        <div className="follower">
            <div>
                <img src={person?.profilePicture ? serverPublic + person.profilePicture : serverPublic + "deafultProfile.jpg"} className="followerImage" alt="" />
                <div className="name">
                    <span>{person.firstName}</span>
                    <span>{person.userName}</span>
                </div>
            </div>
            <button onClick={handleFollow} className={ following ? "button fc-button unfollowButton" : "button fc-button"}>
                {following ? "Unfollow":"Follow"}
            </button>
        </div>
    )
}

export default User