import React, { Component } from 'react'
import RecipeContent from './RecipeContent'

class CreateRecipe extends Component {
    state = {
        name: '',
        time: 0,
        ingredients: [],
        difficulty: '',
        img: '',
        content: [''],
        contentImg: ['']
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleIngredientChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value.split(', ')
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit button clicked')
        console.log(this.state);
        
    }

    handleImageButtonClick = (e) => {
        e.preventDefault()
        console.log('image upload')
    }

    addContent = (e) => {
        e.preventDefault()
        this.setState({
            content: [...this.state.content, ''],
            contentImg: [...this.state.contentImg, '']
        })
        console.log('added new step')
    }

    render() {
        return (
            <div className="container Site-content">
            <form onSubmit={this.handleSubmit}>
                    <h4 className="grey-text text-darken-1">레시피 등록</h4>
                    <div className="row">
                        <div className="col s12 l6">
                            <img className="responsive-img" src={this.state.img} alt=""/>
                        </div>
                        <div className="col s12 l6">
                            <div className="input-field">
                                <label htmlFor="name">레시피명</label>
                                <input type="text" id="name" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="time">시간</label>
                                <input type="number" id="time" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="ingredients">재료</label>
                                <input type="text" id="ingredients" onChange={this.handleIngredientChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="difficulty">난이도</label>
                                <input type="text" id="difficulty" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="img">이미지</label>
                                <input type="text" id="img" onChange={this.handleChange}/>
                                <button onClick={this.handleImageButtonClick} type="button" className="btn brown lighten-2">이미지 업로드</button>
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        {this.state.content.map((step, idx) => <RecipeContent key={idx}/>)}
                    </div>
                    <div className="input-field center">
                        <button className="btn brown lighten-2" style={{marginRight:"4px"}} onClick={this.addContent}>내용 추가</button>
                        <button className="btn brown">레시피 등록</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateRecipe