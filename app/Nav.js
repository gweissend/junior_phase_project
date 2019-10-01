import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

const Nav = () => {
    return (
    <div>
        <Link to="/schools">Schools</Link>
        <Link to="/students">Students</Link>
    </div>
    )
}

export default Nav