import React from 'react'
import './Carousel.css'
import Section33 from './Section33'

export default function Section31() {
    return (
        <>
            <div className="row justify-content-center text-center text-white " style={{ backgroundColor: 'black' }}>
                <div className="col-4  text-center py-5">
                    <h1 className='headingFont' >About us</h1>
                    <p className='paraFont'>We are a leading next-generation digital services and electronic startup Company</p>
                </div>
                <Section33 />
                <div className="col-12 text-center py-5"><h1 className='headingFont animated fadeInRight'>Latest Project</h1></div>

                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>Orange Power</p>
                </div>
                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>Home Automation system
                        Utrac</p>
                </div>
                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>Utrac</p>
                </div>
                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>Temperature control</p>
                </div>
                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>Temperature control</p>
                </div>
                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>AC Monitoring</p>
                </div>
                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>Smart Farm Monitor</p>
                </div>
                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>
                        Energy Monitering Device</p>
                </div>
                <div className="col col-md-4 col-sm-6 text-secondary target">
                    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>AQM Device</p>
                </div>
            </div>

        </>
    )
}
