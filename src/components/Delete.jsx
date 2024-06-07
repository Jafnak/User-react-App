import React from 'react'
import Nav from './Nav'

const Delete = () => {
  return (
    <div>
     <Nav/>   
<div className="container">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-danger">Delete</button>
    </div>
</div>

    </div>
  )
}

export default Delete
