import { DELETE_TRANSACTION, CREATE_TRANSACTION } from './transactionTypes'

const TRANSACTIONS = JSON.parse(localStorage.getItem('transactions')) || []

const transactionReducer = (state=TRANSACTIONS, action) => {

    switch (action.type) {

        case CREATE_TRANSACTION:
            state = [
                {txId: action.payload.txId, type: action.payload.type, category: action.payload.category, amount: action.payload.amount, date: action.payload.date},
                ...state,
               ]
               localStorage.setItem('transactions',  JSON.stringify(state))

           return state
            

        case DELETE_TRANSACTION:
            state = [
            ...state.filter( tx => tx.txId !== action.payload )
           ]
           localStorage.setItem('transactions',  JSON.stringify(state))
           return state



        default: return state;

    }

};



export default transactionReducer;