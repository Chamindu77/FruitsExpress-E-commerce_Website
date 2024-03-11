import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {

  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let Navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if (json.success) {
      if(json.data.isAdmin===false){
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        
        console.log(localStorage.getItem("authToken"));
        Navigate("/userpage");
        
      }else{
        alert("Your are Loging As a Admin");
        Navigate("/admin")
      }
    }


  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div style={{
        background: 'linear-gradient(15deg, #000000, #2c3227, #000000)',
        display: 'flex',
        height: '100vh',
      }}>
        <div className='container d-flex justify-content-center align-items-center' style={{ width: '50%' }}>
          <form onSubmit={handleSubmit} style={{ width: '500px' }}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "450px" }} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
              <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" style={{ width: "450px" }} />
            </div>

            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/creatuser" className='m-3 btn btn-danger'>New User</Link>
          </form>
        </div>
        <div
          style={{
            backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/01/31/98/00/1000_F_131980014_2sV0fUKEbsbRMsn9tEn4ZLXv17JRv9qo.jpg")',
            width: '85%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
        </div>
      </div>

    </>
  );

}
