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
        stock: 0,
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleFileInput(e) {
        this.setState({
            img: e.target.files[0],
            imgUrl: URL.createObjectURL(e.target.files[0]),
            imgName: e.target.files[0].name,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createProduct(this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='container Site-content'>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h4 className='grey-text text-darken-1'>상품 등록</h4>
                    <div className='row valign-wrapper'>
                        <div className='col s12 l6'>
                            {this.state.imgUrl? <img className='responsive-img' src={this.state.imgUrl} alt=''/> : <h5 className='center grey-text text-lighten-1'>이미지 없음</h5>}
                        </div>
                        <div className='col s12 l6'>
                            <div className='input-field'>
                                <label htmlFor='name'>상품번호</label>
                                <input placeholder='상품 고유번호는 한번 지정하면 변경할 수 없습니다.' required type='text' id='id' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='name'>상품명</label>
                                <input required type='text' id='name' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='price'>가격</label>
                                <input required type='number' id='price' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='company'>회사명</label>
                                <input required type='text' id='company' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='madeIn'>원산지</label>
                                <input required type='text' id='madeIn' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='tag'>태그</label>
                                <input required type='text' id='tag' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='stock'>재고수량</label>
                                <input required type='number' id='stock' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className='file-field input-field'>
                                <div className='btn brown lighten-2'>
                                    <span>이미지 업로드</span>
                                    <input required type='file' onChange={(e) => this.handleFileInput(e)}/>
                                </div>
                                <div className='file-path-wrapper'>
                                    <input required type='text' className='file-path validate'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>상품 설명</label>
                        <textarea required id='content' onChange={(e) => this.handleChange(e)} className='materialize-textarea'></textarea>
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
