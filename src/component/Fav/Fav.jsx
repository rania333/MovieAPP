import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {removeMovie} from '../../store/action';

export default function Fav() {
    const mySelector = useSelector(state => state.favReducer.favMovies);
    const dispatch = useDispatch();
    let removeFromFav = (e, movie) => {
        dispatch(removeMovie(movie));
    }
    return (
        <div className="container">
        <div className="row">
            {mySelector.length>0 ? 
            mySelector.map((movie, index) => {
                let pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                return (
                <div className="col-3 py-2" key={index}>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={pic} className="card-img-top" style={{ height: '15rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">
                                {movie.vote_count}
                            </p>
                            <h2>
                                <i onClick={(e) => removeFromFav(e, movie)} 
                                className="bi bi-heart-fill text-danger"></i>
                            </h2>
                            <Link to={`/details/${movie.id}`} 
                            className="btn btn-info">
                                More Details</Link>
                        </div>
                    </div>
                </div>
                )
            }): <h1 className='mx-auto my-5 text-info'>
                You haven't add any movie to favourites yet
                </h1>} 
            </div>
            </div>
    )
}
