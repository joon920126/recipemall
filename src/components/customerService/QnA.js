import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class QnA extends Component {
    render() {
        return (
            <div className="container">
                <h1>this is QnA</h1>
                <Link className="btn" to='/CreateQnA'>Ask</Link>
                
            </div>
        )
    }
}

export default QnA