const initState = {
    authError:null
}

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return state    
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {
                ...state,
                authError: '로그인에 실패하였습니다.'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return state
        default:
            return state
    }
}

export default authReducer