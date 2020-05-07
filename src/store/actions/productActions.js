import firebase from '../../config/fbconfig'

export const createProduct = (product) => {
    return (dispatch, getState, {getFirestore}) => {
    // make async call to database
        const firestore = getFirestore()
        return new Promise(function(resolve, reject) {
            resolve()
        }).then(() => {
            firebase.uploadFile('productImage', product.img).then(() => {
                firebase.storage().ref('productImage/'+product.img.name).getDownloadURL().then((url) => {
                    firestore.collection('recipeAndProduct').add({
                        ...product,
                        name: product.name,
                        content: product.content,
                        madeIn: product.madeIn,
                        price: product.price,
                        tag: product.tag,
                        type: 'product',
                        img: url,
                    })
                })
            })
        }).then(()=> {
            dispatch({type: 'ADD_PRODUCT', product: product})
        }).catch((err) => {
            dispatch({type: 'ADD_PRODUCT_ERROR', err})
        })
    }
}

export const reduceStock = (product, quantity) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('recipeAndProduct').doc(product).get().then((doc)=> {
            const newStock = doc.data().stock-quantity
            return newStock
        }).then((newStock) => {
            firestore.collection('recipeAndProduct').doc(product).update({
                stock: newStock,
            })
        }).then(() => {
            dispatch({type: 'REDUCE_STOCK', product, quantity})
        }).catch((err) => {
            dispatch({type: 'REDUCE_STOCK_ERROR', err})
        })
    }
}
