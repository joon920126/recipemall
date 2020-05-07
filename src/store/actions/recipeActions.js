import firebase from '../../config/fbconfig'

export const addToFavorite = (recipe) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const userDoc = firestore.collection('users').doc(firebase.auth().currentUser.uid)
        userDoc.get().then((doc) => {
            if (doc.data().favorite.filter((fav) => fav.id===recipe.id).length!==0) {
                const newFavorite = doc.data().favorite
                alert('이미 즐겨찾기에 있는 레시피입니다.')
                return newFavorite
            } else {
                const newFavorite = [
                    ...doc.data().favorite,
                    recipe,
                ]
                return newFavorite
            }
        }).then((newFavorite) => {
            userDoc.update({favorite: newFavorite})
        }).then(() => {
            dispatch({type: 'ADD_TO_FAVORITE_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'ADD_TO_FAVORITE_ERROR'}, err)
        })
    }
}

export const removeFromFavorite = (recipe) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const userDoc = firestore.collection('users').doc(firebase.auth().currentUser.uid)
        userDoc.get().then((doc) => {
            const newFavorite = doc.data().favorite.filter((fav) => fav.id!==recipe.id)
            return newFavorite
        }).then((newFavorite) => {
            userDoc.update({favorite: newFavorite})
        }).then(() => {
            dispatch({type: 'REMOVE_FROM_FAVORITE_SUCCESS'})
        })
            .catch((err) => {
                dispatch({type: 'REMOVE_FROM_FAVORITE_ERROR'}, err)
            })
    }
}

export const createRecipe = (recipe) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const storageURL = []
        firebase.uploadFile(`recipeImage/${recipe.id}`, recipe.img)
            .then(() => {
                firebase.storage().ref(`recipeImage/${recipe.id}/${recipe.img.name}`).getDownloadURL()
                    .then((mainImgURL) => {
                        recipe.stepImg.map((image) => firebase.uploadFile(`recipeImage/${recipe.id}/stepImg`, image).then(() => {
                            firebase.storage().ref(`recipeImage/${recipe.id}/stepImg/${image.name}`).getDownloadURL().then((stepImgURL) => {
                                storageURL.push(stepImgURL)
                            }).then(() => {
                                if (storageURL.length === recipe.stepImg.length) {
                                    firestore.collection('recipeAndProduct').doc(recipe.id).set({
                                        name: recipe.name,
                                        time: recipe.time,
                                        ingredients: recipe.ingredients,
                                        difficulty: recipe.difficulty,
                                        img: mainImgURL,
                                        content: recipe.steps,
                                        contentImg: storageURL,
                                        introduction: recipe.introduction,
                                        tag: recipe.tag,
                                        type: 'recipe',
                                    })
                                }
                            })
                        }))
                    })
            }).then(() => {
                dispatch({type: 'ADD_RECIPE', recipe})
            }).catch((err) => {
                dispatch({type: 'ADD_RECIPE_ERROR', err})
            })
    }
}

export const deleteRecipe = (id) => {
    return (dispatch, getState, {getFirestore}) => {
        // console.log('delete recipe action', id)
        dispatch({type: 'DELETE_RECIPE', id})
    }
}
