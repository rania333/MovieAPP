import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { langContext } from '../../context/langContext';

export default function NavbarComponent() {
    const selector = useSelector(state => state.favReducer.favMovies);
    //context
    const {lang, setLang} = useContext(langContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Movie APP</Link>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="filter">Filter</Link>
                        </li>
                        <li className="nav-item position-relative">
                            <Link className="nav-link" to="/fav">Favourite</Link>
                            <span style={{margin: '-38% -5%'}} className=
                            "position-absolute start-100 translate-middle badge rounded-pill bg-info">
                                {selector.length}
                            </span>
                        </li>
                    </ul>
                    <div className="d-flex mx-5">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {lang}
                            </li>
                            <li className="nav-item btn btn-info mx-5"
                            onClick={() => setLang(lang == "en"? "fr": "en")}>
                                changeLang
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}
