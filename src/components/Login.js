import React, { useState } from 'react'
import LoginCss from './Login.module.css'
import img from './1.jpg'
const Login = (props) => {
    const [credintials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const onChange = (e) => {
        setCredentials({
            ...credintials,
            [e.target.name]: e.target.value
        })


    }
    return (
        <div>
            <div className={LoginCss.container}>
                <div className="row">
                    <h1 className={LoginCss.h}>Please Login From Here:</h1>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="htmlform-label">Email address</label>
                                <input type="email" name='email' value={credintials.email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="htmlform-label">Password</label>
                                <input type="password" name='password' onChange={onChange} value={credintials.password} className="form-control" id="password" />
                            </div>

                            <button type="submit" className={LoginCss.btn}  >Submit</button>
                        </form>

                    </div>
                    <div className="col-md-6">
                        <div className={LoginCss.i}>
                            <img className={LoginCss.images} src={img} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login