import React from 'react'
import Genre1 from '../../../assets/Genre.webp'
import Genre2 from '../../../assets/Genre1.webp'
import Genre3 from '../../../assets/Genre2.webp'
import Genre4 from '../../../assets/Genre3.webp'
import Genre5 from '../../../assets/Genre4.webp'

const MoviesByCategory = () => {

  const categories = [
    { img: Genre1, name: "Action" },
    { img: Genre2, name: "Horror" },
    { img: Genre3, name: "Adventure" },
    { img: Genre4, name: "Drama" },
    { img: Genre5, name: "Comedy" }
  ];

  return (
<div className='mt-40 px-15'>
  <div className='flex flex-col gap-1'>
    <h1 className='text-3xl font-semibold text-white max-md:text-2xl max-md:text-center'>Browse Movies By Categories</h1>
    <p className='text-xl text-gray-400 font-light max-md:text-[16px] max-md:text-center'>Discover trending movies, popular picks, and top-rated titles from around the world.</p>
  </div>

  <div className="cards flex justify-between mt-15 gap-1 max-md:gap-5 flex-wrap max-md:justify-center">
  {categories.map((cat, index) => (
  <div key={index} className='bg-[#1A1A1A] p-10 rounded-2xl hover:scale-110 transition-all duration-200'>
    <img src={cat.img} />
    <p className='text-white font-medium text-lg'>{cat.name}</p>
  </div>
))}
  </div>
</div>
  )
}

export default MoviesByCategory