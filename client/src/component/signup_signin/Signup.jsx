import React, { useState } from 'react'
import { Divider } from '@mui/material';
import { NavLink } from "react-router-dom";
import './Signup_in.css'
const Signup = () => {
    const [user, setUser] = useState({
        fname: "",
        password: "",
        email: "",
        cpassword: "",
        phone: ""
    })
    const handleInput = (e) => {
        let name = e.target.nanme
        let value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form onSubmit={handleSubmit} >
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                onChange={handleInput}
                                value={user.fname}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email"
                                onChange={handleInput}
                                value={user.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile"
                                onChange={handleInput}
                                value={user.mobile}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={handleInput}
                                value={user.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Password again</label>
                            <input type="password" name="cpassword"
                                onChange={handleInput}
                                value={user.cpassword}
                                id="passwordg" />
                        </div>
                        <button type="submit" className="signin_btn">Continue</button>

                        <Divider />

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Signup