const initState = {
    cart: [
        {id:"1", qty:3},
        {id:'3', qty:2},
        {id:'2', qty:4}
    ]
}

const cartReducer = (state=initState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            console.log('added to cart', action);
            return state
        case 'REMOVE_FROM_CART':
            console.log('removed from cart', action);
            return state
        case 'ORDER':
            console.log('ordered', action)
            return state
        case 'ADD_ONE_TO_CART':
            return {
                ...state,
                cart: state.cart.map(item => item.id===action.id? {id:item.id, qty:item.qty+1} : item)
            }
        case 'REMOVE_ONE_FROM_CART':
            return {
                 ...state,
                 cart: state.cart.map(item => item.id === action.id? {id:item.id, qty:item.qty-1} : item)
            }
        default: return state
    }
}

export default cartReducer