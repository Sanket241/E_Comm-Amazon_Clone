import React from 'react'
import './Signup_in.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Signin = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="./blacklogoamazon.png" alt="signupimg" />
                    </div>
                    <div className="sign_form">
                        <form onSubmit={handlesubmit} >
                            <h1>Sign-In</h1>

                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email"
                                    onChange={handleInput}
                                    value={user.email}
                                    id="email" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password"
                                    onChange={handleInput}
                                    value={user.password}
                                    id="password" placeholder="At least 6 characters" />
                            </div>
                            <button className="signin_btn">Continue</button>
                        </form>

                    </div>
                    <div className="create_accountinfo">
                        <p>New to Amazon?</p>
                        <button>  <NavLink to="/signup">Create your Amazon Account</NavLink></button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Signin