import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'


const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
            <span>vivek kumar</span>
            <span>UI Developer</span>
        </div>

        <div className="FollowStatus">
            <hr />
            <div>
                <div className="Follow">
                    <span>6,666</span>
                    <span>Followinggs</span>
                </div>

                <div className="VerticalLine">

                </div>

                <div className="Follow">
                    <span>6</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>

        <span>My Profile</span>
    </div>
  )
}

export default ProfileCard