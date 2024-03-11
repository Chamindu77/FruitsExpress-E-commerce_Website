import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//import { useHistory } from 'react-router-dom';
export default function AdminCard(props) {
  
  //let history = useHistory();
  const navigate = useNavigate();
  
  const priceRef = useRef();
  let options = props.options;
  const id = props.fruitsData._id;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleUpdate = () => {
    // Redirect to the Fruits Update page
    navigate(`/fruitsupdate/${id}`)
    
    
  };


  
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/fruits/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Deleted data:', data);
      navigate('/admin');
      // Add logic to handle UI update or any other required operation after successful deletion
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    
    <div >
      
      <div className="card mt-3" style={{ "width": "18rem", "maxHeigth": "360px" }} >
        <img src={props.fruitsData.img} className="card-img-top" alt="..." style={{ height: "170px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.fruitsData.name}</h5>
          <p className="card-text text-muted" >{props.fruitsData.description}</p>

          <div className='container w-100 p-0' >
            <select className="m-2 h-100 w-20 bg-success text-black rounded" onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 bg-success text-black rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {priceOptions.map((data) =>
                data !== "_id" ? (
                  <option key={data} value={data}>
                    {data}
                  </option>
              ) : null
            )}
            </select>
            <div className=' d-inline ms-2 h-100 fs-5' >
              Rs.{finalPrice}/=
            </div>
          </div>
          <hr>
          </hr>
          <button className={'btn btn-success justify-center ms-2'} onClick={handleUpdate}>Update</button>
          <button className={'btn btn-danger justify-center ms-2'} onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}
