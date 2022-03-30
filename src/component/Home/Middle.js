import React from 'react'
import Footer from '../Footer/Footer'
import Carousel from './Carousel'
import './Carousel.css'
import Section3 from './Section3'
import Section31 from './Section31'
import Section32 from './Section32'

export default function Middle() {
    return (
        <>

        <Carousel/>
            <div className="row text-white justify-content-around p-5" style={{ backgroundColor: '#09090a' }}>
                <div className="col-md-4 py-5">
                    <p className="text-warning paraFont"> A RANGE OF</p>
                    <h1>CAPABILITIES</h1><br />
                    <p className='paraFont'>Whether you need development and research services, specialist outsourcing, embedded systems services or
                        consulting, we can get you the right mix of services that you need.</p><br />
                    <button className="btn btn-outline-danger">Contact Us <i className='fas fa-arrow-right fonticonSize' ></i> </button>
                </div>
                <div className="col-md-4 mt-5">
                    <div className="row m-auto text-center animated fadeInUp" style={{ animationDelay: '.5s' }}>
                        <div className="col-5   box ">
                            <i className="material-icons " >event_note</i>
                            <h5 className="my-2">ARTIFICIAL INTELLIGENCE</h5>
                        </div>
                        <div className="col-5  box">
                            <i className="material-icons" >event_note</i>
                            <h5 className="my-2">EMBEDED SYSTEM</h5>
                        </div>
                        <div className="col-5  box">
                            <i className="material-icons" >event_note</i>
                            <h5 className="my-2">INTERNET OF THING</h5>
                        </div>
                        <div className="col-5  box">
                            <i className="material-icons" >event_note</i>
                            <h5 className="my-2">PRODUCT R&D</h5>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row text-white" style={{ backgroundColor: "#0b1c36" }}>
                <div className="col-9 container py-5">
                    <h1 className='headingFont'>Latest Developments</h1>
                    <p className='paraFont'>We build vital systems to deliver outcomes.</p>
                </div>
                <Section3 />
                <div className="col-12 section ">
                    <div className="col-md-6 py-5 ml-auto ">
                        <h1 className='animated bounceInRight headingFont'>Internal audit and the <br /><span className="light">Critical Infrastructure</span></h1>
                        <p className='animated bounceInLeft paraFont' style={{ animationDelay: '1s' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab consequatur eveniet reprehenderit
                            ipsum rem aut magnam harum minima voluptatibus veritatis?</p>
                        <button className="btn btn-outline-danger text-white animated zoomIn" style={{ animationDelay: '1s' }}>Know More <i className='fas fa-arrow-right fonticonSize' ></i></button>
                    </div>
                </div>
                <Section3 />
            </div>
            <Section31/>
            <Section32/>
            <Footer/>


        </>
    )
}
