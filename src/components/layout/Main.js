import React, {useState, useEffect} from 'react'
import Search from './Search'
import firebase from '../../config/fbconfig'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import RecipeButtonAlt from '../recipes/RecipeButtonAlt'

const Main = () => {
    const [reccRecipe, setReccRecipe] = useState([])
    const [reccProduct, setReccProduct] = useState([])
    const [favorite, setFavorite] = useState([])
    const [mainImgURL, setMainImgURL] = useState('')
    const isAdmin = firebase.auth().currentUser && (firebase.auth().currentUser.uid==='XlIC5HDHQIOYDc9wILQokNfhzFA2')

    firebase.storage().ref('mainImage/main.jpg').getDownloadURL().then((URL) => {
        setMainImgURL(URL)
    })

    useEffect(() => {
        firebase.firestore().collection('recommendation').doc('recommendation').get().then((doc) => {
            setReccProduct(doc.data().product)
            setReccRecipe(doc.data().recipe)
        })
    }, [])

    useEffect(() => {
        if (!isAdmin) {
            firebase.auth().currentUser && firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then((doc) => {
                setFavorite(doc.data().favorite)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='Site-content'>
            <div className='container'>
                <Search/>
            </div>
            {/* <div className='carousel carousel-slider'>
                <div className='carousel-item'><img className='responsive-img' src={mainImgURL} alt='main'/></div>
            </div> */}
            <img src={mainImgURL} alt='main' style={{width: '100%'}}/>
            <div className='container'>
                <h5>추천상품</h5>
                <div className='row'>
                    {reccProduct.map((item) => <ProductButton product={item} key={'product'+item.id} isAdmin={isAdmin} isRecc={true}/>)}
                </div>
                <h5>추천레시피</h5>
                <div className='row'>
                    {reccRecipe.map((item) => {
                        return isAdmin? <RecipeButtonAlt recipe={item} key={'recipe'+item.id} isAdmin={isAdmin}/> :
                            favorite.some((fav) => fav.id===item.id) ?
                                <RecipeButtonAlt recipe={item} key={'recipe'+item.id} isAdmin={isAdmin}/>:
                                <RecipeButton recipe={item} key={'recipe'+item.id} isAdmin={isAdmin}/>
                    })}
                </div>
                {/* <h5>신상품</h5> */}
            </div>
        </div>
    )
}

export default Main
