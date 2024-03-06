import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu() {
  return (
    <header>
       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <NavLink to={`/`} className="Navbar-brand"> React Hook</NavLink>

            <button className="btn btn-secondary" data-bs-toggle="offcanvas" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
       </nav>

       <div className="offcanvas offcanvas-start" id="menu" tabIndex={'-1'}>
        <div className="offcanvas-header">
            <h5 className="text-success offcanvas-title">React Hooks</h5>
            <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to={`/`} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/hooks/state`} className="nav-link">State hook</NavLink>
                    <ul className="nav flex-column ms-4">
                        <li className="nav-item">
                            <NavLink to={`/hooks/state/useState`} className="nav-link">useState Hook</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/hooks/state/useReducer`} className="nav-link">useReducer Hook</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink to={`/hooks/effect`} className="nav-link">Effect hook</NavLink>
                </li>
            </ul>
        </div>
       </div>
    </header>
  )
}

export default Menu