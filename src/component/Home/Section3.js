import React from 'react'
import './Carousel.css'

export default function Section3() {
  return (
    <div className="col-10 container ">
            <div className="row justify-content-around py-5 my-5 animated fadeInDown" style={{animationDelay:'1s'}}>
                <div className="col-md-6 ">
                    <h1 className='headingFont'>Performance monitoring for <br/><span className="light">Critical Infrastructure</span></h1>
                    <p className='paraFont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab consequatur eveniet reprehenderit
                        ipsum rem aut magnam harum minima voluptatibus veritatis?</p>
                    <button className="btn btn-outline-danger text-white">Know More <i className='fas fa-arrow-right fonticonSize' ></i></button>
                </div>
                <div className="col-md-4 ">
                    <img className="img-fluid" src={require('./images/city-network.jpg')} alt="..."/>
                </div>
            </div>
        </div>
  )
}
