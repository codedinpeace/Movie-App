import React, { useEffect, useRef, useState } from 'react'
import useMoviestore from '../../../States/useMovieStore'
import { Calendar, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import Loader from '../../../Components/Loader'
import { useNavigate } from 'react-router-dom'

const Movies_Trending = () => {

  const { loading, trendingMovies, getTrendingMovies } = useMoviestore()
  const trendingMoviesArr = trendingMovies.slice(0, 10)
  const navigate = useNavigate()

  const sliderRef = useRef(null)
  const [page, setPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(5)

  const cardWidth = 320 + 12

  // Responsive cards per page
  useEffect(() => {

    const handleResize = () => {
      const width = window.innerWidth

      if (width < 640) setCardsPerPage(1)
      else if (width < 880) setCardsPerPage(2)
      else if (width < 1024) setCardsPerPage(3)
      else if (width < 1280) setCardsPerPage(4)
      else setCardsPerPage(5)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [])

  const slideLeft = () => {
    if (page === 0) return

    const newPage = page - 1
    setPage(newPage)

    sliderRef.current.scrollTo({
      left: newPage * cardWidth * cardsPerPage,
      behavior: "smooth"
    })
  }

  const slideRight = () => {

    const maxPage = Math.ceil(trendingMovies.length / cardsPerPage) - 1
    if (page === maxPage) return

    const newPage = page + 1
    setPage(newPage)

    sliderRef.current.scrollTo({
      left: newPage * cardWidth * cardsPerPage,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    getTrendingMovies()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className='px-6 md:px-12 lg:px-20'>
      <div className="popular-card">

        {/* Header */}
        <div className="flex justify-between items-center mt-20">
          <h1 className='text-white text-3xl font-semibold'>
            Trending Top 10 Movies
          </h1>

          <div className="flex items-center gap-3 bg-[#111] p-2 rounded-xl border border-[#2a2a2a]">

            <button onClick={slideLeft} className="p-2 bg-black rounded-lg">
              <ChevronLeft className="text-white"/>
            </button>

            <div className="flex gap-1">
              <div className="w-6 h-[2px] bg-red-500"></div>
              <div className="w-3 h-[2px] bg-gray-500"></div>
              <div className="w-3 h-[2px] bg-gray-500"></div>
              <div className="w-3 h-[2px] bg-gray-500"></div>
            </div>

            <button onClick={slideRight} className="p-2 bg-black rounded-lg">
              <ChevronRight className="text-white"/>
            </button>

          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="cards mt-10 flex gap-5 overflow-hidden scroll-smooth"
        >

          {trendingMoviesArr.map((popularMovie) => (
            <div
            onClick={()=>{navigate(`/recommendations/details/${popularMovie.id}`)}}
              key={popularMovie.id}
              className='cursor-pointer min-w-[100%] sm:min-w-[48%] md:min-w-[31%] lg:min-w-[23%] xl:min-w-[18%] h-120 rounded-xl bg-[#1a1a1a] flex justify-center flex-col items-center'
            >

              <div className='w- h-[80%] my-5'>
                <img
                  className='h-full w-full object-cover rounded-xl'
                  src={`https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`}
                  alt=""
                />
              </div>

              <div className='flex justify-between w-full px-5 mb-5'>
                <div className='flex items-start gap-1 bg-[#070707] text-white py-1 px-3 rounded-full'>
                  <Calendar className='w-4'/>
                  <p className='text-[14px]'>{popularMovie.release_date.split("-")[0]}</p>
                </div>

                <div className='flex items-start gap-1 bg-[#070707] text-white py-1 px-3 rounded-full'>
                  <Eye className='w-5'/>
                  <p className='text-[14px]'>
                    {(popularMovie.popularity/100).toFixed(1).replace(".0","") + "k"}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Movies_Trending