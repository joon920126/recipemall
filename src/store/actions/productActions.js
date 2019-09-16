export const createProduct = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore()
        firestore.collection('recipeAndProduct').add({
             ...product,
             type:product
        }).then(()=> {
            dispatch({type:'ADD_PRODUCT', product:product})
        }).catch((err) => {
            dispatch({type:'ADD_PRODUCT_ERROR', err})
        })
    }
}