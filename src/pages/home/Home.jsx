import React from 'react'
import Postside from '../../components/PostSide/Postside'
import Profileside from '../../components/profileside/Profileside'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
      <Profileside />
      <Postside />
      <RightSide />

    </div>
  )
}

export default Home