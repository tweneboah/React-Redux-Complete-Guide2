import {ADD_GROCERY} from '../actions';
import groceryItems from '../data/groceryItems.json'
 
export default function grocery(state = groceryItems, action) {
    switch(action.type) {
        case ADD_GROCERY:
      console.log('Add Grocery clicjed', action)
      let grocery = state.filter((item) => {
          return item.id !== action.id;
      })
      return grocery;
        default:
        return state
    }
}