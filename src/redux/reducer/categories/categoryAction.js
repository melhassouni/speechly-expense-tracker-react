
export const addIncomeTotal = (newTransaction) => {
    return {
        type: 'ADD_INCOME_TOTAL',
        payload: newTransaction
    };

};

export const minuseIncomeTotal = (newTransaction) => {
    return {
        type: 'MINUSE_INCOME_TOTAL',
        payload: newTransaction
    };

};

export const addExpenseTotal = (newTransaction) => {
    return {
        type: 'ADD_EXPENSE_TOTAL',
        payload: newTransaction
    };

};

export const minuseExpenseTotal = (newTransaction) => {
    return {
        type: 'MINUSE_EXPENSE_TOTAL',
        payload: newTransaction
    };

};