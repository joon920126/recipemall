import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import AdminLinks from './AdminLinks'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const auth = props.auth

    const links = auth.uid==='XlIC5HDHQIOYDc9wILQokNfhzFA2'? <AdminLinks/> : auth.uid? <SignedInLinks/> : <SignedOutLinks/>
    return (
        <nav className='nav-wrapper brown lighten-2'>
            <div className='container'>
                <Link to='/' className='brand-logo'>RecipeMall</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Navbar)
