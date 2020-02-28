export const addToFavorite = (recipe) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userDoc = firestore.collection('users').doc(firebase.auth().currentUser.uid)
        userDoc.get().then(doc => {
            if(doc.data().favorite.filter(fav => fav.id===recipe.id).length!==0){
                const newFavorite = doc.data().favorite
                alert('이미 즐겨찾기에 있는 레시피입니다.')
                return newFavorite
            }else{
                const newFavorite = [
                    ...doc.data().favorite,
                    recipe
                ]
                alert('즐겨찾기에 추가되었습니다.')
                return newFavorite
            }
        }).then(newFavorite => {
            userDoc.update({favorite:newFavorite})
        }).then(() => {
            dispatch({type:'ADD_TO_FAVORITE_SUCCESS'})
        }).catch(err => {
            dispatch({type:'ADD_TO_FAVORITE_ERROR'}, err)
        })
    }
}

export const removeFromFavorite = (recipe) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userDoc = firestore.collection('users').doc(firebase.auth().currentUser.uid)
        userDoc.get().then(doc => {
            const newFavorite = doc.data().favorite.filter(fav => fav.id!==recipe.id)
            return newFavorite
        }).then(newFavorite => {
            userDoc.update({favorite:newFavorite})
        }).then(() => {
            dispatch({type:'REMOVE_FROM_FAVORITE_SUCCESS'})
        })
        .catch(err => {
            dispatch({type:'REMOVE_FROM_FAVORITE_ERROR'}, err)
        })
    }
}