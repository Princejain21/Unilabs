import React from 'react'
import './Footer.css'
import Image from '../Home/images/Logo.jpg'

export default function Footer() {
  return (
    <footer className='w-100' style={{backgroundColor:"black"}}>
        <div className="row justify-content-around p-5 text-white">
            <div className="col-md-4 ">
               <div className="row mx-auto">
                    <div className="col-9">
                        <img src={Image} className='w-50' alt='...'/>
                        <p className="pt-5"> <b>Subscribe</b><br/>Stay up-to-date with our latest insights</p>
                    </div>

                    <div className="col-8 ">
                     <div className="form-group">
                         <label className="sr-only">Email:</label>
                         <input type="email" className="form-control border  text-white inputBackgroud" placeholder="Email address" style={{backgroundColor:"black"}}/>
                      </div>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-warning text-white">Submit</button>
                    </div>
               </div>
            </div>
            <div className="col-md-7">
                <div className="row justify-content-start mt-5 pt-5 text-white">
                    <div className="col col-md-3 col-sm-2"><p> About Us</p></div>
                    <div className="col col-md-3 col-sm-2">Contact Us</div>
                    <div className="col col-md-3 col-sm-2">Cookie Policy</div>
                    <div className="col col-md-3 col-sm-2">Privacy Policy</div>
                    <div className="w-100"></div>
                    <div className="col col-md-3 col-sm-2 my-4">Terms of Use </div>
                    <div className="col col-md-3 col-sm-2 my-4">Locate Us</div>
                    <div className="w-100"></div>
                    <div className="col col-sm-6  ">
                        <div className="row d-flex flex-row">
                            <div className="col-3">
                                <span className="icone"> <i className="fab fa-facebook"></i></span>
                            </div>

                            <div className="col-3">
                                <span className="icone"><i className="fab fa-instagram"></i></span>
                            </div>
                            <div className="col-3">
                                <span className="icone"><i className="fab fa-twitter"></i> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-11 pt-5 my-1'>
        <p className=" text-white">© 2021 Uniolabs. All Rights Reserved</p>
            </div>
        </div>
    </footer>

  )
}
