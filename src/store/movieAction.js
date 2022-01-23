import instance from "../instance";

export default function getMovies(count) {
    const myAPI = '1c806f1f768a2e0d31d46f2479a0ee17';
    return (dispatch) => {
        instance
        .get(`/popular?api_key=${myAPI}&page=${count}`)
        .then(res => {
            console.log(res);
            dispatch({type: 'SET-MOVIE', payload: res.data.results})
        })
        .catch(err => {
            console.log(err);
        })
    }
}