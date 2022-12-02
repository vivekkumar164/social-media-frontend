import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Login, Signup } from '../../Actions/AuthAction'


const Auth = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignup, setIsSignup] = useState(true);
    const [confirmPass, setConfirmPass] = useState(true);
    const [data, setData] = useState(
        {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            ConfirmPassword: ""
        }
    )

    

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            if (data.password === data.ConfirmPassword) {
                dispatch(Signup(data))
            } else {
                setConfirmPass(false);
            }
        } else {
            dispatch(Login(data));
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            ConfirmPassword: ""
        })
    }
    return (
        <div className='Auth'>
            {/* Left side  */}
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="WebName">

                    <h1>Vk Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            {/* Right side  */}
            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignup ? "Sign Up" : "Log In"}</h3>

                    {isSignup &&

                        <div>
                            <input onChange={handleChange} type="text" value={data.firstName}
                                placeholder='first name' className='InfoInput' name='firstName' />
                            <input onChange={handleChange} type="text" value={data.lastName}
                                placeholder='last name' className='InfoInput' name='lastName' />
                        </div>
                    }



                    <div>
                        <input onChange={handleChange} type="text" placeholder='User name'
                            className='InfoInput' name='userName' value={data.userName} />
                    </div>

                    <div>
                        <input onChange={handleChange} type="text" placeholder='Password'
                            className='InfoInput' name='password' value={data.password} />

                        {
                            isSignup &&
                            <input onChange={handleChange} type="text" placeholder='Confirm Password'
                                className='InfoInput' name='ConfirmPassword' value={data.ConfirmPassword} />
                        }

                    </div>

                    <span style={{
                        display: confirmPass ? "none" : "block",
                        color: 'red',
                        fontSize: '12px',
                        alignSelf: 'flex-end',
                        marginRight: '5px'
                    }}>
                        * Confirm password is not same.
                    </span>

                    <div>
                        <span style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => { setIsSignup((prev) => !prev); resetForm() }}>
                            {isSignup ? "Alraedy have an account? Login!" : "Dont have an account? SignUp !"}
                        </span>
                    </div>

                    <button type='submit' className="button info-button" disabled={loading}>
                        {loading? "loading...":isSignup ? "Sign Up" : "Log In" }
                    </button>
                </form>
            </div>
        </div>
    )
}


export default Auth