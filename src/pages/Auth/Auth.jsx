import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="WebName">

                    <h1>Vk Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            {/* <SignUp /> */}
            <Login />
        </div>
    )
}

const SignUp = () => {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign Up</h3>

                <div>
                    <input type="text" placeholder='first name' className='InfoInput' name='firstName' />
                    <input type="text" placeholder='last name' className='InfoInput' name='lastName' />
                </div>

                <div>
                    <input type="text" placeholder='User name' className='InfoInput' name='userName' />
                </div>

                <div>
                    <input type="text" placeholder='Password' className='InfoInput' name='password' />
                    <input type="text" placeholder='Confirm Password' className='InfoInput' name='ConfirmPassword' />
                </div>

                <div>
                    <span style={{fontSize:'12px'}}>Alraedy have an account? Login!</span>
                </div>

                <button type='submit' className="button info-button">
                    SignUp
                </button>
            </form>
        </div>
    )
}


const Login = () => {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Log In</h3>

                <div>
                    <input type="text" placeholder='UserName' className='InfoInput' name='UserName' />
                </div>

                <div>
                    <input type="text" placeholder='Password' className='InfoInput' name='Password' />
                </div>

               

                <div>
                    <span style={{fontSize:'12px'}}>Dont have an account? SignUp !</span>
                </div>

                <button type='submit' className="button info-button">
                    Login
                </button>
            </form>
        </div>
    )
}
export default Auth