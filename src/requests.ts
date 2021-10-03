const instance = "https://api.themoviedb.org/3";

const API_KEY = "da0641685072ef972d67b892aa216e57";

const requests = {
  fetchTrending: `${instance}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${instance}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${instance}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
