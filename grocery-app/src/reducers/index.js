import grocery from './grocery_reducer';
import shoppingBag from './shoppingBag_reducer'

import {combineReducers} from 'redux';

const rootRudecer = combineReducers({
    grocery: grocery,
    shoppingBag: shoppingBag
})

export default rootRudecer;