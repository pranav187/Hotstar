// import axios from "axios";

// const movieBaseUrl ="https://api.themoviedb.org/3"
// const api_key = '1d76f85d440f08d047553ce77408890c'

// //https://api.themoviedb.org/3/movie/157336?api_key=1d76f85d440f08d047553ce77408890c

// const getMovies = axios.get(this.movieBaseUrl + "/movie/157336?"+api_key);

// export default{
//     getMovies
// }

// import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3";
// const api_key = '1d76f85d440f08d047553ce77408890c';

// //https://api.themoviedb.org/3/movie/157336?api_key=1d76f85d440f08d047553ce77408890c

// const getMovies = () => axios.get(`${movieBaseUrl}/movie/157336?api_key=${api_key}`);

// export default {
//     getMovies
// };

import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '4e44d9029b1270a757cddc766a1bcb63';

// const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63'



//https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63

const getMovies = () => axios.get(`${movieBaseUrl}/movie/top_rated?api_key=${api_key}`);

// const getMovieByGenreId = (id) =>
//     axios.get(`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`);

const getMovieByGenreId = (id) =>
    axios.get(movieByGenreBaseURL + "&with_genres=" + id)

export default {
    getMovies,
     getMovieByGenreId
};


