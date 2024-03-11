import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../Model';
import Cart from '../screens/Cart';
import {useCart} from '../components/ContextReducer';


export default function Navbar() {
    const [cartView, setCartView] = useState(false)
    let data =useCart();
    const navigate =useNavigate();
    const handleLogout =()=>{
        localStorage.removeItem("authToken");
        navigate("/")
    }




    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid" style={{/*background: 'linear-gradient(to right, #000000, #2e8b57,#2e8b57, #000000)' backgroundColor: '#013220'*/ background: 'linear-gradient(to right, #000000,#2e8b57, #000000)'}}>
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FruitsExpress</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/about">About</Link>
                            </li>

                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" to="/myOrder">My Order</Link>
                                </li>
                                : ""
                            }




                        </ul>

                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>

                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/creatuser">SignUp</Link>

                            </div>
                            :
                            <div>
                                <div className='btn bg-white text-success mx-2' onClick={()=>setCartView(true)}>
                                    My Cart {" "}
                                    <Badge pill bg = 'danger'>{data.length}</Badge>
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart/></Modal> :null}
                                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}
