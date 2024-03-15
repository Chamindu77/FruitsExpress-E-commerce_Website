import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'
export default function UserCard(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleAddToCart = async () => {
    let fruits = []
    alert("Added to Cart")
    for (const item of data) {
      if (item.id === props.fruitsData._id) {
        
        fruits = item;
        break;
      }
    }
    if (fruits != []) {
      if (fruits.size === size) {
        await dispatch({ type: "UPDATE", id: props.fruitsData._id, price: finalPrice, qty: qty })
        return
      }
      else if (fruits.size !== size) {

        await dispatch({ type: "ADD", id: props.fruitsData._id, name: props.fruitsData.name,img: props.fruitsData.img, price: finalPrice, qty: qty, size: size })
        return
        //console.log(data)
      }
      return
    }
    await dispatch({ type: "ADD", id: props.fruitsData._id, name: props.fruitsData.name,img: props.fruitsData.img, price: finalPrice, qty: qty, size: size })

  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  return (
    
    <div >
      
      <div className="card mt-3" style={{ "width": "16rem", "maxHeigth": "360px" }} >
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
          <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
