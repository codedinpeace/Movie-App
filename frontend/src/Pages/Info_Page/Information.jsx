import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { useParams } from 'react-router-dom'
import useMovieStore from '../../States/useMovieStore'
import Loader from '../../Components/Loader'
import { Calendar, Heart, Languages, Star } from 'lucide-react'

const Information = () => {

  const {id} = useParams()
  const {details, getMovieById, loading, cast} = useMovieStore()
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
                <p className='text-xl max-lg:text-[14px] text-white font- '>{details.tagline}</p>
                <div className='flex items-end gap-5 justify-center'>
                <div className='bg-[#1a1a1a] p-3 cursor-pointer rounded-xl mt-5'>
                  <Heart color='red' className='w-8 h-8'/>
                </div>
                <div>
                  <button className='px-7 py-2 border-2 border-red-600 bg-red-600 text-lg max-lg:text-[14px] text-white font-semibold rounded-xl hover:bg-transparent'>Watch Trailer</button>
                </div>
                </div>
              </div>
              </div>
            </div>
            <div className="Information mt-10 flex justify-center max-md:flex-col max-md:items-center gap-5">
              <div className='flex flex-col gap-5'>

              <div className="description rounded-xl relative w-200 max-xl:w-120 max-md:w-100   p-10 bg-[#1a1a1a]">
                <div className="description absolute top-5 right-5">
                  <p className='text-gray-400'>Description</p>
                </div>
                <p className='text-xl  mt-7 rounded-xl text-white '>{details.overview}</p>
              </div>
              <div className="flex rounded-xl gap-5 p-10 genres max-md:w-100 w-200 max-xl:w-120 bg-[#1a1a1a] relative">  
                <div className='absolute top-5 right-5 text-gray-400'>
                  <h3>Genres</h3>
                </div>
                {details.genres?.map((genre)=>(
                  <div key={genre.id} className='bg-[#111] p-5 rounded-2xl max-xl:p-2 mt-3'>
                     <h3 className='text-xl max-lg:text-[14px] font-semibold text-gray-400'>{genre.name}</h3> 
                  </div>
                ))}
              </div>  
              <div className="cast flex gap-5 bg-[#1a1a1a] max-md:w-100  flex-wrap w-200 max-xl:w-120 p-10 rounded-xl relative">
                <div className="heading text-gray-400 absolute top-3 right-3">Cast</div>
                {cast.slice(0,8).map((c)=>(
                  <div key={c.cast_id}>
                      <div className="image mt-5">
                      <img src={`https://image.tmdb.org/t/p/original${c.profile_path}`} className='rounded-lg w-20 h-20 object-cover'/>
                      </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="More-Info bg-[#1a1a1a] pt-10 pl-10 pr-10 max-lg:w-70 max-md:w-100 max-sm:w-100 max-md:flex-wrap max-md:gap-10  w-100 flex md:flex-col gap-10 items-start rounded-xl">
              <div className="released-year flex-col gap-3 flex pl-2">
                <div className='flex gap-2 text-gray-400  '>
                <Calendar /><h3 className='text-lg max-lg:text-[14px]'>Released Year</h3>
                </div>
                <div>
                  <h3 className='text-gray-200 text-xl max-lg:text-[16px]'>{details.release_date?.split("-")[0  ]}</h3>
                </div>
              </div>
              <div className="availableLanguages flex flex-col gap-3 items-start">
              <div className='flex gap-2 text-gray-400  '>
                <Languages /><h3 className='text-lg max-lg:text-[14px]'>Available Languages</h3>
                  </div>
                <div className="languages  p-2">
                  {details.spoken_languages?.map((language,index)=>(
                    <div key={index} className='text-lg max-lg:text-[16px] text-white bg-[#111] p-3 pr-5'>{language.name}</div>
                  ))}
                </div>
              </div>
              <div className="ratings flex-col gap-3 flex pl-2">
              <div className='flex gap-2 text-gray-400  '>
                <Star /><h3 className='text-lg max-lg:text-[14px]'>Ratings</h3>
                </div>
                <div>
                  <h3 className='text-gray-200 text-xl max-lg:text-[16px]'>{details.vote_average.toFixed(1)}/10</h3>
                </div>
              </div>
              <div className="availableLanguages flex flex-col gap-3 items-start">
              <div className='flex gap-2 text-gray-400  '>
                <Languages /><h3 className='text-lg max-lg:text-[16px]'>Production Companies</h3>
                  </div>
                <div className="languages  p-2 flex flex-wrap gap-2">
                  {details.production_companies?.map((language,index)=>(
                    <div key={index} className='text-lg max-lg:text-[14px] text-white bg-[#111] p-2'>{language.name}</div> 
                  ))}
                </div>
              </div>
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