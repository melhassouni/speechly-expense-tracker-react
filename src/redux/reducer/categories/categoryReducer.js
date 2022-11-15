import { incomeCategories, expenseCategories } from "../../../data/categories"



const INCOMECATEGORIESINFO = JSON.parse(localStorage.getItem('incomeCategoriesInfo')) || [...incomeCategories]

export const incomeCategoriesInfoReducer = (state = INCOMECATEGORIESINFO, action) => {
    let txCategory
    switch (action.type){
        case 'ADD_INCOME_TOTAL':

                txCategory = state.find( cat => action.payload.category === cat.type)

                if(txCategory){
                    txCategory.amount += +action.payload.amount
                }
                
                    localStorage.setItem('incomeCategoriesInfo',  JSON.stringify(state))
                    return state
        
        case 'MINUSE_INCOME_TOTAL':

                txCategory = state.find( cat => action.payload.category === cat.type)

                if(txCategory){
                    txCategory.amount =txCategory.amount - (+action.payload.amount)
                }
                
                    localStorage.setItem('incomeCategoriesInfo',  JSON.stringify(state))
                    return [...state]

        

        default: return state;
    }
}

const EXPENSECATEGORIESINFO = JSON.parse(localStorage.getItem('expenseCategoriesInfo')) || expenseCategories


export const expenseCategoriesInfoReducer = (state = EXPENSECATEGORIESINFO, action) => {
    let txCategory
    switch (action.type){
        case 'ADD_EXPENSE_TOTAL':
                txCategory = state.find( cat => action.payload.category === cat.type)
                if(txCategory){
                    txCategory.amount += +action.payload.amount
                }
                    localStorage.setItem('expenseCategoriesInfo',  JSON.stringify(state))
                return state

        case 'MINUSE_EXPENSE_TOTAL':
                txCategory = state.find( cat => action.payload.category === cat.type)
                if(txCategory){
                    txCategory.amount = txCategory.amount - (+action.payload.amount)
                }
                    localStorage.setItem('expenseCategoriesInfo',  JSON.stringify(state))
                return [...state]

        

        default: return state;
    }
}