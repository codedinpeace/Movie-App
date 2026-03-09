import React from 'react'
import bgHero from '../../../assets/bg2.webp'
import Navbar from '../../../Components/Navbar'

const HeroSection = () => {
  return (
    <div>
      <div className='absolute z-50'>
      <Navbar />
      </div>
    <div>
      <img src={bgHero} className='relative min-h-200 object-cover opacity-20' alt="" />
    </div>

<div className='flex justify-center flex-col items-center'>
    <div className="text top-[40%] absolute  flex flex-col items-center gap-3">
      <h1 className='text-5xl text-center font-bold text-white max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>Discover Movies You’ll Love</h1>
      <p className='text-gray-400 text-xl py-3 max-w-200 text-center max-lg:text-xl max-lg:max-w-170 max-md:text-lg max-md:max-w-120 max-sm:max-w-90 max-sm:text-[text-12px]'>Explore trending movies, popular releases, and hidden gems. Search, watch trailers, and save your favorites in one place.</p>
      <button className='bg-red-600 px-10 py-3 text-lg font-semibold text-white rounded-xl mx-auto block cursor-pointer hover:bg-transparent border-2 border-red-600'>Explore Movies</button>
    </div>
</div>
    </div>  
  )
}

export default HeroSection