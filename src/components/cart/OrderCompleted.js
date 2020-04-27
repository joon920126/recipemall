import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class OrderCompleted extends Component {
    render() {
        if (!this.props.auth.uid) return <Redirect to='/'/>
        if (!this.props.location.state) return <Redirect to='/'/>
        return (
            <div className='container Site-content'>
                <h1>this is OrderCompleted</h1>
                <Link className='btn' to='/'>Return to Main</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(OrderCompleted)
