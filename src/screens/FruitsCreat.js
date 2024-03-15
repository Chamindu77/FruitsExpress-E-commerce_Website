import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function FruitsUpdate() {
  const [categoryName, setCategoryName] = useState('');
  const [fruitName, setFruitName] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [price, setPrice] = useState({ Small: '', Medium: '', Large: '' });
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/fruits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CategoryName: categoryName,
          name: fruitName,
          img: imageLink,
          options: [{ ...price }],
          description: description,
        }),
      });
      if (response.ok) {
        alert('Fruit Added!');
        navigate('/admin');
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };


  return (
    <>
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

                        </ul>
                            <div>
                                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
      <div
        style={{
          background: 'linear-gradient(15deg, #000000, #2c3227, #000000)',
          display: 'flex',
          height: '81vh',
        }}
      >
        <div className='container d-flex justify-content-center align-items-center' style={{ width: '50%' }}>
          <form onSubmit={handleFormSubmit} style={{ width: '500px' }}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Category Name :</label>
              <input
                type="text"
                className="form-control"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                style={{ width: "450px" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Fruit Name :</label>
              <input
                type="text"
                className="form-control"
                value={fruitName}
                onChange={(e) => setFruitName(e.target.value)}
                style={{ width: "450px" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Image Link</label>
              <input
                type="text"
                className="form-control"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                style={{ width: "450px" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Price (Rs.) :</label>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '30%' }}>
                  <label htmlFor="small" style={{ display: 'block' }}>Small:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={price.Small}
                    onChange={(e) => setPrice({ ...price, Small: e.target.value })}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ width: '30%' }}>
                  <label htmlFor="medium" style={{ display: 'block' }}>Medium:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={price.Medium}
                    onChange={(e) => setPrice({ ...price, Medium: e.target.value })}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ width: '30%' }}>
                  <label htmlFor="large" style={{ display: 'block' }}>Large:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={price.Large}
                    onChange={(e) => setPrice({ ...price, Large: e.target.value })}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: "450px" }}
              />
            </div>
            <button type="submit" className="m-3 btn btn-success">Create Item</button>
            <button type="Back" className="m-3 btn btn-danger">Back</button>
          </form>
        </div>
        <div
          style={{
            position: 'relative',
            width: '50%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '40px',
              right: '200px',
              bottom: '70px',
              border: '10px solid black',
              zIndex: 1,
            }}
          >
            <div
              style={{
                backgroundImage:
                  'url("https://resources.ediblearrangements.com/resources/en-us/i/a/o_o_DeliveryFruitBox_CYOB2_410x410.jpg")',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'absolute',
              }}
            />
          </div>
        </div>
      </div>
      
    </>
  );
}
