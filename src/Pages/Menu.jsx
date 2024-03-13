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
                    <ul className="nav flex-column ms-4">
                        <li className="nav-item">
                            <NavLink to={`/hooks/effect/useEffect`} className="nav-link">useEffect Hook</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/hooks/effect/useEffect/2`} className="nav-link">useEffect-2 Hook</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/hooks/effect/useLayoutEffect`} className="nav-link">useLayoutEffect Hook</NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink to={`/hooks/ref`} className="nav-link">Ref Hooks</NavLink>
                    <ul className="nav flex-column ms-4">
                        <li className="nav-item">
                            <NavLink to={`/hooks/ref/useRef`} className="nav-link">useRef Hook</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink to={`/hooks/perform`} className="nav-link">Performance Hooks</NavLink>
                    <ul className="nav flex-column ms-4">
                        <li className="nav-item">
                            <NavLink to={`/hooks/perform/useCallback`} className="nav-link">useCallback Hook</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={`/hooks/perform/useMemo`} className="nav-link">useMemo Hook</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink to={`/hooks/context`} className="nav-link">Context Hooks</NavLink>
                    <ul className="nav flex-column ms-4">
                        <li className="nav-item">
                            <NavLink to={`/hooks/context/useContext`} className="nav-link">useContext Hook</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
       </div>
    </header>
  )
}

export default Menu