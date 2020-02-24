const initState = {
    cart: [
    ]
}

const cartReducer = (state=initState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            if(state.cart.map(item => item.id === action.id).reduce(((a,b)=>a||b),false)){
                return {
                    ...state,
                    cart: state.cart.map(item => item.id===action.id? {id:item.id, qty:item.qty+action.qty} : item)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart.splice(0), {id:action.id, qty:action.qty}]
                }
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            }
        case 'REMOVE_ONE_FROM_CART':
            return {
                 ...state,
                 cart: state.cart.map(item => item.id === action.id? {id:item.id, qty:item.qty-1} : item)
            }
        case 'ORDER':
            return {
                ...state
            }
        default: return state
    }
}

export default cartReducer