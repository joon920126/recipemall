import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../../store/actions/productActions'

class CreateProduct extends Component {
    state = {
        name: '',
        price: 0,
        company: '',
        madeIn: '',
        img: null,
        imgUrl: '',
        imgName: '',
        content: '',
        tag: '',
        id: '',
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
        this.props.createProduct(this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='container Site-content'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='grey-text text-darken-1'>상품 등록</h4>
                    <div className='row valign-wrapper'>
                        <div className='col s12 l6'>
                            {this.state.imgUrl? <img className='responsive-img' src={this.state.imgUrl} alt=''/> : <h5 className='center grey-text text-lighten-1'>이미지 없음</h5>}
                        </div>
                        <div className='col s12 l6'>
                            <div className='input-field'>
                                <label htmlFor='name'>상품번호</label>
                                <input type='text' id='id' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='name'>상품명</label>
                                <input type='text' id='name' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='price'>가격</label>
                                <input type='number' id='price' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='company'>회사명</label>
                                <input type='text' id='company' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='madeIn'>원산지</label>
                                <input type='text' id='madeIn' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='tag'>태그</label>
                                <input type='text' id='tag' onChange={this.handleChange}/>
                            </div>
                            <div className='file-field input-field'>
                                <div className='btn brown lighten-2'>
                                    <span>이미지 업로드</span>
                                    <input type='file' onChange={this.handleFileInput}/>
                                </div>
                                <div className='file-path-wrapper'>
                                    <input type='text' className='file-path validate'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>상품 설명</label>
                        <textarea id='content' onChange={this.handleChange} className='materialize-textarea'></textarea>
                    </div>
                    <div className='input-field center'>
                        <button className='btn brown lighten-2'>상품 등록</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(createProduct(product)),
    }
}

export default connect(null, mapDispatchToProps)(CreateProduct)
