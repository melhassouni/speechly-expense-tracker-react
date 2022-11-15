import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { expenseCategories, incomeCategories } from '../../data/categories'
import { createTransaction } from '../../redux/reducer/transaction'
import { useDispatch } from 'react-redux'
import { useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";

import Swal from 'sweetalert2'
import { addIncomeTotal, addExpenseTotal } from '../../redux/reducer/categories';
import uuid from 'react-native-uuid';


const TransactionPopUp = (title, des, icon) => {
  Swal.fire({
    title: title,
    text: des,
    icon: icon,
    confirmButtonText: icon === 'error' ? 'I Will' : 'Cool!'
  }).then((result) =>{
    if(result.isConfirmed){window.location.reload()}
  })
}


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const TransactionAdding = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [type, setType] = useState('')
  let {txType} = useParams()

  const { segment} = useSpeechContext();
  

  const newTransaction = {
    txId:'',
    type: txType,
    category: '',
    amount: 0,
    date: ''
  }



  useEffect(()=>{
    if(newTransaction.type === 'Income') {
      setType('Income')
    }else{
      setType('Expense')
    }
  }, [newTransaction.type])

  const checkNewTransitionEmpty = () => {
    if( newTransaction.type === '' || newTransaction.category === '' || (newTransaction.amount === '' || newTransaction.amount === 0 || isNaN(newTransaction.amount) ) || newTransaction.date === '' ){
      return true
    }
    return false
  }
  useEffect(() => {
    if(segment){
      if(segment.intent.intent === 'add_income'){
        newTransaction.type = 'Income'
      }else if(segment.intent.intent === 'add_expense'){
        newTransaction.type = 'Expense'
      }
    }
    
    if(segment){
      segment.entities.forEach(entity=>{
        const category = entity.value
        switch (entity.type){
          case 'category':
            
            newTransaction.category = category.charAt(0) + category.slice(1).toLowerCase()
          break
          case 'amount':
            newTransaction.amount = +entity.value
          break
          case 'date':
            newTransaction.date = entity.value
          break
          default: break
        }
      
        if(segment.isFinal){
          handleCreateTransaction()
        }
      })
    }
  }, [segment])


  const handleCreateTransaction = async() => {
    newTransaction.txId = uuid.v4()
    if(checkNewTransitionEmpty()){    
      TransactionPopUp('Transaction Failed!','Please make sure all transaction detaills are filled', 'error') 
      return
    }
      await dispatch(createTransaction(newTransaction))
    if(newTransaction.type === 'Income'){
      await dispatch(addIncomeTotal(newTransaction))
    }else{
      await dispatch(addExpenseTotal(newTransaction))
    }
    TransactionPopUp('Transaction Created Successfuly!','Your transaction information are saved.', 'success')
  }


  return (
    <div className='w-full min-h-[100vh] flex justify-center flex-col gap-5 items-center'>
      <div className='MonumentExtended-Black text-[#8e31e6] max-w-[90%] text-center underline'>
        <p>Create a new {type}</p>
      </div>
      <div className='w-[85%] md:w-[30%] min-h-[90%] flex gap-10 flex-col justify-center items-center bg-glass-card py-8'>
          <div className='min-w-[80%] flex flex-col gap-8'>
            <div className='min-w-[50%] flex gap-5 justify-between items-center'>
              <div className='max-w-[85%] flex flex-col gap-2 min-h-[100%]'>
                    <span htmlFor='type' className='Montserrat-Semibold md:text-sm text-sm text-gray-500'>Type</span>
                    <select htmlFor='type' className=' box-content ' onChange={async(e)=>{ await navigate(`/transaction/${e.target.value}`)}} >
                      <option value={'Income'} {...(type === 'Income') ? {selected:'selected'}: ''}>{'Income'}</option>
                      <option value={'Expense'} {...(type === 'Expense') ? {selected:'selected'}: ''}>{'Expense'}</option>
                    </select>
              </div>
              <div className='max-w-[85%] flex flex-col gap-2 min-h-[100%]'>
                    <span htmlFor='category' className='Montserrat-Semibold md:text-sm text-sm text-gray-500'>Category</span>  
                    <select  className=' box-content' onChange={(e)=>newTransaction.category = e.target.value}>
                          <option value=''></option>
                          { type === 'Income'
                          ?
                          incomeCategories.map((item, index) =>
                              <option value={item.type} key={item.type}>{item.type}</option>
                            )
                          :
                          expenseCategories.map((item) =>
                              <option value={item.type} key={item.type}>{item.type}</option>
                            )

                          }
                    </select>
              </div>
            </div>
            <div className='min-w-[50%] flex gap-5 justify-between items-center'>
              <div className='max-w-[85%] flex flex-col gap-2 min-h-[100%]'>
                <span htmlFor='amount' className='Montserrat-Semibold md:text-sm text-sm text-gray-500' >Amount</span>
                <input  type='number' id='amount' className=' box-content' onChange={(e)=>newTransaction.amount = +e.target.value} ></input>
              </div>
              <div className='max-w-[85%] flex flex-col gap-2 min-h-[100%]'>
                <span htmlFor='date' className='Montserrat-Semibold md:text-sm text-sm text-gray-500'>Date</span>
                <input type='date' id='date' className=' box-content' 
                        onChange={(e)=>{
                          let value = new Date(e.target.value)
                          let date =  value.getDate()+ (value.getDate() === 1 ? 'er' : 'th')+ ', ' + monthNames[value.getMonth()] 
                          newTransaction.date = date
                          }}></input>
              </div>
            </div>
            <div className='bg-purple-600 min-w-[50%] flex justify-center items-center py-2 hover:bg-violet-900 ease-in-out	duration-300 disabled:opacity-75'>
              <button type='submit' value='Add Transaction' className='MonumentExtended-Regular text-white text-sm text-center w-full ' onClick={() => {handleCreateTransaction()}}>Add Transaction</button>
            </div>
          </div>
          <div className='w-[80%] m-auto text-center justify-between items-center'>
            <div className='max-w-[100%] m-auto text-center'>
                <p className='text-center p-6 italic text-sm text-[#7d5ca9]'>
                  { segment ? (segment.words.map(word => word.value).join(' ')) : '*voice formula: add income of 50 in category salary at january fifth twenty twenty four*'}
                </p>
            </div>
            <div className='w-[80%] text-center my-10'>
              <PushToTalkButtonContainer>
                  <PushToTalkButton
                      placement="bottom"
                      size="2.5rem"
                      backgroundcolor="#000000"
                      gradientstop1="#165243"
                      gradientstop2="#15efb5"
                      fxgradientstop1="#19efb5"
                      fxgradientstop2="#29efb5"
                      >
                  </PushToTalkButton>
              </PushToTalkButtonContainer>
            </div>
          </div>
      </div>
      
      <div className=' max-w-[90%] bg-violet-900 px-6 py-4 rounded-full'>
        <button type='submit' className='MonumentExtended-Regular text-center text-white ' onClick={(e)=>{navigate('/')}}>Go Home</button>
      </div>
    </div>
  )
}
                    

export default TransactionAdding