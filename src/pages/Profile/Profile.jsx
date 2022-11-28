import React from 'react'
import Postside from '../../components/PostSide/Postside'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft />

        <div className="profile-center">
            <ProfileCard />
            <Postside />
        </div>

        <RightSide />
    </div>
  )
}

export default Profile