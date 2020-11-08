import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//function component 값만 가져올 경우 ({})로 받아야 함.
function Movie({id, year, title, summary, poster, genres}) {
    return (
    <div className="movies_movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h3 class="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                 <li key={index} className="genres_genre">
                     {genre}
                </li>
                ))}
            </ul>
            <p className="movie_summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
