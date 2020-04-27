const initState = {
}

const recipeAndProductReducer = (state=initState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE_SUCCESS':
      console.log('favorite added', action.recipe)
      alert('즐겨찾기에 등록되었습니다.')
      return state
    case 'ADD_TO_FAVORITE_ERROR':
      console.log('add to favorite error', action.err)
      return state
    case 'REMOVE_FROM_FAVORITE_SUCCESS':
      console.log('removed from favorite', action.recipe)
      alert('즐겨찾기에서 제거되었습니다.')
      return state
    case 'ADD_PRODUCT_SUCCESS':
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

export default recipeAndProductReducer
