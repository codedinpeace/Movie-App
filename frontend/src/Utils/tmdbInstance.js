import axios from 'axios'

const tmdbAxios = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:import.meta.env.VITE_TMDB_KEY
    }
})

export default tmdbAxios