import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3/movie';
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=e0acb9ed7c6c2c575a4f7337832469d6';

const api_key= 'e0acb9ed7c6c2c575a4f7337832469d6'

const getPopularMovies=axios.get(movieBaseURL+"/popular?api_key="+api_key)
const getMovieByGenreId=(id:number)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getPopularMovies,
    getMovieByGenreId
}