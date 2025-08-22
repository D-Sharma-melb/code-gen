import React from 'react'
import Navbar from './Navbar'
import Toggle from './Toggle'


function Header() {
  return (
    <>
        <div className="container-fluid">
        <div className="row align-items-center py-2">
            <div className="col-8 text-start">
            <h1 className="mb-0">Code Generator</h1>
            </div>
            <div className="col-2 text-center">
            <h3 className="mb-0">21515263</h3>
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center">
            <Toggle />
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Navbar />
            </div>
        </div>
        </div>
    </>
  )
}

export default Header
