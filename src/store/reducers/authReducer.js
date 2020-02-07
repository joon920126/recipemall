const initState = {
    authError:null
}

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }    
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
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
        case 'CHANGE_SUCCESS':
            console.log('회원정보 변경 성공')
            return state
        case 'CHANGE_ERROR':
            console.log('회원정보 변경 에러')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer