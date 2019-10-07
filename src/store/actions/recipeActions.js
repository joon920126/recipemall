export const addToFavorite = (recipe) => {
    return (dispatchEvent, getState, {getFirebase, getFirestore}) => {
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
        }).catch(error => {
            console.log('addToFavorite error', error)
        })
    }
}

export const removeFromFavorite = (recipe) => {
    return (dispatchEvent, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userDoc = firestore.collection('users').doc(firebase.auth().currentUser.uid)
        userDoc.get().then(doc => {
            const newFavorite = doc.data().favorite.filter(fav => fav.id!==recipe.id)
            return newFavorite
        }).then(newFavorite => {
            userDoc.update({favorite:newFavorite})
            alert('즐겨찾기에서 제거되었습니다.')
        }).catch(error => {
            console.log('removeFromFavorite error', error)
        })
    }
}