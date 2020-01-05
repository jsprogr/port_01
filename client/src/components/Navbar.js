import React from 'react'
import {NavLink} from 'react-router-dom'


export const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="navbar-brand">
            <NavLink exact to="/" className="nav-link">mediastat</NavLink>
            
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Группы ВК</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">Посты ВК</NavLink>
            </li>
        </ul>
    </nav>
)