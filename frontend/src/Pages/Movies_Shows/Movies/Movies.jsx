import React, { useEffect } from "react";
import Navbar from "../../../Components/Navbar";
import useMovieStore from "../../../States/useMovieStore";
import { Calendar, Eye } from "lucide-react";
import Loader from "../../../Components/Loader";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  
    const {loading, all_movies, getAllMovies} = useMovieStore()
    const navigate = useNavigate()

    useEffect(()=>{
        getAllMovies()
        console.log(all_movies)
    }, [])

    if(loading){
      return (
        <Loader />
      )
    }

  return (
    <>
      <Navbar />
      <div className="py-20">
        <div className="flex justify-center flex-col items-center mt-15 gap-2">
            <h1 className="text-5xl font-semibold text-white">All <span className="text-red-600">Movies</span></h1>
            <p className="text-xl text-gray-400">Discover over 300+ moveies on our CineVibe for absolutely free</p>
        </div>
      <div className="flex justify-around flex-wrap gap-10 mt-10">
        {all_movies.map((movie)=>(
            <div onClick={()=>{navigate(`/details/${movie.id}`)}} key={movie.id} className="movieCard w-90 h-120 py-10 rounded-xl bg-[#1a1a1a]">
                <div className="poster w-72 rounded-xl h-96  mx-auto block bg-green-500 ">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `} className="w-72 rounded-xl h-96 object-cover" alt="" />
                </div>
                <div className='flex py-3 justify-between w-full px-5 mb-5'>
                <div className='flex items-start gap-1 bg-[#070707] text-white py-1 px-3 rounded-full'>
                  <Calendar className='w-4'/>
                  <p className='text-[14px]'>{movie.release_date.split("-")[0]}</p>
                </div>

                <div className='flex items-start gap-1 bg-[#070707] text-white py-1 px-3 rounded-full'>
                  <Eye className='w-5'/>
                  <p className='text-[14px]'>
                    {(movie.popularity/100).toFixed(1).replace(".0","") + "k"}
                  </p>
                </div>
              </div>
            </div>
            ))}
      </div>
      </div>
    </>
  );
};

export default Movies;
