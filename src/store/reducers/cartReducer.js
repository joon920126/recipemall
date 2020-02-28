const initState = {
    cartError: null
}

const cartReducer = (state=initState, action) => {
    switch(action.type){
        case 'ADD_TO_CART_SUCCESS':
            console.log('added to cart', action.product)
            return {
                ...state,
                cartError: null
            }
        case 'ADD_TO_CART_ERROR':
            console.log('add to cart error', action.err.message)
            return {
                ...state,
                cartError: action.err.message
            }
        case 'REMOVE_FROM_CART_SUCCESS':
            console.log('removed from cart', action.product)
            return {
                ...state,
                cartError: null
            }
        case 'REMOVE_FROM_CART_ERROR':
            console.log('remove from cart error', action.err.message)
            return {
                ...state,
                cartError: action.err.message
            }
        case 'REMOVE_ONE_FROM_CART_SUCCESS':
            console.log('removed one from cart', action.product)
            return {
                ...state,
                cartError: null
            }
        case 'REMOVE_ONE_FROM_CART_ERROR':
            console.log('remove one from cart error', action.err.message)
            return {
                ...state,
                cartError: action.err.message
            }
        case 'ORDER_SUCCESS':
            console.log('ordered', action.order)
            return {
                ...state,
                cartError: null
            }
        case 'ORDER_ERROR':
            console.log('order error', action.err.message)
            return {
                ...state,
                cartError: action.err.message
            }
        default: return state
    }
}

export default cartReducer