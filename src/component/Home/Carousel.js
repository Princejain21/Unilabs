import React from 'react'
import './Carousel.css'
export default function Carousel() {
  return (
    <div>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators circle">
    <li data-target="#carouselExampleIndicators " data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 image" src={require('./images/Caraousel.jpg')} alt="First slide"/>
      <div className="carousel-caption m-auto d-block ">
        <h1 className='animated fadeInRight '>
            this is the first slide of carousel
        </h1>
        <p className='paraFont animated fadeInLeft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis.</p>
        <button className='btn btn-outline-danger text-white animated zoomIn'> Know more<i className='fas fa-arrow-right fonticonSize' ></i></button>
    </div>
     
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 image" src={require('./images/Caraousel.jpg')} alt="Second slide"/>
    <div className="carousel-caption m-auto d-block ">
        <h1 className='animated fadeInLeft'>
            this is the second slide of carousel
        </h1>
        <p className='paraFont animated fadeInRight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis.</p>
        <button className='btn btn-outline-danger text-white animated zoomIn'> Know more</button>
    </div>

    </div>
    <div className="carousel-item">
      <img className="d-block w-100 image" src={require('./images/Caraousel.jpg')} alt="Third slide"/>
      <div className="carousel-caption m-auto d-block ">
        <h1 className='animated fadeInRight'>
            this is the third slide of carousel
        </h1>
        <p className='paraFont animated fadeInLeft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis.</p>
        <button className='btn btn-outline-danger text-white animated zoomIn'> Know more<i className='fas fa-arrow-right fonticonSize' ></i></button>
    </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}
