import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./Profileside.css"

const Profileside = () => {
  return (
    <div className='profileSide'>
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default Profileside