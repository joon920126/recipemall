import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'


class Shipping extends Component {
    render() {
        if(!this.props.auth.uid) return <Redirect to='/'/>
        return (
            <div className="container Site-content">
                <h1>this is Shipping</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Shipping)