export const createQnA = (qna) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('qna').add({
            ...qna,
            createdAt: new Date(),
        }).then(() => {
            dispatch({type: 'ADD_QNA', qna: qna})
        }).catch((err) => {
            dispatch({type: 'ADD_QNA_ERROR'}, err)
        })
    }
}
