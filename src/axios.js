import axios from 'axios'

const instance = axios.create({
    // baseURL:"https://api.themoviedb.org/3"
    baseURL:"https://api.themoviedb.org/3"
    // baseURL:"image.tmdb.org/t/p/w500"
})

export default instance