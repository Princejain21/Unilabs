import React from 'react'
import './Nav.css'
import Image from '../Home/images/Logo.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg w-100 navbar-light sticky-top">
                <Link className="navbar-brand  w-50" to="#f"><img className='w-25' src={Image} alt='...'/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white" >&#9776;</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white " href="#f" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className="dropdown-menu itemNav" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/About">Action</Link>
                                <Link className="dropdown-item "to="/Uniolabs">Another action</Link>
                                <Link className="dropdown-item "to="/About">Something else here</Link>
                                <Link className="dropdown-item "to="/Uniolabs">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item prince">
                            <Link className="nav-link  prince" to="/About">Contact Us</Link>
                        </li>
                        <li className="nav-item prince">
                            <Link className="nav-link  prince" to="/Uniolabs">Careers</Link>
                        </li>
                        <li className="nav-item prince">
                            <Link className="nav-link  prince" to="/About">About Uniolabs</Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )
}
