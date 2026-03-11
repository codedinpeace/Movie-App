import {create} from 'zustand'
import tmdbInstance from '../Utils/tmdbInstance'

const useMovieStore = create((set)=>({
    trendingMovies:[],
    trendingShows:[],
    topRatedMovies:[],
    topRatedShows:[],
    popularMovies:[],
    popularShows:[],
    all_movies:[],
    all_shows:[],
    details:[],
    loading:false,

    getPopularMovies: async () => {
        set({loading:true})
        try {
            const response = await tmdbInstance.get("/movie/popular")
            set({popularMovies:response.data.results, loading:false})
        } catch (error) {
            console.log(error)
        }
    },
    
    getPopularShows: async () => {
        set({loading:true})
        try {
            const response = await tmdbInstance.get("/tv/popular")
            set({popularShows:response.data.results, loading:false})
        } catch (error) {
            console.log(error)
        }
    },

    getTrendingMovies: async () => {
        set({loading:true})

        try {
            const response = await tmdbInstance.get("/trending/movie/week")
            set({trendingMovies:response.data.results, loading:false})
        } catch (error) {
            console.log(error)
        }
    },
    getTrendingShows: async () => {
        set({loading:true})

        try {
            const response = await tmdbInstance.get("/trending/tv/week")
            set({trendingShows:response.data.results, loading:false})
        } catch (error) {
            console.log(error)
        }
    },

    getTopRatedMovies: async()=>{
        set({loading:true})

        try {
            const response = await tmdbInstance.get("/movie/top_rated")
            set({topRatedMovies:response.data.results, loading:false})
        } catch (error) {
            console.log(error)
        }
    },
    getTopRatedShows: async()=>{
        set({loading:true})

        try {
            const response = await tmdbInstance.get("/tv/top_rated")
            set({topRatedShows:response.data.results, loading:false})
        } catch (error) {
            console.log(error)
        }
    },

    getAllMovies : async () =>{
        set({loading:true})
        try {
            const response = await tmdbInstance.get("/discover/movie")
            set({all_movies:response.data.results, loading:false})
        } catch (error) {
            console.log(error)
        }
    },

    getAllShows: async () => {
        set({loading:true})
        try {
            const response = await tmdbInstance.get(`/discover/tv`)
            set({all_shows:response.data.results, loading:false})
        } catch (error) {
            console.log(error)
        }
    },

    getMovieById : async (id) => {  
        set({loading:true})
        try {
            const response = await tmdbInstance.get(`/movie/${id}`)
            set({details:response.data, loading:false})
        } catch (error) {
            console.log(error)
        }   
    }
}))

export default useMovieStore