import {ADD_GROCERY} from '../actions';
import groceryItems from '../data/groceryItems.json'
 
export default function shoppingBag(state = [], action) {
    switch(action.type) {
        case ADD_GROCERY:
      console.log('Add Grocery click and shopping bag action', action)
      let shoppingBag = [...state, addToBag(action.id)]
      console.log('Add Grocery click and shopping bag action', shoppingBag)

      return shoppingBag;
        default:
        return state
    }
}

function addToBag(id) {
    let item = groceryItems.find((item) => {
        return item.id === id;   
    });
    return item
}