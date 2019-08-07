import React, {Component} from 'react'
import Search from '../layout/Search'


class ProductDetail extends Component {

    state = {
        quantity: 1
    }

    handleClick = (e) => {

    }

    plus = (e) => {
        this.setState({
            quantity: this.state.quantity+1
        })
    }
    
    minus = (e) => {
        if(this.state.quantity>1)
        this.setState({
            quantity: this.state.quantity-1
        })
    }
    
    

    render(){
        return (
            <div className="container">
                <Search/>
                <div className="row">
                    <div className="col s12 l6">
                        <img className="responsive-img materialboxed" src="http://img.danawa.com/prod_img/500000/075/132/img/6132075_1.jpg?shrink=500:500&_v=20180813140819" alt=""/>
                    </div>
                    <div className="col s12 l6">
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <h4>소가 부침두부</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%" className="blue-text text-lighten-2 flow-text">가격</td>
                                    <td className="blue-text text-lighten-2 flow-text">1500원</td>
                                </tr>
                                <tr>
                                    <td width="40%">제조사</td>
                                    <td>풀무원</td>
                                </tr>
                                <tr>
                                    <td width="40%">원산지</td>
                                    <td>국내산</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr/>
                        <div className="grey lighten-3">
                            
                            <div className="card horizontal">
                                <div className="card-content flow-text" style={{minWidth:"20%"}}>
                                    {this.state.quantity}
                                </div>
                                <div className="card-action valign-wrapper">
                                    <button className="btn white black-text" type="button" onClick={this.plus}><i className="material-icons">add</i></button>
                                    <button className="btn white black-text" type="button" onClick={this.minus}><i className="material-icons">remove</i></button>
                                    <span className="flow-text">{this.state.quantity*1500}원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail