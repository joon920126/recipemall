import React, {useState, useEffect} from 'react'
import Search from './Search'
import firebase from '../../config/fbconfig'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import RecipeButtonAlt from '../recipes/RecipeButtonAlt'

const Main = (props) => {
    const [reccRecipe, setReccRecipe] = useState([])
    const [reccProduct, setReccProduct] = useState([])
    const [favorite, setFavorite] = useState([])
    const isAdmin = firebase.auth().currentUser && (firebase.auth().currentUser.uid==='XlIC5HDHQIOYDc9wILQokNfhzFA2')


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
    }, [])

    return (
        <div className='Site-content'>
            <div className='container'>
                <Search/>
            </div>
            <div className='carousel carousel-slider'>
                <div className='carousel-item'><img className='responsive-img' src='https://www.sonomamag.com/wp-content/uploads/2016/11/turkeydinner-1024x692.jpg' alt=''/></div>
                <div className='carousel-item'><img className='responsive-img' src='https://billypenn.com/wp-content/uploads/2016/11/tundeweydinner-1024x576.jpg?resize=994,559' alt=''/></div>
                <div className='carousel-item'><img className='responsive-img' src='https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/93/2018/12/rawpixel-754045-unsplash-1024x684.jpg' alt=''/></div>
                <div className='carousel-item'><img className='responsive-img' src='https://cdn.shopify.com/s/files/1/1426/0444/articles/turkey-dinner_1024x1024.jpg?v=1479929411' alt=''/></div>
                <div className='carousel-item'><img className='responsive-img' src='https://theallonsy.com/wp-content/uploads/2017/05/TheCarbonBarDinner-1024x682.jpg' alt=''/></div>
                <div className='carousel-item'><img className='responsive-img' src='https://foodtruckempire.com/wp-content/uploads/Cateringfamilydinner-1024x681.jpg' alt=''/></div>
                <div className='carousel-item'><img className='responsive-img' src='https://www.hotforfoodblog.com/wp-content/uploads/2019/01/100challengemealplan_hotforfood_filtered1-e1549057884190-1024x683.jpg' alt=''/></div>
                <div className='carousel-item'><img className='responsive-img' src='https://www.ahstatic.com/photos/b0k7_rsr001_00_p_1024x768.jpg' alt=''/></div>
                <div className='carousel-item'><img className='responsive-img' src='https://practicallyfine.com/wp-content/uploads/2019/04/dinner1-1024x681.jpg' alt=''/></div>
            </div>
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
