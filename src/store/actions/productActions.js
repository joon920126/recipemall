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

export const reduceStock = (product, quantity) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('recipeAndProduct').doc(product).get().then((doc)=> {
            const newStock = doc.data().stock-quantity
            return newStock
        }).then(newStock => {
            firestore.collection('recipeAndProduct').doc(product).update({
                stock: newStock
            })
        }).then(() => {
            dispatch({type:'REDUCE_STOCK', product, quantity})
        }).catch((err) => {
            dispatch({type:'REDUCE_STOCK_ERROR', err})
        })
    }
}