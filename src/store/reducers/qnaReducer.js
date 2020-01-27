const initstate = {
    qna: []
}

const qnaReducer = (state = initstate, action) => {
    switch(action.type){
        case 'ADD_QNA':
            console.log('add qna')
            return state
        case 'REMOVE_QNA':
            console.log('remove qna')
            return state
        default: return state
    }
}

export default qnaReducer