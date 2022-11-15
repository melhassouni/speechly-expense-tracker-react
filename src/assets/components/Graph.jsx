import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useRef } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);


const Graph = ({title}) => {

    const transactions = useSelector( state => state.transactions)
    const incomeCategoriesInfo = useSelector( state => state.incomeCategoriesInfo)
    const expenseCategoriesInfo = useSelector( state => state.expenseCategoriesInfo)

    const getTotal = (type) =>{ 
        let total = transactions.reduce((prvVal, curVal, i)=>{
            if(transactions !== []){
                if(transactions[i].type === type){
                    prvVal += +curVal.amount
                }
            }
            return prvVal
        }, 0)
    return total.toFixed(2)
    }

    const tmpData = useRef({})
    const [labels, setLabels] = useState(title === 'Income' ? incomeCategoriesInfo.filter( income =>income.amount !== 0).map( types => types.type ): expenseCategoriesInfo.filter( income => income.amount !== 0 ).map( types => types.type ))
    const [data, setData] = useState(title === 'Income' ? incomeCategoriesInfo.filter( income =>income.amount !== 0 ).map( types => types.amount ): expenseCategoriesInfo.filter( expense => expense.amount !== 0 ).map( types => types.amount ))
    const [backgroundColor, setBackgroundColor] = useState(title === 'Income' ? incomeCategoriesInfo.filter( income =>income.amount !== 0 ).map( types => types.color ): expenseCategoriesInfo.filter( expense => expense.amount !== 0 ).map( types => types.color ))
    const [chartDataSet, setChartDataSet] = useState({
                                                    labels: [labels],
                                                    datasets: [
                                                    {
                                                        label: '#',
                                                        data: [data],
                                                        backgroundColor: [backgroundColor],
                                                        borderWidth: 0,  
                                                    },],
                                                })


    const setChartData = async() => {
        const tmp = {
            labels: labels,
            datasets: [
              {
                label: '#',
                data: data,
                backgroundColor: backgroundColor,
                borderWidth: 0,  
            },],
          }
          if (tmp !== chartDataSet){
            setChartDataSet(tmp)
          }
    }

    const updateData = ()=>{
        setLabels(title === 'Income' ? incomeCategoriesInfo.filter( income =>income.amount !== 0).map( types => types.type )
        : expenseCategoriesInfo.filter( income => income.amount !== 0 ).map( types => types.type ))
        setData( title === 'Income' 
        ? incomeCategoriesInfo.filter( income =>income.amount !== 0 ).map( types => types.amount )
        : expenseCategoriesInfo.filter( expense => expense.amount !== 0 ).map( types => types.amount ))
        setBackgroundColor( title === 'Income' 
        ? incomeCategoriesInfo.filter( income =>income.amount !== 0 ).map( types => types.color )
        : expenseCategoriesInfo.filter( expense => expense.amount !== 0 ).map( types => types.color ))
    }

    useEffect(()=>{
        setChartData(tmpData)
    }, [tmpData.current])

    useEffect(()=>{
        updateData()
        tmpData.current = {
            labels: labels,
            datasets: [
              {
                label: '#',
                data: data,
                backgroundColor: backgroundColor,
                borderWidth: 0,  
            },],
          }
        setChartData(tmpData)
    }, [incomeCategoriesInfo, expenseCategoriesInfo, title, ])


  return (
    <div className='w-full h-full bg-glass-card flex flex-col justify-start items-center gap-4 py-6 px-6 '>
        <div className='w-[100%]'>
            <div>
                <h1 className='text-left MonumentExtended-Regular text-slate-500 text-xs'>{title}</h1>
                <h1 className='text-left MonumentExtended-Black text-purple-800 text-sm'>{getTotal(title)} $</h1>            
            </div>
        </div>
        <div className='w-[100%]'>
            <div>
                <div className='w-[90%]'>
                    <Doughnut data={chartDataSet}/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Graph