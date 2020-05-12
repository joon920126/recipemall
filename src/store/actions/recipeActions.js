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
        }).catch((err) => {
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
                                        imgName: recipe.imgName,
                                        content: recipe.steps,
                                        contentImg: storageURL,
                                        contentImgName: recipe.stepImgName,
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

export const updateRecipe = (id) => {
    return (dispatch, getState, {getFirestore}) => {
        // 0. 데이터베이스에서 모든 정보를 불러와 context에 저장
        // 1. 정보 변경시: context에 반영
        // 2. 레시피 사진 변경시:
        // 2-1. 스토리지에서 기존 사진 제거 및 새 사진 등록
        // 2-2. 새 사진의 URL 받아서 데이터베이스 변경
        // 3. 내용 변경시: context에 반영
        // 4. 내용 사진 변경시:
        // 4-1. 변경된 사진의 인덱스 확인 (filter함수 사용)
        // 4-2. 인덱스에 맞는 사진 스토리지에서 찾아서 제거 및 새 사진 등록
        // 4-3. context상에서 인덱스 상에 있는 내용 splice로 변형
    }
}
