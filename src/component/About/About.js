import React from 'react'
import Carousel from '../Home/Carousel'
import Footer from '../Footer/Footer'
import './About.css'
import Card from './Card'
import Section33 from '../Home/Section33'
import Section34 from '../Home/Section34'
export default function About() {
  const prince={
    h1:'Our Partners',
    c1:'Company 1 ',
    c2:'Company 2',
    c3:'Company 3',
    c4:'Company 4',
    c5:'Company 5',
    c6:'Company 6',
    c7:'Company 7',
    c8:'Company 8',
    c9:'Company 9',
  }


  return (
    <>
      <Carousel />
      <div className="row rowe justify-content-around text-white  ">

        <div className="col-11 py-3 "></div>
        <div className="w-100"></div>
        <div className="col col-md-5 px-4 mb-4"><p className='animated fadeInDown'>Overview</p>

          <h5 className='headingFont animated fadeInUp' style={{ animationDelay: '1s' }}>We research, develop & build digital services and electronic products custom tailred for your business
            needs.
          </h5>
        </div>
        <div className="col px-4 col-md-5"><br />
          <p className='paraFont text-secondary text-weight-bold animated fadeInRight' style={{ animationDelay: '1.5s' }}>
            Fuelled by our desire to create, well designed and technologically superior software’s, we at UNIO Private labs , believe in redefining your customer service experience through our embedded solutions for your home's and work places.Our softwares, are here to help you simplify, your various requirements for a smarter future. We believe in providing you an exceptional pre and post service experience, with the help of our highly efficient team which look after your minute requirements . Our desire to provide you with well engineered solutions, keeps us motivated.
          </p>
        </div>
      </div>
      <div className='row rowe justify-content-center text-white py-5'>
      <div className='col-sm-4'><h1 className='text-center py-5 animated fadeInRight'>Our Numbers</h1></div>
       <Section33 />

        {/* here We are a leading next-generation digital services and electronic startup Company */}
        <div className='col-sm-4 pt-5'>
          <h1 className='text-center text-white pt-5'>Services we Provide</h1><br />
        </div>
      </div>
      <div className='row rowe m-auto '>

      <Card head='Artificial Intelligence'  animation='Right' fixedSize='pt-5' padding='py-5' para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro doloremque maiores totam in cum tempore impedit rerum dicta architecto aperiam quasi aspernatur non suscipit ut nostrum fuga magnam voluptas!" />
      <Card head='Embedded Systems' animation='Right'  padding='py-5' para="Our state-of-the-art embedded solutions for your enterprise allow you to transform your product ideas as per your ordinances and encourage us to respond promptly to the changing industry, IT, and consumer-centric environments. We provide end-to-end customized solutions for your computing systems from their conception up to the development process.!" />
      <div className='w-100'></div>
      <Card head='Internet of things' animation='Left'  fixedSize='pt-5' padding='py-5' para="The global pandemic pushed the focus on Internet of Things (IoT) technologies from proof-of-concept to operational necessity. For enterprises to be flexible and scalable it is need of the hour to make decisions that are data driven. With data-driven enterprises and ingenious services, we assure you reliable and flexible solutions which could help you to merge within the industry seamlessly." />
      <Card head='Product R&D' padding='py-5' animation='Left'  para="We at Uniolabs work to ensure timely solutions for your product development needs. With wide range of services that vary from layout, project administration to execution, analytics, training, and assistance we make sure to cover all your product development needs. Our dedication towards bringing you the perfect solutions has made us amongst the most trusted companies in the industry, we apply proven best techniques by allowing you to expand your perception while overseeing the stakes." />
      <Section34 data={prince}/>

      <div className='col-8 mx-auto bg-primary text-white p-5 my-5 mx-3 '>
        <h1>Let's help you navigate <br/> your next</h1><br/>
        <button className='btn btn-outline-danger text-white my-3'>Contact Us &#8594;</button>
      </div>

      </div>

      <Footer/>

    </>
  )
}
