import React from 'react'
import './Carousel.css'
import Section33 from './Section33'
import Section34 from './Section34'

export default function Section31() {
    const prince1={
        h1:'Latest Projects',
        c1:'Orange Power ',
        c2:'Home Automation system',
        c3:'Utrac',
        c4:'Temperature control',
        c5:'Temperature control',
        c6:'AC Monitoring',
        c7:'Smart Farm Monitor',
        c8:'Energy Monitering Device',
        c9:'AQM Device',
      }

    return (
        <>
            <div className="row justify-content-center text-center text-white " style={{ backgroundColor: 'black' }}>
                <div className="col-4  text-center py-5">
                    <h1 className='headingFont' >About us</h1>
                    <p className='paraFont'>We are a leading next-generation digital services and electronic startup Company</p>
                </div>
                <Section33 />
               <Section34 data={prince1}/>
            </div>

        </>
    )
}
