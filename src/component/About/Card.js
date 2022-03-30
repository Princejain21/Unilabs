import React from 'react'
import './About.css'

export default function Card(props) {
  return (
    <>
        <div className={`col-sm-3 px-2 my-5 animated fadeIn${props.animation} ${props.padding} container  card iconColor`}>
          <i className="material-icons text-left iconSize ">event_note</i>
          <h3 className='pt-5 text-white'>{props.head}</h3><br />
          <p className='text-justify paraFont text-white'>{props.para}</p>
          <br />
          <a href="#f" className={`link ${props.fixedSize}`}>Know More &#8594;</a>
        </div>

    </>
  )
}
