export const createQnA = (qna) => {
    return (dispatch, getState, {getFirestore}) => {
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

export const replyQnA = (content) => {
    return (dispatch, getState, {getFirestore}) => {
        console.log(content)
    }
}
