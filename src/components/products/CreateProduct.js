import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../../store/actions/productActions'
import {storage} from '../../config/fbconfig'
import axios from 'axios'

class CreateProduct extends Component {

    state = {
        name: '',
        price: 0,
        company: '',
        madeIn: '',
        img: null,
        imgUrl: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleFileInput = (e) => {
        this.setState({
            img: e.target.files[0]
        })
        console.log(this.state.img)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.createProduct(this.state)
    }

    handleUpload = (e) => {
        e.preventDefault()
        // const image = this.state.img
        // console.log(image)
        // const uploadTask = storage.ref(`images/${image.name}`).put(image)  
        // uploadTask.on('state_changed', 
        // (snapshot) => {
        //     //progress function

        // },
        // (error) => {
        //     //error function
        //     console.log('image upload error', error);
        // },
        // () => {
        //     //conplete function
        //     storage.ref('images').child(image.name).getDownloadURL().then(url => {
        //         console.log(url)
        //     })
        // })
        const formData = new FormData();
        formData.append('file', this.state.selectedFile)

        return axios.post('/api/upload', formData).then(res => {
            console.log('file uploaded')
        }).catch(err => {
            console.log('error');
        })
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
                            <div>
                                <input type="file" id='img' onChange={e=> this.handleFileInput(e)}/>
                                <button className="btn brown lighten-2" onClick={this.handleUpload}>이미지 업로드</button>
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