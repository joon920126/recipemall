import React from 'react'
import {Link} from 'react-router-dom'

const ProductSummary = ({product, cart}) => {

    const plus = () => {
        
    }

    const minus = () => {

    }

    console.log(product)
    console.log(cart)

    return (
        <tr>
            <td className="center" style={{width:"15%"}}>
                <Link to={'/product/'+product.id}>
                    <img src={product.img} alt="" className="responsive-img"/>
                </Link>
            </td>
            <td className="center">
                <Link to={'product/'+product.id}>
                    <h6 className="black-text">{product.name}</h6>
                </Link>
                </td>
            <td className="center"><h6>{product.price}원</h6></td>
            <td className="center">
                <h6 style={{marginBottom:"12px"}}>{cart.qty}개</h6>
                <button className="btn-small white black-text" type="button" onClick={plus}><i className="material-icons">add</i></button>
                <button className="btn-small white black-text" type="button" onClick={minus}><i className="material-icons">remove</i></button>
            </td>
            <td className="center"><h6>{product.price*cart.qty}원</h6></td>
        </tr>
    )
}
export default ProductSummary