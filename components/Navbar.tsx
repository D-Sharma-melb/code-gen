"use client";

import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';



function Navbar() {
    const[activeMenu, setActiveMenu] = useState ("Home");
    const [darkMode, setDarkMode] = useState(true);
  return (
    <>
        <div className={`${darkMode ? "bg-dark text-white" : "bg-light text-dark"} rounded-3`}>
        <div className="container-fluid">
            <div className="row align-items-center p-2">
            <div className="col-8 d-flex">
                <div className="me-3">Tabs 1</div>
                <div className="me-3">Tabs 2</div>
                <div className="me-3">Tabs 3</div>
                <div className="me-3">Tabs 4</div>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
                <div className="me-3">{activeMenu}</div>
                <HamburgerMenu onSelect={setActiveMenu} />
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar
