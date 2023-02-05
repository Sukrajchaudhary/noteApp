import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {

  //const host = "http://localhost:5000"
  const [credintials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",

  })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credintials;
  }
  const onChange = (e) => {
    setCredentials({ ...credintials, [e.target.name]: e.target.value })

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label htmFor="name" className="form-label">Enter Your Name</label>
          <input type="text" className="form-control" id="name" name='name' placeholder='Enter Your UserName' aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' placeholder='Enter Email Address' aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder='Enter Password' name='password' onChange={onChange} />
        </div>

        <div className="mb-3">
          <label htmFor="cpassword" className="form-label">Comform Password</label>
          <input type="password" className="form-control" id="cpassword" placeholder='Re-entered your Password' name='cpassword' onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>



    </div>
  )
}

export default Signup