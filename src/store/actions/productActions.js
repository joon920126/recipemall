import firebase from '../../config/fbconfig'

export const createProduct = (product) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        return new Promise(function(resolve, reject) {
            resolve()
        }).then(() => {
            firebase.uploadFile(`productImage/${product.id}`, product.img).then(() => {
                firebase.storage().ref('productImage/'+product.id+'/'+product.img.name).getDownloadURL().then((url) => {
                    firestore.collection('recipeAndProduct').doc(product.id).set({
                        ...product,
                        type: 'product',
                        img: url,
                    })
                })
            })
        }).then(()=> {
            dispatch({type: 'ADD_PRODUCT', product})
        }).catch((err) => {
            dispatch({type: 'ADD_PRODUCT_ERROR', err})
        })
    }
}

export const deleteProduct = (id) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const productDoc = firestore.collection('recipeAndProduct').doc(id)
        productDoc.get().then((doc) => {
            firebase.storage().ref().child(`productImage/${id}/${doc.data().imgName}`).delete()
                .then(() => {
                    productDoc.delete()
                })
        }).then(() => {
            dispatch({type: 'DELETE_PRODUCT', id})
        }).catch((err) => {
            dispatch({type: 'DELETE_PRODUCT_ERROR', err})
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

export const updateProduct = (product, oldImg) => {
    return (dispatch, getState, {getFirestore}) => {
        const {id, img} = product
        delete product.id
        delete product.img
        const firestore = getFirestore()
        const productDoc = firestore.collection('recipeAndProduct').doc(id)
        productDoc.update(product)
            .then(() => {
                if (img) {
                    firebase.storage().ref().child(`productImage/${id}/${oldImg}`).delete()
                    firebase.uploadFile(`productImage/${id}`, img).then(() => {
                        firebase.storage().ref('productImage/'+id+'/'+product.imgName).getDownloadURL().then((url) => {
                            firestore.collection('recipeAndProduct').doc(id).update({
                                img: url,
                            })
                        })
                    })
                }
            })
            .then(() => {
                dispatch({type: 'UPDATE_RECIPE', id})
            }).catch((err) => {
                dispatch({type: 'UPDATE_RECIPE_ERROR', err})
            })
    }
}
