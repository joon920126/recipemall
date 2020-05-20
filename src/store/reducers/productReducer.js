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
    case 'REDUCE_STOCK':
        console.log('item stock reduced', action.product, action.quantity)
        return state
    case 'REDUCE_STOCK_ERROR':
        console.log('reduceStock error', action.err)
        return state
    default: return state
    }
}

export default productReducer
