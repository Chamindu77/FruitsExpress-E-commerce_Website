import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/creatuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        if (json.success) {
            alert("Singup has been Successfull")
            
        }


    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
                <div style={{ flex: 1, position: "relative" }}>
                    <div style={{ position: "relative", width: "112%", height: "100vh", overflow: "hidden" }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/yN-JELUrVAE?autoplay=1&controls=0&loop=1&playlist=yN-JELUrVAE&mute=1"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: "absolute", top: "0", left: "0", width: "150%", height: "100%" }}
                        ></iframe>
                    </div>
                </div>
                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", background: 'linear-gradient(85deg, #000000, #013220, #000000)', padding: "20px" }}>
                    <form style={{ width: "70%" }} onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} style={{ width: "100%" }} />
                            <div id="passwordHelp" className="form-text"> Name must be at least 4 characters.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "100%" }} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1" style={{ width: "100%" }} />
                            <div id="passwordHelp" className="form-text">Password must be at least 5 characters.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                            <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange} style={{ width: "100%" }} />
                            <div id="passwordHelp" className="form-text">Address to be delivered</div>
                        </div>

                        <button type="submit" className="m-3 btn btn-success">Submit</button>
                        <Link to="/login" className="m-3 btn btn-danger">Login</Link>
                        
                        
                    </form>
                </div>
            </div>

        </>
    )
}
