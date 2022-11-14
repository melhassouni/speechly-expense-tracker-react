import { combineReducers } from 'redux';

import { transactionReducer } from './transaction';
import { incomeCategoriesInfoReducer, expenseCategoriesInfoReducer } from './categories'



const rootReducer = combineReducers({

    transactions: transactionReducer,
    incomeCategoriesInfo: incomeCategoriesInfoReducer,
    expenseCategoriesInfo: expenseCategoriesInfoReducer

});

export default rootReducer;