import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { useParams } from 'react-router-dom'
import useMovieStore from '../../States/useMovieStore'
import Loader from '../../Components/Loader'
import { Heart } from 'lucide-react'

const Information = () => {

  const {id} = useParams()
  const {details, getMovieById, loading} = useMovieStore()
  useEffect(()=>{
    getMovieById(id)
  },[])

  console.log(details)

  if(loading || details === null) {
    return (
      <Loader />
    )
  }
  
  return (
    <div>
      <Navbar />
      <div className='mt-17'>
        <div className="MainInfoPage">
          {details && (
              <>
            <div className="banner">
              <div className="image flex justify-center relative">
                <img src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} alt="" className='w-[100%] h-200  object-cover opacity-70' />
                <div className="overlayCard w-[100%]  h-200 absolute top-0 left-"></div>
              <div className="text absolute bottom-20 flex flex-col items-center">
                <h1 className='text-4xl font-bold text-white'>{details.title}</h1>
                <p className='text-xl text-white font- '>{details.tagline}</p>
                <div className='flex items-end gap-5 justify-center'>
                <div className='bg-[#1a1a1a] p-3 cursor-pointer rounded-xl mt-5'>
                  <Heart color='red' className='w-8 h-8'/>
                </div>
                <div>
                  <button className='px-7 py-2 border-2 border-red-600 bg-red-600 text-lg text-white font-semibold rounded-xl hover:bg-transparent'>Watch Trailer</button>
                </div>
                </div>
              </div>
              </div>
            </div>
            <div className="Information mt-10">
              <div className="description rounded-xl relative w-200 h-50  p-10 bg-[#1a1a1a]">
                <div className="description absolute top-5 right-5">
                  <p className='text-gray-400'>Description</p>
                </div>
                <p className='text-xl mt-7 rounded-xl text-white'>{details.overview}</p>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Information