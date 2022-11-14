import { CREATE_TRANSACTION, DELETE_TRANSACTION } from './transactionTypes'



export const createTransaction = (newTransaction) => {

    return {
        type: CREATE_TRANSACTION,
        payload: newTransaction
    };

};

export const deleteTransaction = (transactionDelete) => {

    return {

       type: DELETE_TRANSACTION,
       payload: transactionDelete

    };

};