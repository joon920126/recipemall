import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import AdminLinks from './AdminLinks'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper brown lighten-2">
            <div className="container">
                <Link to="/" className="brand-logo">RecipeMall</Link>
                <AdminLinks/>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar