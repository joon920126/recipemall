import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateProduct} from '../../store/actions/productActions'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class UpdateProduct extends Component {
    state = {

    }

    componentDidMount = () => {
        this.setState({
            id: this.props.id,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleFileInput = (e) => {
        this.setState({
            img: e.target.files[0],
            imgUrl: URL.createObjectURL(e.target.files[0]),
            imgName: e.target.files[0].name,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const oldProduct = this.props.recipeAndProduct.find((product) => product.id === this.props.id)
        this.props.updateProduct(this.state, oldProduct.imgName)
    }


    render() {
        const id = this.props.id
        const RnP = this.props.recipeAndProduct
        const oldProduct = RnP? RnP.find((product) => product.id === id):{
            name: '',
            price: 0,
            company: '',
            madeIn: '',
            img: null,
            imgUrl: '',
            imgName: '',
            content: '',
            tag: [],
            id: '',
        }
        return (
            <div className='container Site-content'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='grey-text text-darken-1'>상품 수정</h4>
                    <div className='row valign-wrapper'>
                        <div className='col s12 l6'>
                            {this.state.imgUrl? <img className='responsive-img' src={this.state.imgUrl} alt=''/> : oldProduct.img? <img className='responsive-img' src={oldProduct.img}/>: <h5 className='center grey-text text-lighten-1'>이미지 없음</h5>}
                        </div>
                        <div className='col s12 l6'>
                            <div className='input-field'>
                                <label htmlFor='name' className='active'>상품번호</label>
                                <input type='text' defaultValue={oldProduct.id} id='id' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='name' className='active'>상품명</label>
                                <input type='text' defaultValue={oldProduct.name} id='name'onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='price' className='active'>가격</label>
                                <input type='number' defaultValue={oldProduct.price} id='price' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='company' className='active'>회사명</label>
                                <input type='text' defaultValue={oldProduct.company} id='company' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='madeIn' className='active'>원산지</label>
                                <input type='text' id='madeIn' defaultValue={oldProduct.madeIn} onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='tag' className='active'>태그</label>
                                <input type='text' id='tag' defaultValue={oldProduct? (Array.isArray(oldProduct.tag)? oldProduct.tag.join(', ') : oldProduct.tag) : ''} onChange={this.handleChange}/>
                            </div>
                            <div className='file-field input-field'>
                                <div className='btn brown lighten-2'>
                                    <span>이미지 업로드</span>
                                    <input type='file' onChange={this.handleFileInput}/>
                                </div>
                                <div className='file-path-wrapper'>
                                    <input type='text' defaultValue={oldProduct.imgName} className='file-path validate'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content' className='active'>상품 설명</label>
                        <textarea id='content' onChange={this.handleChange} defaultValue={oldProduct.content} className='materialize-textarea'></textarea>
                    </div>
                    <div className='input-field center'>
                        <button className='btn brown lighten-2'>상품 수정</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return {
        recipeAndProduct: state.firestore.ordered.recipeAndProduct,
        id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProduct: (product, oldImg) => dispatch(updateProduct(product, oldImg)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'recipeAndProduct'}]),
)(UpdateProduct)
