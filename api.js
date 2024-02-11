const API_KEY = '9c3b989e925346e1d15585302f9d420e';
export const urls = {
    TRENDING_MOVIES_URL : `/trending/movie/day`,
    MOVIE_CATEGORIES_URL: `/genre/movie/list`,
}

export const api = new axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    params : { 'api_key' : API_KEY } 
})
