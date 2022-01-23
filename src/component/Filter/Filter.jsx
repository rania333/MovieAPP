import axios from 'axios';
import React , {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import instance from '../../instance';
import {favMovie, removeMovie} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';
export default function Filter() {
    let [name, setName] = useState("");
    let [movie, setMovie] = useState([]);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.favReducer.favMovies);
    const myAPI = '1c806f1f768a2e0d31d46f2479a0ee17';
    useEffect(() => {
            axios.
            get
            (`https://api.themoviedb.org/3/search/movie?api_key=${myAPI}&
            language=en-US&query=${name}&page=${1}`)
            .then(movie => {
                const allMovies = movie.data.results;
                setMovie(allMovies);
            })
            .catch(err => {
                console.log(err);
            })
        }, [name]);
    const send = (e) => {
        e.preventDefault();
        let data = e.target[0].value;
        setName(data)
    }
    let EditFav = (e, movie) => {
        if (e.target.className == 'bi bi-heart') {
            dispatch(favMovie(movie));
            e.target.className = 'bi bi-heart-fill text-danger';
        } else {
            dispatch(removeMovie(movie));
            e.target.className = 'bi bi-heart';
        }
    }
    let checkFavMovie = (id) => {
        let exist = selector.find(movie => movie.id == id)
        return exist;
    }
    return (
        <div className="container">
        <div className='row justify-content-center'>
            <div className='py-5 col-8 '>
                <form className="d-flex" onSubmit={(e) => send(e)}>
                    <input className="form-control me-2" type="search" 
                    placeholder="Filter"
                    />
                    <button className="btn btn-outline-success" 
                    type="submit" >
                        Filter</button>
                </form>
            </div>
            <div className="row">
            {movie.map((moviee, index) => {
                    let pic = `https://image.tmdb.org/t/p/w500/${moviee.poster_path}`;
                    return (
                    <div className="col-3 py-2" key={index}>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={pic} className="card-img-top" style={{ height: '15rem'}}/>
                            <div className="card-body">
                                <h5 className="card-title">{moviee.title}</h5>
                                <p className="card-text">
                                    {moviee.vote_count}
                                </p>
                                {checkFavMovie(moviee.id) == undefined ? (
                                <h2>
                                    <i onClick={(e) => EditFav(e, moviee)} 
                                    className="bi bi-heart"></i>
                                </h2>) : (
                                    <h2>
                                    <i onClick={(e) => EditFav(e, moviee)} 
                                    className="bi bi-heart-fill text-danger"></i>
                                </h2>
                                )}
                                <Link to={`/details/${moviee.id}`} 
                                className="btn btn-primary">
                                    More Details</Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
