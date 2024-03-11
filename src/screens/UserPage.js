import React, { useEffect, useState } from 'react'
//import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/UserCard'


export default function UserPage() {

  const [search, setSearch] = useState('');
  const [fruitsCat, setFruitsCat] = useState([]);
  const [fruitsData, setFruitsData] = useState([]);
  //const [search, setSearch] = useState('')
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/fruits", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
    //console.log(response[1][0].CategoryName)
    setFruitsData(response)
    const fruitsCategory = [
      {
        "CategoryName": "Apple"
      },
      {
        "CategoryName": "Mango"
      },
      {
        "CategoryName": "Berries"
      },
      {
        "CategoryName": "Grapes"
      },
      {
        "CategoryName": "Mix Fruits"
      },
      {
        "CategoryName": "Gift Items"
      }
    ]
    setFruitsCat(fruitsCategory)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (

    <div style={{/*background: 'linear-gradient(to right, #000000, #2e8b57,#2e8b57, #000000)'*/ backgroundColor: '#013220' }}>
      <div> <Navbar /> </div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption' style={{ zIndex: "10" }}>
              <dev className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                
              </dev>
            </div>
            <div className="carousel-item active">
              <img src="https://www.fruitdelivery.com.sg/image/cache/catalog/mainbanner/fruitdelivery-fruits-selection-1903x838.jpg" className="d-block h-20 w-100" style={{ filter: "brightness(150%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/X5wBUyn5cyM?autoplay=1&controls=0&loop=1&playlist=X5wBUyn5cyM&mute=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", filter: "brightness(150%)" }}
                ></iframe>
              </div>

            </div>
            <div className="carousel-item">
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/dLC54mz--Dk?autoplay=1&controls=0&loop=1&playlist=dLC54mz--Dk&mute=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", filter: "brightness(150%)" }}
                ></iframe>
              </div>

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container' >
        {
          fruitsCat != []
            ? fruitsCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}

                </div>
                <hr />
                {fruitsData != []
                  ? fruitsData.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map(filterItems => {
                      return (
                        <div kley={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card fruitsData={filterItems}
                            options={filterItems.options[0]}

                          ></Card>
                        </div>
                      )
                    }

                    ) : <div>No such data found </div>
                }
              </div>
              )
            })
            : ""
        }

      </div>
      < div > <Footer /> </div >
    </div>

  )
}
