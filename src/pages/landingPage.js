import React from 'react'
import { CreditCard, TransactionHistory } from '../assets/components'
import Graph from '../assets/components/Graph'


const LandingPage = () => {
    return(
      <div className='w-full min-h-[100vh] bg-glassy py-5'>
        <div className='w-full'>
          <div className='min-w-[50%]'><CreditCard/></div>
        </div>
        <div className='min-h-full bottom-container w-full'>
          <div className='income-container'>
          <Graph title={'Income'}/>
          </div>
          <div className=' h-[50vh] history-container'>
            <TransactionHistory/>
          </div>
          <div className='expense-container'>
            <Graph title={'Expense'}/>
          </div>
        </div>
      </div>
    )

}

export default LandingPage