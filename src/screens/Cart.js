import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
//import trash from "../trash.svg"
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className=' m-3 w-3 text-center fs-3' >The Cart is Empty!</div>
      </div>
    )
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    }
    );
    console.log("order Response:", response)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }


  let totalPrice = data.reduce((total, fruits) => total + fruits.price, 0)
  return (
    <div style={{ background: 'linear-gradient(15deg, #000000, #2c3227, #000000)', height: '600px', overflowY: 'auto' }}>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md'>
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col'>No.Items</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((fruits, index) => (
              <tr key={index}>
                <th scope='row' style={{ fontSize: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {index + 1}
                    <img src={fruits.img} alt="item" style={{ height: "50px", width: "50px", objectFit: "cover", marginLeft: "10px" }} />
                  </div>
                </th>
                <td style={{ fontSize: '22px' }}>{fruits.name}</td>
                <td style={{ fontSize: '22px' }}>{fruits.qty}</td>
                <td style={{ fontSize: '22px' }}>{fruits.size}</td>
                <td style={{ fontSize: '22px' }}>{fruits.price}</td>
                <td style={{ alignItems: 'center' }}>
                  <button type='button' className='btn bg-danger' onClick={() => { dispatch({ type: 'REMOVE', index: index }); }}> Delete </button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
        <div>
          <h1 className='fs-2'>Total Price: {totalPrice}/=</h1>
        </div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}> Check Out </button>
        </div>
      </div>
    </div>
  )
}
