import { products } from './data/productList';

const iState = {
  products: products,
  name : ''
}

const reducer = (state = iState, action) => {
  state.name = action.type;
  switch (action.type) {
    case 'ADD_TO_CART':
      updateItemInListById(state.products, action.payload, true);
      return state;
    case 'REMOVE_FROM_CART':
      updateItemInListById(state.products, action.payload, false);
      return state;
    default:
      return state
  }
}

function updateItemInListById(List, item, inCart){
  item.inCart = inCart;
  List.map(currentItem => currentItem.id === item.id ? item:currentItem);
}

export default reducer;