const initState = {
}

const productReducer = (state=initState, action) => {
    switch (action.type) {
    case 'ADD_PRODUCT':
        console.log('created product', action.product)
        return state
    case 'ADD_PRODUCT_ERROR':
        console.log('create project error', action.err)
        return state
    case 'DELETE_PRODUCT':
        console.log('deleted product', action.id)
        return state
    case 'DELETE_PRODUCT_ERROR':
        console.log('delete product error', action.err)
        return state
    case 'REDUCE_STOCK':
        console.log('item stock reduced', action.product, action.quantity)
        return state
    case 'REDUCE_STOCK_ERROR':
        console.log('reduceStock error', action.err)
        return state
    case 'UPDATE_PRODUCT':
        console.log('updated product', action.id)
        return state
    case 'UPDATE_PRODUCT_ERROR':
        console.log('update product error', action.err)
        return state
    case 'ADD_PRODUCT_TO_RECOMMENDATION':
        console.log('added to recommendation', action.product)
        return state
    case 'ADD_PRODUCT_TO_RECOMMENDATION_ERROR':
        console.log('add to recommendation error', action.err)
        return state
    case 'REMOVE_PRODUCT_FROM_RECOMMENDATION':
        console.log('removed from recommendation', action.product)
        return state
    case 'REMOVE_PRODUCT_FROM_RECOMMENDATION_ERROR':
        console.log('remove from recommendation error', action.err)
        return state
    default: return state
    }
}

export default productReducer
