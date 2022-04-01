import React from 'react'

export default function Section34(props) {
    const {h1,c1,c2,c3,c4,c5,c6,c7,c8,c9}=props.data;
  return (
<>
<div className="col-12 text-center py-5">
        <h1 className='headingFont text-white animated fadeInRight'>{h1}</h1>
</div>

<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1s" }}>{c1}</p>
</div>
<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1.2s" }}>
    {c2}</p>
</div>
<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1.3s" }}>{c3}</p>
</div>
<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1.4s" }}>{c4}</p>
</div>
<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1.6s" }}>{c5}</p>
</div>
<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "1.9s" }}>{c6}</p>
</div>
<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "2s" }}> {c7}</p>
</div>
<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "2.4s" }}>
    {c8}</p>
</div>
<div className="col col-md-4 col-sm-6 text-secondary target">
    <p className="paraFont animated fadeInUp" style={{ animationDelay: "2.6s" }}>{c9}</p>
</div>
    </>
  )
}
