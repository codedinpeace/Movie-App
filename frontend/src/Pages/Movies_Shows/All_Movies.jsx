import React from 'react'
import Movies_TopRated from './Movies/Movies_Genres'
import Movies_NewReleased from './Movies/Movies_NewReleased'
import Movies_Trending from './Movies/Movies_Trending'
import Show_TopRated from './Shows/Shows_Genres'
import Shows_Trending from './Shows/Shows_Trending'
import Shows_NewReleased from './Shows/Shows_NewReleased'
import Navbar from '../../Components/Navbar'

const All_Movies = () => {
  return (
    <>
      <Navbar />
    <div className='pt-[88px]'>
    <div className="banner w-full">
      <div className="Text flex justify-center flex-col items-center mt-10">
        <h1 className='text-5xl font-bold text-white max-lg:text-3xl max-lg:text-center'>Explore The Most Trending <span className='text-red-600'>Movies</span> & <span className='text-red-600'>Shows</span></h1>
        <p className='text-xl text-gray-400 mt-3 max-w-200 text-center max-md:text-lg max-md:max-w-100'>CineVibe provides a large collection of movies and shows that you'd want to discover and add to your watchlist</p>
      </div>
    </div>
      <Movies_NewReleased />
      <Shows_NewReleased />
      <Movies_Trending />
      <Shows_Trending />
      <Movies_TopRated />
      <Show_TopRated />
    </div>
    </>
  )
}

export default All_Movies