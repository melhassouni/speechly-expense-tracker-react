import React from 'react'
import { Link } from 'react-router-dom'
import imageNotFound from '../assets/images/ball-404.png'

const NotFoundPage = () => {
    return(
      <div className='w-full min-h-[100vh] overflow-hidden flex flex-col justify-center'>
        <div className='w-[50%] m-auto flex flex-col gap-10 justify-center items-center z-[1000]'>  
        <div className='w-full m-auto flex md:flex-row flex-col justify-center items-center '>
            <span className='MonumentExtended-Black md:text-9xl text-7xl text-purple-900'>4</span>
            <img className='my-4 z-[1000]' src={imageNotFound} alt='g'/>
            <span className='MonumentExtended-Black md:text-9xl text-7xl text-purple-900'>4</span>
        </div>
        <p className='m-auto text-center Montserrat-Medium'>Oops! You have reached an unavailable page</p>   
        <Link to={'/'} className='bg-purple-800 py-4 px-6 MonumentExtended-Regular text-white'>Go Home</Link>
        </div>
      </div>
    )

}

export default NotFoundPage