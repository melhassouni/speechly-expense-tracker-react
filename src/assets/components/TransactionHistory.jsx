/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {RiDeleteBinLine} from 'react-icons/ri'
import { incomeCategories, expenseCategories } from '../../data/categories';
import { deleteTransaction } from '../../redux/reducer/transaction';
import { minuseIncomeTotal, minuseExpenseTotal } from '../../redux/reducer/categories';

const icon = (tx) => {
    if(tx.type === 'Income'){
        return incomeCategories.filter(i=> i.type === tx.category)[0].icon
    }
    if(tx.type === 'Expense'){
        return expenseCategories.filter(i=> i.type === tx.category)[0].icon
    }
}


const TransactionHistory = () => {

    const transactions = useSelector( state => state.transactions )
    const dispatch = useDispatch()
    const [allTransactions, setAllTransactions] = useState([{type:'', category:'', amount:0, date:''}])

    useEffect(()=>{
        setAllTransactions([...transactions])
    }, [transactions])



  return (
    <div className='w-full h-full bg-glass-card flex flex-col justify-start items-center gap-4 py-6 '>
        <div className='w-[100%]'>
            <div className='w-[80%] m-auto'>
                <h6 className='text-left MonumentExtended-Regular text-slate-500 text-xs'>History</h6>
            </div>
        </div>
        <div className='w-[80%] overflow-y-auto overflow-x-hidden' >
            <div className='max-w-[95%]'>
            {transactions !== []
            ?
            
            allTransactions.map((tx, index)=>{
                return (
                <div key={index}>
                <hr className='w-full h-[.12rem] bg-[#e1dede]'></hr>
                <div  className='max-w-[100%] flex justify-between items-center my-4'>
                    <div className='flex justify-between items-center gap-4'>
                        <div><h1>{ icon(tx) }</h1></div>
                        <div className=''>
                            <h1 className='history-text-ellipse MonumentExtended-Black text-[#051937] md:text-[70%] text-[60%]'>{tx.category}</h1>
                            <p className=' MonumentExtended-Regular text-slate-500 md:text-[.6rem] text-[.4rem]'>{tx.date}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center md:gap-8 gap-1'>
                        <h1 className={'MonumentExtended-Black md:text-sm text-[.6rem] ' + (tx.type === 'Income' ? 'text-[#00C897]' : 'text-[#FD5D5D]') }>{tx.amount}$</h1>
                        <button onClick={async()=> {await dispatch(deleteTransaction(tx.txId)); if(tx.type === 'Income'){ await dispatch(minuseIncomeTotal(tx))} else{ await dispatch(minuseExpenseTotal(tx)) } }} ><RiDeleteBinLine size='1.2rem' color='#b6baca'></RiDeleteBinLine></button>
                    </div>
                </div>
                </div>)
            })
            : 
            <></>
            }
            </div>
        </div>
    </div>
  )
}

export default TransactionHistory