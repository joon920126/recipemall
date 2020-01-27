import React, { Component } from 'react'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import RecipeButtonAlt from '../recipes/RecipeButtonAlt'
import Search from '../layout/Search'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'

class List extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        const keyword = this.props.keyword
        const page = this.props.page
        const firebase = getFirebase()
        // const product = this.props.product
        // const recipe = this.props.recipe
        // const productAndRecipe = [...product,...recipe].sort((a,b)=>parseInt(a.id,10)-parseInt(b.id,10))
        // console.log(productAndRecipe)
        const RnP=(this.props.recipeAndProduct||[])
        const recipeAndProduct = RnP.slice(8*(page-1), 8*page)
                            .filter(item => item.name.includes(keyword)
                                          ||item.tag.includes(keyword))
        const favorite = ((this.props.users||[]).find(user=>user.id===firebase.auth().currentUser.uid)||{}).favorite||[]

        return (
            <div className="container Site-content">
                
            <Search/>
                <h5 className="center">'{keyword}' 검색결과</h5>
                <div className="row">
                    {/* {recipe && recipe.map(recipe => <RecipeButton recipe={recipe} key={recipe.id}/>)}
                    {product && product.map(product => <ProductButton product={product} key={product.id}/>)} */}
                    {/* {productAndRecipe && productAndRecipe.map(item => item.madein? <ProductButton product={item} key={'product'+item.id}/>:<RecipeButton recipe={item} key={'recipe'+item.id}/>)} */}
                    {recipeAndProduct && recipeAndProduct.map(item => {
                        switch(item.type){
                            case 'recipe':
                                if(this.props.includeRecipe) {
                                    if(favorite.filter(fav=>fav.id===item.id).length!==0){
                                        return <RecipeButtonAlt recipe={item} key={'recipe'+item.id}/>
                                    }else{
                                        return <RecipeButton recipe={item} key={'recipe'+item.id}/>
                                    }
                                } else return null
                            case 'product':
                                if(this.props.includeProduct) {
                                    return <ProductButton product={item} key={'product'+item.id}/>
                                } else return null
                            default: return null
                        }
                    })}
                </div>
                <div className="row">
                    <ul className="pagination center">
                        {page>1?<li className="waves-effect"><Link to={'/list/'+(page-1)}><i className="material-icons">chevron_left</i></Link></li>:null}
                        {Object.keys(Array.apply(0,Array(Math.ceil(RnP.length/8))))
                               .map(idx=><li className="waves-effect" key={idx}>
                                            <Link to={'/list/'+(parseInt(idx)+1)}>{parseInt(idx)+1}</Link>
                                         </li>)}
                        {page<Math.ceil(RnP.length/8)? <li className="waves-effect"><Link to={'/list/'+(page+1)}><i className="material-icons">chevron_right</i></Link></li> : null}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    
    return {
        keyword: state.search.keyword,
        // product: state.product.product.filter(prod => prod.name.includes(state.search.keyword)
        // //                                             ||prod.tag.includes(state.search.keyword)),
        // recipe: state.recipe.recipe.filter(rec => rec.name.includes(state.search.keyword)
        //                                         ||rec.tag.includes(state.search.keyword))
        recipeAndProduct: state.firestore.ordered.recipeAndProduct,
                          //.sort((a,b)=>parseInt(a.id)-parseInt(b.id))
                        //   .filter(item => item.name.includes(state.search.keyword)
                        //                 ||item.tag.includes(state.search.keyword)),
        users: state.firestore.ordered.users,
        page:parseInt(ownProps.match.params.page),
        includeRecipe: state.search.includeRecipe,
        includeProduct: state.search.includeProduct,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'recipeAndProduct'}]),
    firestoreConnect([{collection:'users'}])
)(List)