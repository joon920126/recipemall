import React, { Component } from 'react'
import {connect} from 'react-redux'
import ImageUploader from 'react-images-upload'
import {createProduct} from '../../store/actions/productActions'

class CreateProduct extends Component {

    constructor(props) {
		super(props);
		 this.state = { img: [] };
		 this.onDrop = this.onDrop.bind(this);
	}

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            img: this.state.img.concat(pictureFiles),
        });
        console.log(this.state);
        
	}

    state = {
        name: '',
        price: 0,
        company: '',
        madeIn: '',
        img: [],
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.createProduct(this.state)
    }

    render() {
        return (
            <div className="container Site-content">
                <form onSubmit={this.handleSubmit}>
                    <h4 className="grey-text text-darken-1">상품 등록</h4>
                    <div className="row">
                        <div className="col s12 l6">
                            <img className="responsive-img" src={this.state.img} alt=""/>
                        </div>
                        <div className="col s12 l6">
                            <div className="input-field">
                                <label htmlFor="name">상품명</label>
                                <input type="text" id="name" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="price">가격</label>
                                <input type="number" id="price" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="company">회사명</label>
                                <input type="text" id="company" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="madeIn">원산지</label>
                                <input type="text" id="madeIn" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <ImageUploader withIcon={true} buttonText='이미지 등록' onChange={this.ondrop} imgExtension={['.jpg', '.gif', '.png']} maxFileSize={5242880}/>
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">상품 설명</label>
                        <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field center">
                        <button className="btn brown lighten-2">상품 등록</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(CreateProduct)