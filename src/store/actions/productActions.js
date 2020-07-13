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

export const addToRecommendation = (product) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const userDoc = firestore.collection('recommendation').doc('recommendation')
        userDoc.get().then((doc) => {
            if (doc.data().product.filter((fav) => fav.id===product.id).length!==0) {
                const newRecommendation = doc.data().product
                alert('이미 추천목록에 있는 상품입니다.')
                return newRecommendation
            } else {
                const newRecommendation = [
                    ...doc.data().product,
                    product,
                ]
                alert('추천목록에 추가되었습니다.')
                return newRecommendation
            }
        }).then((newRecommendation) => {
            userDoc.update({product: newRecommendation})
        }).then(() => {
            dispatch({type: 'ADD_PRODUCT_TO_RECOMMENDATION_SUCCESS', product})
        }).catch((err) => {
            dispatch({type: 'ADD_PRODUCT_TO_RECOMMENDATION_ERROR', err})
        })
    }
}

export const removeFromRecommendation = (product) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const userDoc = firestore.collection('recommendation').doc('recommendation')
        userDoc.get().then((doc) => {
            const newRecommendation = doc.data().product.filter((fav) => fav.id!==product.id)
            return newRecommendation
        }).then((newRecommendation) => {
            userDoc.update({product: newRecommendation})
        }).then(() => {
            alert('추천목록에서 제거되었습니다.')
            dispatch({type: 'REMOVE_PRODUCT_FROM_RECOMMENDATION_SUCCESS', product})
        }).catch((err) => {
            dispatch({type: 'REMOVE_PRODUCT_FROM_RECOMMENDATION_ERROR', err})
        })
    }
}
