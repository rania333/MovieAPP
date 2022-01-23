import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import instance from '../../instance';
export default function Details() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const myAPI = '1c806f1f768a2e0d31d46f2479a0ee17';
    const url =`${params.id}?api_key=${myAPI}`
    useEffect(() => {
        instance.get(url)
        .then(movie => {
            const myMovie = movie.data;
            setProduct(myMovie);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    let pic = `https://image.tmdb.org/t/p/w500/${product.poster_path}`;
    return (
        <div className='container'>
            <div className="row py-5 ms-5">
                <div className="col-8 row">
                    <div className="d-flex justify-content-between">
                        <div className='col-4'>
                            <img src={pic} 
                            className="card-img-top" style={{ height: '20rem', width: '20rem'}}/>
                        </div>
                        <div className='col-7'>
                            <h1>Movie id: {product.id}</h1>
                            <h4>Movie Name: {product.title}</h4>
                            <h5>Movie Rate: {product.vote_count}</h5>
                            <p>Movie Overview:
                                <small>{product.overview}</small>
                            </p>
                        </div>
                    </div>
                    <Link to='/' className="btn btn-info col-2 my-5"> Back to home </Link>
                </div>
            </div>            
        </div>
    )
}
