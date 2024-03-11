import React from 'react'


export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <form className="d-flex" >
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://images.squarespace-cdn.com/content/v1/56589c6ae4b0060cdb612af7/1519518990262-D6J17EQW89734TQ6FOUR/fraise+quebec.jpg?format=1500w" className="d-block h-20 w-100" style={{filter:"brightness(70%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://makehaysunshine.com/cdn/shop/files/19_May-5027_Large_442eb50c-0464-4b27-8ed3-962f6bd49c64_1350x.png?v=1655451368cd menrapp
                        " className="d-block h-20 w-100" style={{filter:"brightness(70%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.fruitdelivery.com.sg/image/cache/catalog/mainbanner/fruitdelivery-fruits-selection-1903x838.jpg" className="d-block h-20 w-100" style={{filter:"brightness(75%)"}} alt="..." />
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
    )
}
