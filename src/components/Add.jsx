import React from 'react'
import Nav from './Nav'

const Add = () => {
  return (
    <div>
        <Nav/>
<div className="container">
    <div className="row g-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label className="form-label">email</label>
        <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label className="form-label">address</label>
        <textarea name="" id="" className="form-control"></textarea>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label className="form-label">Phone</label>
        <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label className="form-label">Company name</label>
        <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-success">Add</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add