const API_KEY = "1a41059ff5b2fe41211c04255cf877b4";

const requests = {
    fletchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fletchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fletchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fletchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fletchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fletchHorrornMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fletchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fletchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;