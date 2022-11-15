import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SiHiveBlockchain } from "react-icons/si";
import { useSelector } from 'react-redux/es/exports';
import { useRef } from 'react';

const CreditCart = () => {
  
    const transactions = useSelector( state => state.transactions )

    const getTotal = () =>{
        let total = transactions.reduce((prvVal, curVal, i)=>{
            if(transactions !== []){
                    if( curVal.type === 'Income')
                        prvVal += +curVal.amount
                    else prvVal = prvVal - (+curVal.amount)
            }
            return prvVal
        }, 0)
    return total.toFixed(2)
    }



    return (
    <div className='w-full min-h[100vh]'>
        <div className='w-full pt-4 pb-12 flex md:flex-row flex-col justify-around md:items-end items-center md:gap-0 gap-10'>
            <div className='min-w-[20%] order-2 md:order-1 flex justify-center items-center text-center'>
                <Link to={'/transaction/Income'} className='bg-[#00C897] px-5 md:py-4 py-2 rounded-full MonumentExtended-Black text-white'>Add Income</Link>
            </div>
            <div className='md:w-[30%] max-w-[95%] order-1 md:order-2 bg-glass-card px-10 py-12 rounded-lg'>

                <div>
                    <div className='flex justify-between'>
                        <h5 className='Montserrat-Medium text-gray-600 text-xs'>Balance</h5>
                        <SiHiveBlockchain color='#6b21a8'/>
                    </div>
                </div> 
                <div>
                    <h1 className='MonumentExtended-Black py-4 md:text-2xl text-xl max-w-[60%] text-purple-800'>{getTotal()}$</h1>
                </div>
                <div >
                    <h1 className='MonumentExtended-Regular text-xs max-w-[80%] uppercase'>Mohamed Ali El Hassouni</h1>
                </div>
            </div>
            <div className='min-w-[20%] order-3 md:order-3 flex justify-center items-center text-center'>
                <Link to={'/transaction/Expense'} className='bg-[#FD5D5D] px-5 md:py-4 py-2 rounded-full MonumentExtended-Black text-white'>Add Expense</Link>
            </div>
        </div>
    </div>
  )
}

export default CreditCart