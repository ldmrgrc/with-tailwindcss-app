const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const API_URL = 'https://api.themoviedb.org/3'

const requests = {
    fetchTrending: `${API_URL}/trending/all/week?api_key=${API_KEY}&language=es-MX&page=1`,
    fetchNetflixOriginals: `${API_URL}/discover/tv?api_key=${API_KEY}&language=es-MX&with_networks=213`,
    fetchTopRated: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=es-MX&page=1`,
    fetchActionMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=28`,
    fetchComedyMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=35`,
    fetchHorrorMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=27`,
    fetchRomanceMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=10749`,
    fetchDocumentaries: `${API_URL}/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=99`,
}

export default requests