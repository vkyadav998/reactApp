import { products } from './data/productList';

const iState = {
  products: products,
  name : ''
}

const reducer = (state = iState, action) => {
  state.name = action.type;
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products : updateItemInListById(state.products, action.payload, true)
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products : updateItemInListById(state.products, action.payload, false)
      };;
    default:
      return state
  }
}

function updateItemInListById(List, item, inCart){
  item.inCart = inCart;
  return List.map(currentItem => currentItem.id === item.id ? item:currentItem);
}

export default reducer;