import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

type Props = {
    handleOpen: (state: number) => void
}

export const NavBar = ({handleOpen}: Props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
            <div className="container">
                <Link to='/' className='navbar-brand' >Ecommerce</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/home' className='nav-link'>Home</Link>
                        </li>
                    </ul>
                </div>
                <FontAwesomeIcon icon={faShoppingCart} className='icon' onClick={() => handleOpen(1)} />
                <span className='badge  bg-secondary text-white'>0</span>
            </div>
        </nav>
    )
}
