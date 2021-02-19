import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link to="/" className="navbar-brand">Home</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                <Link to="/menu" style={{color:"red"}}>List Task</Link>
                </li>   
                </ul>
            </div>  
            </nav>
        </div>
    )
}
