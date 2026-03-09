import React from 'react'
import CTA from '../assets/CTAA.webp'

const DiscoverNow = () => {
  return (
    <div className='mt-35 flex justify-center px-5'>
      <div className='relative'>
        <img src={CTA} alt="" className='w-auto object-cover min-h-70 max-lg:h-90      rounded-xl' />
        <div className="text-button absolute top-[30%] max-md:top-[20%] px-20 py-10 w-full">
          <div className='flex justify-between items-center max-lg:flex-col max-lg:gap-5'>
          <div className=''>
            <h1 className='text-5xl font-bold text-white max-xl:text-4xl max-lg:text-3xl max-lg:text-center max-md:text-2xl' >Start Discovering Movies Today</h1>
            <p className='text-xl text-gray-400 mt-5 max-xl:max-w-150 max-lg:text-lg max-lg:max-w-120 max-lg:text-center max-md:text-[14px] max-md:max-w-80'>Browse thousands of movies, watch trailers, and build your personal watchlist.</p>
          </div>
          <div className=''>
            <button className='bg-red-600 border-2 border-red-600 px-7 py-3 rounded-xl text-lg text-white font-semibold hover:bg-transparent cursor-pointer max-md:px-5 max-md:py-2'>Explore Now</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverNow