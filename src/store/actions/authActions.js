export const logIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=> {
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type:'LOGIN_ERROR', err})
        }) 
    } 
}

export const logOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        firebase.auth().signOut().then(()=>{
            dispatch({type:'LOGOUT_SUCCESS'})
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
                            newUser.email, newUser.password
                        ).then((resp) => {
                           return firestore.collection('users').doc(resp.user.uid).set({
                               email: newUser.email,
                               name: newUser.name,
                               address: newUser.address,
                               phone: newUser.phone,
                               cart: [],
                               favorite: []
                           })
                        }).then(() => {
                           dispatch({type:'SIGNUP_SUCCESS'})
                        }).catch((err) => {
                           dispatch({type:'SIGNUP_ERROR', err})
                        })
    }
}

export const change = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userDoc = firestore.collection('users').doc(firebase.auth().currentUser.uid)
        userDoc.get().then(doc => {
            if(user.name) {
                userDoc.update({name: user.name})
            }
            if(user.address) {
                userDoc.update({address: user.address})
            }
            if(user.phone) {
                userDoc.update({phone: user.phone})
            }
            if(user.password) {
                firebase.auth().currentUser.updatePassword(user.password).then(() => {
                    console.log('password successfully updated')
                }).catch((err) => {
                    console.log('password change error', err)
                })
            }
        }).then(() => {
            dispatch({type:'CHANGE_SUCCESS'})
        }).catch((err) => {
            dispatch({type:'CHANGE_ERROR'})
        })
    }
}