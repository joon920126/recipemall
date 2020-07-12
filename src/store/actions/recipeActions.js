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
                alert('즐겨찾기에 추가되었습니다.')
                return newFavorite
            }
        }).then((newFavorite) => {
            userDoc.update({favorite: newFavorite})
        }).then(() => {
            dispatch({type: 'ADD_TO_FAVORITE_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'ADD_TO_FAVORITE_ERROR', err})
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
        }).catch((err) => {
            dispatch({type: 'REMOVE_FROM_FAVORITE_ERROR', err})
        })
    }
}

export const addToRecommendation = (recipe) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const userDoc = firestore.collection('recommendation').doc('recommendation')
        userDoc.get().then((doc) => {
            if (doc.data().recipe.filter((fav) => fav.id===recipe.id).length!==0) {
                const newRecommendation = doc.data().recipe
                alert('이미 추천목록에 있는 레시피입니다.')
                return newRecommendation
            } else {
                const newRecommendation = [
                    ...doc.data().recipe,
                    recipe,
                ]
                alert('추천목록에 추가되었습니다.')
                return newRecommendation
            }
        }).then((newRecommendation) => {
            userDoc.update({recipe: newRecommendation})
        }).then(() => {
            dispatch({type: 'ADD_TO_RECOMMENDATION_SUCCESS', recipe})
        }).catch((err) => {
            dispatch({type: 'ADD_TO_RECOMMENDATION_ERROR', err})
        })
    }
}

export const removeFromRecommendation = (recipe) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const userDoc = firestore.collection('recommendation').doc('recommendation')
        userDoc.get().then((doc) => {
            const newRecommendation = doc.data().recipe.filter((fav) => fav.id!==recipe.id)
            return newRecommendation
        }).then((newRecommendation) => {
            userDoc.update({recipe: newRecommendation})
        }).then(() => {
            alert('추천목록에서 제거되었습니다.')
            dispatch({type: 'REMOVE_FROM_RECOMMENDATION_SUCCESS', recipe})
        }).catch((err) => {
            dispatch({type: 'REMOVE_FROM_RECOMMENDATION_ERROR', err})
        })
    }
}

export const createRecipe = (recipe) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()

        const asyncImageUpload = async () => {
            const {id} = recipe

            const uploadImage = async (image) => {
                try {
                    await firebase.uploadFile(`recipeImage/${id}/stepImg`, image)
                    return firebase
                        .storage()
                        .ref(`recipeImage/${id}/stepImg/${image.name}`)
                        .getDownloadURL()
                } catch (e) {
                    throw new Error('Image upload failed')
                }
            }

            const imageURLs = await Promise.all(recipe.stepImg.map(uploadImage))

            return (imageURLs)
        }

        firebase.uploadFile(`recipeImage/${recipe.id}`, recipe.img)
            .then(() => {
                firebase.storage().ref(`recipeImage/${recipe.id}/${recipe.img.name}`).getDownloadURL()
                    .then((mainImgURL) => {
                        asyncImageUpload()
                            .then((imageURLs) => {
                                firestore.collection('recipeAndProduct').doc(recipe.id).set({
                                    name: recipe.name,
                                    time: recipe.time,
                                    ingredients: recipe.ingredients,
                                    difficulty: recipe.difficulty,
                                    img: mainImgURL,
                                    imgName: recipe.imgName,
                                    content: recipe.steps,
                                    contentImg: imageURLs,
                                    contentImgName: recipe.stepImgName,
                                    introduction: recipe.introduction,
                                    tag: recipe.tag,
                                    type: 'recipe',
                                })
                            })
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
        const firestore = getFirestore()
        const recipeDoc = firestore.collection('recipeAndProduct').doc(id)
        recipeDoc.get().then((doc) => {
            doc.data().contentImgName.map((img) => {
                firebase.storage().ref().child(`recipeImage/${id}/stepImg/${img}`).delete()
            })
            firebase.storage().ref().child(`recipeImage/${id}/${doc.data().imgName}`).delete()
                .then(() => {
                    recipeDoc.delete()
                }).then(() => {
                    dispatch({type: 'DELETE_RECIPE', id})
                }).catch((err) => {
                    dispatch({type: 'DELETE_RECIPE_ERROR', err})
                })
        })
    }
}

export const updateRecipe = (recipe, oldRecipe) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const {id} = recipe
        const recipeDoc = firestore.collection('recipeAndProduct').doc(id)
        const newRecipe = {}

        if (recipe.name !== oldRecipe.name) {
            newRecipe.name = recipe.name
        }
        if (recipe.time !== oldRecipe.time) {
            newRecipe.time = recipe.time
        }
        if (JSON.stringify(recipe.ingredients) !== JSON.stringify(oldRecipe.ingredients)) {
            newRecipe.ingredients = recipe.ingredients
        }
        if (recipe.difficulty !== oldRecipe.difficulty) {
            newRecipe.difficulty = recipe.difficulty
        }
        if (recipe.img !== oldRecipe.img) {
            newRecipe.imgName = recipe.imgName
            firebase.storage().ref().child(`recipeImage/${id}/${oldRecipe.imgName}`).delete()
            firebase.uploadFile(`recipeImage/${id}`, recipe.img)
                .then(() => {
                    firebase.storage().ref(`recipeImage/${id}/${recipe.img.name}`).getDownloadURL()
                        .then((imgURL) => {
                            recipeDoc.update({img: imgURL})
                        })
                })
        }
        if (JSON.stringify(recipe.steps) !== JSON.stringify(oldRecipe.steps)) {
            newRecipe.content = recipe.steps
        }
        if (JSON.stringify(recipe.stepImg) !== JSON.stringify(oldRecipe.stepImg)) {
            newRecipe.contentImgName = recipe.stepImgName
            const imageList = oldRecipe.stepImg.slice()
            recipe.stepImg.map((img, idx) => {
                if (img !== oldRecipe.stepImg[idx]) {
                    firebase.uploadFile(`recipeImage/${recipe.id}/stepImg`, img)
                    firebase.storage().ref(`recipeImage/${id}/stepImg/${oldRecipe.stepImgName[idx]}`).delete()
                    firebase.uploadFile(`recipeImage/${id}/stepImg`, img)
                        .then(() => {
                            firebase.storage().ref(`recipeImage/${id}/stepImg/${recipe.stepImgName[idx]}`).getDownloadURL()
                                .then((imgURL) => {
                                    imageList.splice(idx, 1, imgURL)
                                }).then(() => {
                                    recipeDoc.update({contentImg: imageList})
                                })
                        })
                }
            })
        }
        if (recipe.introduction !== oldRecipe.introduction) {
            newRecipe.introduction = recipe.introduction
        }
        if (JSON.stringify(recipe.tag) !== JSON.stringify(oldRecipe.tag)) {
            newRecipe.tag = recipe.tag
        }
        recipeDoc.update(newRecipe)
            .then(() => {
                dispatch({type: 'UPDATE_RECIPE', id})
            }).catch((err) => {
                dispatch({type: 'UPDATE_RECIPE_ERROR', err})
            })
    }
}
