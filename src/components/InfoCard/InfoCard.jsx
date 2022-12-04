import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import * as UserApi from '../../api/UserRequest.js'
import { useParams } from 'react-router-dom';
import { logout } from '../../Actions/AuthAction';


const InfoCard = () => {

    const [modalOpened, setModalOpened]= useState(false);

    const dispatch = useDispatch();
    const params = useParams();

    const profileUserId = params.id;
    const [profileUser,setProfileUser] = useState({});

    const {user} = useSelector((state)=>state.authReducer.authData.data)

 useEffect(()=>{
    const fetchProfileUser = async()=>{
        if(profileUserId == user._id){
            setProfileUser(user);
            console.log('profileUser',profileUser);
        }else{
           const  profileUser = await UserApi.getUser(profileUserId);
           setProfileUser(profileUser);
           console.log('profileUser',profileUser);
        }
    }
    console.log('fetching usert')
    fetchProfileUser();
 },[user]);

 const handleLogout = () =>{
    dispatch(logout())
 }

  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Profile Info</h4>
            {user._id === profileUserId ? (
                 <div>
                 <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)} />
                 <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
                 </div>
            ) : ''
            
            }
           
            
        </div>

        <div className="info">
            <span><b>Status </b></span>
            <span>{profileUser.relationshipStatus}</span>
        </div>
        <div className="info">
            <span><b>Lives In </b></span>
            <span>{profileUser.livesIn}</span>
        </div>
        <div className="info">
            <span><b>Works At </b></span>
            <span>{profileUser.worksAt}</span>
        </div>

        <button className="button logout-button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default InfoCard